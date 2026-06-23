import { useState, useEffect, useRef, useCallback } from "react";
import { fetchAIResponse } from "../services/mockAI";
import { validateAIResponse } from "../data/schema";
import { AI_STATUS, ERROR_TYPES } from "../data/constants";

export function useAIAssist(itemId) {
  const cache = useRef(new Map());

  const abortRef = useRef(null);

  const streamIntervalRef = useRef(null);

  const [status, setStatus] = useState(AI_STATUS.IDLE);
  const [result, setResult] = useState(null);
  const [streamedDraft, setStreamedDraft] = useState("");
  const [rawJSON, setRawJSON] = useState(null);
  const [validationErrors, setValidationErrors] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [fetchDuration, setFetchDuration] = useState(null);
  const [userEditedDraft, setUserEditedDraft] = useState(false);
  const [errorType, setErrorType] = useState(null);

  function clearStream() {
    if (streamIntervalRef.current !== null) {
      clearInterval(streamIntervalRef.current);
      streamIntervalRef.current = null;
    }
  }

  function abortCurrent() {
    clearStream();
    if (abortRef.current) {
      abortRef.current.abort();
      abortRef.current = null;
    }
  }

  function resetState() {
    setStatus(AI_STATUS.IDLE);
    setResult(null);
    setStreamedDraft("");
    setRawJSON(null);
    setValidationErrors([]);
    setErrorMessage(null);
    setFetchDuration(null);
    setUserEditedDraft(false);
    setErrorType(null);
  }

  const runFetch = useCallback(async (id) => {
    abortCurrent();

    const controller = new AbortController();
    abortRef.current = controller;

    resetState();
    setStatus(AI_STATUS.LOADING);

    const startTime = Date.now();

    let response;
    try {
      response = await fetchAIResponse(id, controller.signal);
    } catch (err) {
      if (err.name === "AbortError") return;

      if (abortRef.current !== controller) return;

      setStatus(AI_STATUS.ERROR);
      setErrorType(ERROR_TYPES.NETWORK);
      setErrorMessage(err.message ?? "Failed to fetch AI response");
      return;
    }

    if (abortRef.current !== controller) return;

    const duration = Date.now() - startTime;
    setFetchDuration(duration);
    setRawJSON(response);

    const validation = validateAIResponse(response);
    if (!validation.valid) {
      const { draft_reply, ...rest } = response;

      cache.current.set(id, {
        response,
        result: rest,
        draft: draft_reply,
        errorType: ERROR_TYPES.VALIDATION,
        validationErrors: validation.errors,
      });

      setValidationErrors(validation.errors);
      setErrorType(ERROR_TYPES.VALIDATION);

      setResult(rest);
      setStreamedDraft(draft_reply);

      setStatus(AI_STATUS.DONE);

      return;
    }

    const { draft_reply, ...rest } = response;

    setResult(rest);

    cache.current.set(id, {
      response,
      result: rest,
      draft: draft_reply,
      errorType: null,
      validationErrors: [],
    });

    setStatus(AI_STATUS.STREAMING);

    const words = draft_reply.split(" ");
    let wordIndex = 0;

    streamIntervalRef.current = setInterval(
      () => {
        if (abortRef.current !== controller) {
          clearStream();
          return;
        }

        if (wordIndex < words.length) {
          const word = words[wordIndex];
          setStreamedDraft((prev) => (prev === "" ? word : prev + " " + word));
          wordIndex++;
        } else {
          clearStream();
          setStatus(AI_STATUS.DONE);
        }
      },
      randomBetween(30, 70),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!itemId) {
      abortCurrent();
      // eslint-disable-next-line react-hooks/set-state-in-effect
      resetState();
      return;
    }

    if (cache.current.has(itemId)) {
      const cached = cache.current.get(itemId);

      setResult(cached.result);
      setStreamedDraft(cached.draft);

      setRawJSON(cached.response);

      setValidationErrors(cached.validationErrors);
      setErrorType(cached.errorType);

      setErrorMessage(null);
      setStatus(AI_STATUS.DONE);
      setUserEditedDraft(false);
      return;
    }

    runFetch(itemId);

    return () => {
      abortCurrent();
    };
  }, [itemId, runFetch]);

  const stop = useCallback(() => {
    clearStream();
    abortCurrent();
    setStatus(AI_STATUS.DONE);
  }, []);

  const retry = useCallback(() => {
    if (!itemId) return;
    cache.current.delete(itemId);
    runFetch(itemId);
  }, [itemId, runFetch]);

  const updateDraft = useCallback((newText) => {
    setStreamedDraft(newText);
    setUserEditedDraft(true);
  }, []);

  return {
    status,
    isLoading: status === AI_STATUS.LOADING,
    isStreaming: status === AI_STATUS.STREAMING,
    isDone: status === AI_STATUS.DONE,
    isError: status === AI_STATUS.ERROR,

    result,
    streamedDraft,
    rawJSON,
    validationErrors,
    errorMessage,
    errorType,
    fetchDuration,
    userEditedDraft,

    stop,
    retry,
    updateDraft,
  };
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
