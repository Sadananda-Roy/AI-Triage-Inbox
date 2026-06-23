# TIMELOG — AI Triage Inbox

Total: **~23 hours**

---

| Date       | Hours | Work done                                                                                                                          |
| ---------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 2026-06-21 | 1.5h  | Project setup — Vite + React scaffold, folder structure, `variables.css` design token system                                       |
| 2026-06-21 | 1.0h  | `messages.json` — 28 mock messages covering all edge cases (spam, multi-topic, urgent, short, long)                                |
| 2026-06-21 | 1.5h  | `aiResponses.js` — 28 deterministic AI responses including 2 deliberately invalid entries for schema testing                       |
| 2026-06-21 | 0.5h  | `schema.js` + `constants.js` — validation logic, enums, mock AI config values                                                      |
| 2026-06-22 | 1.5h  | `mockAI.js` — latency simulation, failure rate, AbortSignal support                                                                |
| 2026-06-22 | 1.5h  | `useInbox` hook — message list, dual selection model (selectedId vs checkedIds), filter state, `useMemo` derived list              |
| 2026-06-22 | 2.5h  | `useAIAssist` hook — per-item cache, AbortController lifecycle, streaming simulation, race condition guard, stop/retry/updateDraft |
| 2026-06-23 | 1.5h  | `InboxPage` + layout — two-column flex layout, toolbar, debug toggle wiring                                                        |
| 2026-06-23 | 1.5h  | `InboxList` + `InboxItem` — row layout, status/priority/category badges, checkbox behaviour, keyboard selection highlight          |
| 2026-06-23 | 0.5h  | `FilterBar` — search input, status pills, priority pills, active filter count, clear all                                           |
| 2026-06-23 | 1.5h  | `MessageBody` — fixed header + scrollable content layout, `white-space: pre-wrap` body, tags                                       |
| 2026-06-23 | 0.5h  | `StatusControls` — status + priority selects, notes textarea with save-on-blur                                                     |
| 2026-06-23 | 1.5h  | `AIAssistPanel` — loading/error/done states, category badge, confidence, summary, suggested action                                 |
| 2026-06-23 | 1.5h  | `DraftReply` — streaming display, Stop button, edit detection, regenerate warning                                                  |
| 2026-06-23 | 1.0h  | `DebugPanel` — raw JSON display, validation status, timing, retry                                                                  |
| 2026-06-24 | 1.0h  | `AssistantPanel` layout — fixed/collapsible section layout                                                                         |
| 2026-06-24 | 1.0h  | Detail panel scroll bug — `min-height: 0` chain audit, `flex: 1 1 0` fix, `50vh` vs `50%` fix                                      |
| 2026-06-24 | 1.5h  | UI polish — selected row blue border, badge colours                                                                                |
| 2026-06-24 | 0.5h  | Lighthouse                                                                                                                         |
| 2026-06-24 | 0.5h  | README + TIMELOG                                                                                                                   |

---

## What was cut / de-scoped

**Real AI integration** — Cut to stay within time budget; Mock AI mode fully satisfies the assignment requirements.

**Mobile responsive layout** — No dedicated breakpoints were written. The two-column layout does not collapse on narrow screens.

**Dark mode**
