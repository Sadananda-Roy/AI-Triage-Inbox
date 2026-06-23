import { useState, useMemo, useCallback } from "react";
import messagesData from "../data/messages.json";
import { FILTER_ALL, STATUS } from "../data/constants";

export function useInbox() {
  const [messages, setMessages] = useState(() =>
    [...messagesData].sort(
      (a, b) => new Date(b.received_at) - new Date(a.received_at),
    ),
  );

  const [selectedId, setSelectedId] = useState(null);

  const [checkedIds, setCheckedIds] = useState(new Set());

  const [statusFilter, setStatusFilter] = useState([]);
  const [priorityFilter, setPriorityFilter] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMessages = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return messages.filter((msg) => {
      // if (statusFilter !== FILTER_ALL && msg.status !== statusFilter)
      //   return false;
      // if (priorityFilter !== FILTER_ALL && msg.priority !== priorityFilter)
      //   return false;
      if (
        // STATUS_OPTIONS.every((value) => statusFilter.includes(value)) &&
        statusFilter.length > 0 &&
        !statusFilter.includes(msg.status)
      )
        return false;
      if (priorityFilter.length > 0 && !priorityFilter.includes(msg.priority))
        return false;
      if (q) {
        const haystack =
          `${msg.subject} ${msg.sender.name} ${msg.sender.email} ${msg.body}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [messages, statusFilter, priorityFilter, searchQuery]);

  const selectedItem = useMemo(
    () => messages.find((m) => m.id === selectedId) ?? null,
    [messages, selectedId],
  );

  const selectItem = useCallback((id) => {
    setSelectedId(id);
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedId(null);
  }, []);

  const toggleChecked = useCallback((id) => {
    setCheckedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const checkAll = useCallback((visibleMessages) => {
    setCheckedIds(new Set(visibleMessages.map((m) => m.id)));
  }, []);

  const uncheckAll = useCallback(() => {
    setCheckedIds(new Set());
  }, []);

  const updateItem = useCallback((id, patch) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, ...patch } : msg)),
    );
  }, []);

  const bulkMarkDone = useCallback(() => {
    setMessages((prev) =>
      prev.map((msg) =>
        checkedIds.has(msg.id) ? { ...msg, status: STATUS.DONE } : msg,
      ),
    );
    setCheckedIds(new Set());
  }, [checkedIds]);

  const clearFilters = useCallback(() => {
    setStatusFilter(FILTER_ALL);
    setPriorityFilter(FILTER_ALL);
    setSearchQuery("");
  }, []);

  const hasActiveFilters =
    statusFilter !== FILTER_ALL ||
    priorityFilter !== FILTER_ALL ||
    searchQuery.trim() !== "";

  return {
    // Data
    messages,
    filteredMessages,
    selectedId,
    selectedItem,
    checkedIds,

    // Filter state
    statusFilter,
    priorityFilter,
    searchQuery,
    hasActiveFilters,

    // Filter actions
    setStatusFilter,
    setPriorityFilter,
    setSearchQuery,
    clearFilters,

    // Selection actions
    selectItem,
    clearSelection,

    // Bulk selection actions
    toggleChecked,
    checkAll,
    uncheckAll,

    // Item mutation
    updateItem,
    bulkMarkDone,
  };
}
