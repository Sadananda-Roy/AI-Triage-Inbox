export const VALID_CATEGORIES = [
  "Billing",
  "Claims",
  "Endorsement",
  "General",
  "Urgent",
  "Spam",
];

export const VALID_PRIORITIES = ["P1", "P2", "P3"];

export function validateAIResponse(data) {
  const errors = [];

  if (data === null || typeof data !== "object" || Array.isArray(data)) {
    return {
      valid: false,
      data: null,
      errors: ["Response must be a JSON object, got: " + typeof data],
    };
  }

  if (!Array.isArray(data.summary_bullets)) {
    errors.push("summary_bullets must be an array");
  } else if (
    data.summary_bullets.length < 2 ||
    data.summary_bullets.length > 4
  ) {
    errors.push(
      `summary_bullets must have 2–4 items, got ${data.summary_bullets.length}`,
    );
  } else if (
    data.summary_bullets.some((b) => typeof b !== "string" || b.trim() === "")
  ) {
    errors.push("Every item in summary_bullets must be a non-empty string");
  }

  if (typeof data.category !== "string") {
    errors.push("category must be a string");
  } else if (!VALID_CATEGORIES.includes(data.category)) {
    errors.push(
      `category must be one of [${VALID_CATEGORIES.join(", ")}], got "${data.category}"`,
    );
  }

  if (typeof data.priority !== "string") {
    errors.push("priority must be a string");
  } else if (!VALID_PRIORITIES.includes(data.priority)) {
    errors.push(
      `priority must be one of [${VALID_PRIORITIES.join(", ")}], got "${data.priority}"`,
    );
  }

  if (
    typeof data.suggested_action !== "string" ||
    data.suggested_action.trim() === ""
  ) {
    errors.push("suggested_action must be a non-empty string");
  }

  if (typeof data.draft_reply !== "string" || data.draft_reply.trim() === "") {
    errors.push("draft_reply must be a non-empty string");
  }

  if (typeof data.confidence !== "number") {
    errors.push("confidence must be a number");
  } else if (data.confidence < 0 || data.confidence > 1) {
    errors.push(`confidence must be between 0 and 1, got ${data.confidence}`);
  }

  return {
    valid: errors.length === 0,
    data: errors.length === 0 ? data : null,
    errors,
  };
}

export function parseAndValidateAIResponse(jsonString) {
  let parsed;

  try {
    parsed = JSON.parse(jsonString);
  } catch (err) {
    return {
      valid: false,
      data: null,
      errors: [`JSON parse error: ${err.message}`],
      parseError: true,
    };
  }

  return {
    ...validateAIResponse(parsed),
    parseError: false,
  };
}
