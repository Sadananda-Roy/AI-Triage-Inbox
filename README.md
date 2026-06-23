# AI Triage Inbox

A frontend-only React app that helps ops and sales teams triage inbound messages quickly with AI-assisted suggestions — summary, classification, suggested action, and draft reply. The AI is assistive; the user stays in control.

**Live demo:** _https://ai-triage-inbox-xi.vercel.app/_

---

## Setup

```bash
npm install
npm run dev
```

Runs on `http://localhost:5173` by default.

No environment variables are required to run the app — it works fully in Mock AI mode out of the box.

---

## Tech stack

| Tool                  | Purpose                                         |
| --------------------- | ----------------------------------------------- |
| React 18 + Vite       | App framework and build tool                    |
| Ant Design            | Collapse panels, Select, Button, Tag components |
| CSS custom properties | Design token system (`variables.css`)           |
| Plain JS (no Zod)     | AI response schema validation                   |

---

## Features

### Inbox list

- Displays sender, subject, received time (relative), status, and priority for each message
- **Filters** by status (New / In Progress / Done) and priority (P1 / P2 / P3)
- **Client-side search** across sender name, email, subject, and message body
- **Bulk select** with checkbox per row — select all visible, mark done, clear selection

### Item detail view

- Full message body with preserved line breaks
- Inline status and priority controls — changes reflect immediately in the list row

### AI assist panel

- **Summary** — 2–4 bullet points extracted from the message
- **Category** — Billing / Claims / Endorsement / General / Urgent / Spam
- **Confidence score** — 0–1 float shown alongside category
- **Suggested next action** — single line
- **Draft reply** — streams in word by word
- **Stop** control — halts streaming mid-way; partial draft stays visible
- **Regenerate** — clears cache for the item and re-fetches; shows a confirmation warning if the user has edited the draft
- Results are cached per item — switching back to a previously viewed message is instant

### Debug panel

- Toggle globally via the toolbar button
- Shows raw AI JSON response
- Validation status: ✓ Valid or ✗ Invalid with numbered error list
- Fetch timing in ms
- Retry button to re-trigger the AI call from within the debug panel

### Mock AI

- Deterministic — same item always produces the same response
- Simulated latency: 200–1200ms random delay per call
- Simulated failure rate: ~12% of calls throw a realistic error
- Streaming simulation: draft reply is revealed word by word at 30–70ms per word
- Two deliberately invalid responses in the dataset (`itm_006`, `itm_026`) to exercise schema validation

---

## Dataset

28 mock messages covering all required edge cases:

- Spam / phishing (3 variants: prompt injection, reward scam, policy suspension fake)
- Multi-topic messages (2–3 unrelated issues in one message)
- Very short messages ("ok", "what are your office hours?")
- Real-time emergency via chat (customer at scene of car fire)
- Repeat claims, claim appeals, fleet/B2B inquiries
- All statuses (New, In Progress, Done), all priorities (P1–P3), all AI categories represented

---

## Project structure

```
src/
  pages/          InboxPage.jsx — root, instantiates all hooks
  components/
    inbox/        FilterBar, InboxItem, BulkActionBar
    detail/       MessageBody, StatusControls
    ai/           AIAssistPanel, SummaryList, DraftReply, DebugPanel
    layout/           Badge, Skeleton, EmptyState, Button
  hooks/          useInbox, useAIAssist
  services/       mockAI.js
  data/           messages.json, aiResponses.js, schema.js, constants.js
  styles/         variables.css, global index.css
```

---

## State architecture

- **`useInbox`** — owns the full message list, filter state, single selection (`selectedId`), and multi-selection (`checkedIds`). These are two completely separate states — checking a checkbox never opens the message.
- **`useAIAssist`** — owns the AI request lifecycle per selected item: per-item cache (Map keyed by itemId), AbortController for cancellation, streaming via `setInterval`, race condition guard (checks itemId still matches before setting state).

---

## Async handling and correctness

- **Race conditions** — every AI response is discarded if the itemId has changed since the request was fired. The AbortController ref is compared before any state update.
- **Cancellation** — switching items or clicking Stop aborts the in-flight request and clears the stream interval.
- **Cache** — validated responses are stored in a `useRef` Map. Cache is invalidated on retry.
- **Edit protection** — if the user has typed in the draft textarea, regenerating shows a confirmation before overwriting.
- **Schema validation** — every AI response is validated before being displayed. Invalid responses surface in the debug panel with specific field-level errors.

---

## Performance

Lighthouse scores (desktop):

| Metric         | Score |
| -------------- | ----- |
| Performance    | _88_  |
| Best Practices | _100_ |
| Accessibility  | _94_  |
| SEO            | _100_ |

_See `/docs/screenshots/Lighthouse Summary.png/` for screenshots._
_See `/docs/Lighthouse Summary.pdf/` for the summary._

**What was optimised:**

- `React.memo` on `InboxItem` — the list re-renders frequently as selection changes; memoising each row prevents unnecessary work
- `useMemo` for `filteredMessages` and `selectedItem` — filtering runs once on state change, not on every render
- `useCallback` on all action callbacks passed as props — keeps memoised children stable
- Lazy initial state in `useState(() => [...])` — JSON is parsed once, not on every render

**What was not optimised and why:**

- No virtual list (react-window) — 28 items render fine without it; adding it would be the first optimisation at 200+ items
- No code splitting — single page app with one route; the bundle is small enough that splitting adds no meaningful benefit

---

## What I'd do next with more time

- **Real AI integration**
- **Mobile layout** — the two-column layout collapses to a single column on narrow viewports; the detail panel would push on top of the list on item select, with a back button
- **Dark mode**
- **Optimistic status updates** — marking an item done currently updates local state only; a real backend would need optimistic updates with rollback on failure

---

## Total time spent

**~23 hours** — see `TIMELOG.md` for full breakdown.
