import { PRIORITY, STATUS, CATEGORY } from "../data/constants";

export const PRIORITY_BADGE_COLOR = {
  [PRIORITY.P1]: {
    color: "var(--priority-p1)",
    backgroundColor: "var(--priority-p1-bg)",
  },
  [PRIORITY.P2]: {
    color: "var(--priority-p2)",
    backgroundColor: "var(--priority-p2-bg)",
  },
  [PRIORITY.P3]: {
    color: "var(--priority-p3)",
    backgroundColor: "var(--priority-p3-bg)",
  },
};

export const STATUS_BADGE_COLOR = {
  [STATUS.NEW]: {
    color: "var(--status-new)",
    backgroundColor: "var(--status-new-bg)",
  },
  [STATUS.IN_PROGRESS]: {
    color: "var(--status-progress)",
    backgroundColor: "var(--status-progress-bg)",
  },
  [STATUS.DONE]: {
    color: "var(--status-done)",
    backgroundColor: "var(--status-done-bg)",
  },
};

export const CATEGORY_BADGE_COLOR = {
  [CATEGORY.BILLING]: {
    color: "#1976D2",
    background: "#E3F2FD",
  },
  [CATEGORY.CLAIMS]: {
    color: "#7B1FA2",
    background: "#F3E5F5",
  },
  [CATEGORY.ENDORSEMENT]: {
    color: "#00897B",
    background: "#E0F2F1",
  },
  [CATEGORY.GENERAL]: {
    color: "#546E7A",
    background: "#ECEFF1",
  },
  [CATEGORY.URGENT]: {
    color: "#D32F2F",
    background: "#FFEBEE",
  },
  [CATEGORY.SPAM]: {
    color: "#616161",
    background: "#F5F5F5",
  },
};

export function getConfidenceBadgeStyle(confidence) {
  if (confidence < 0.2) {
    return {
      backgroundColor: "#ffebe6",
      color: "#cf1322",
      fontWeight: "bold",
      marginRight: "0.5em",
      border: "0.1px solid #ff051a41",
    };
  }

  if (confidence < 0.5) {
    return {
      backgroundColor: "#fff7e6",
      color: "#d46b08",
      fontWeight: "bold",
      marginRight: "0.5em",
      border: "0.1px solid #ff7b0048",
    };
  }

  if (confidence < 0.8) {
    return {
      backgroundColor: "#fffbe6",
      color: "#d4b106",
      fontWeight: "bold",
      marginRight: "0.5em",
      border: "0.1px solid #f8d0064a",
    };
  }

  return {
    backgroundColor: "#f6ffed",
    color: "#389e0d",
    fontWeight: "bold",
    marginRight: "0.5em",
    border: "0.1px solid #4dff0042",
  };
}
