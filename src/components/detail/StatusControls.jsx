import { Select } from "antd";
import "../../styles/StatusControls.css";
import {
  PRIORITY_DROPDOWN_OPTIONS,
  STATUS_DROPDOWN_OPTIONS,
} from "../../data/constants";
import {
  PRIORITY_BADGE_COLOR,
  STATUS_BADGE_COLOR,
} from "../../utils/badgeColors";

const StatusControls = ({ id, status, priority, updateItem }) => {
  return (
    <div className="status-controls">
      <Select
        aria-label={`Change Priority - ${priority}`}
        size="small"
        className="priority-select font-bold"
        value={priority}
        // style={{ width: 120 }}
        onChange={(e) => updateItem(id, { priority: e })}
        options={PRIORITY_DROPDOWN_OPTIONS}
        style={PRIORITY_BADGE_COLOR[priority]}
      />
      <Select
        aria-label={`Change Status - ${status}`}
        size="small"
        className="status-select font-bold"
        value={status}
        // style={{ width: 120 }}
        onChange={(e) => updateItem(id, { status: e })}
        options={STATUS_DROPDOWN_OPTIONS}
        style={STATUS_BADGE_COLOR[status]}
      />
    </div>
  );
};

export default StatusControls;
