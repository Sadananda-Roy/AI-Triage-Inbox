export const STATUS = {
  NEW: "New",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};

export const STATUS_OPTIONS = [STATUS.NEW, STATUS.IN_PROGRESS, STATUS.DONE];

export const PRIORITY = {
  P1: "P1",
  P2: "P2",
  P3: "P3",
};

export const PRIORITY_OPTIONS = [PRIORITY.P1, PRIORITY.P2, PRIORITY.P3];

export const PRIORITY_LABEL = {
  P1: "Urgent",
  P2: "Normal",
  P3: "Low",
};

export const CATEGORY = {
  BILLING: "Billing",
  CLAIMS: "Claims",
  ENDORSEMENT: "Endorsement",
  GENERAL: "General",
  URGENT: "Urgent",
  SPAM: "Spam",
};

export const CATEGORY_OPTIONS = [
  CATEGORY.BILLING,
  CATEGORY.CLAIMS,
  CATEGORY.ENDORSEMENT,
  CATEGORY.GENERAL,
  CATEGORY.URGENT,
  CATEGORY.SPAM,
];

export const CHANNEL = {
  EMAIL: "email",
  CHAT: "chat",
};

export const MOCK_AI = {
  LATENCY_MIN: 200,
  LATENCY_MAX: 1200,

  FAILURE_RATE: 0.12,

  STREAM_WORD_DELAY_MIN: 30,
  STREAM_WORD_DELAY_MAX: 70,
};

export const FILTER_ALL = "all";

export const STATUS_DROPDOWN_OPTIONS = [
  { value: STATUS.NEW, label: "New" },
  { value: STATUS.IN_PROGRESS, label: "In Progress" },
  { value: STATUS.DONE, label: "Done" },
];

export const PRIORITY_DROPDOWN_OPTIONS = [
  { value: PRIORITY.P1, label: "P1" },
  { value: PRIORITY.P2, label: "P2" },
  { value: PRIORITY.P3, label: "P3" },
];

export const AI_STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  STREAMING: "streaming",
  DONE: "done",
  ERROR: "error",
};

export const ERROR_TYPES = {
  VALIDATION: "validation",
  NETWORK: "network",
};
