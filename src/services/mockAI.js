import { getMockResponse } from "../data/aiResponses";
import { MOCK_AI } from "../data/constants";

export async function fetchAIResponse(itemId, signal) {
  await simulateDelay(MOCK_AI.LATENCY_MIN, MOCK_AI.LATENCY_MAX, signal);

  if (Math.random() < MOCK_AI.FAILURE_RATE) {
    throw new Error(randomFailureMessage());
  }

  const response = getMockResponse(itemId);

  if (!response) {
    throw new Error(`No mock AI response found for item "${itemId}"`);
  }

  return { ...response };
}

function simulateDelay(min, max, signal) {
  const ms = randomBetween(min, max);

  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(new DOMException("Aborted", "AbortError"));
      return;
    }

    const timer = setTimeout(resolve, ms);

    signal?.addEventListener(
      "abort",
      () => {
        clearTimeout(timer);
        reject(new DOMException("Aborted", "AbortError"));
      },
      { once: true },
    );
  });
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFailureMessage() {
  const messages = [
    "AI service temporarily unavailable. Please try again.",
    "Request timed out. The AI service did not respond in time.",
    "Rate limit exceeded. Too many requests in a short period.",
    "AI service returned an unexpected response. Please retry.",
    "Network error: failed to reach the AI service.",
  ];
  return messages[randomBetween(0, messages.length - 1)];
}
