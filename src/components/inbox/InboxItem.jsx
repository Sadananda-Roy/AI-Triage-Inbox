import { Badge, Checkbox, Col, Row } from "antd";
import "../../styles/inbox-item.css";
import { getTimeAgo } from "../../utils";
import {
  PRIORITY_BADGE_COLOR,
  STATUS_BADGE_COLOR,
} from "../../utils/badgeColors";
import { useEffect } from "react";

const InboxItem = ({
  filteredMessages,
  toggleChecked,
  checkedIds,
  selectItem,
  selectedId,
  detailsPanelRef,
}) => {
  useEffect(() => {
    setTimeout(() => {
      if (!selectedId && filteredMessages.length > 0) {
        selectItem(filteredMessages[0].id);
      }
    }, 1000);
  }, [filteredMessages, selectedId, selectItem]);

  return (
    <div className="inbox-item">
      {filteredMessages.map((item, index) => (
        <Row
          tabIndex={0}
          aria-label={`Mail from ${item.sender.name} - ${item.subject}. Priority - ${item.priority}. Status - ${item.status}`}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              selectItem(item.id);
            }
            if (e.key === " ") {
              e.preventDefault();
              toggleChecked(item.id);
            }
            if (e.key === "ArrowRight") {
              e.preventDefault();
              detailsPanelRef.current?.focus();
            }
          }}
          className={`inbox-item-row ${selectedId === item.id ? "item-selected" : ""}`}
          key={index}
          onClick={() => selectItem(item.id)}
        >
          <Col span={2} className="item-checkbox">
            <Checkbox
              // aria-label={`${checkedIds.has(item.id) ? "Checked" : "Unchecked"}`}
              aria-label={`Checkbox for mail from ${item.sender.name}`}
              checked={checkedIds.has(item.id)}
              onChange={() => toggleChecked(item.id)}
              onClick={(e) => e.stopPropagation()}
            />
          </Col>
          <Col span={22} className="item-content">
            <div className="sender-name mb-0_8">
              <div className="font-bold">{item.sender.name}</div>
              <div className="font-bold fs-0_8">
                {getTimeAgo(item.received_at)}
              </div>
            </div>
            <div className="subject font-bold fs-0_9">{item.subject}</div>
            <div className="preview-msg font-regular fs-0_8">{item.body}</div>
            <Row className="statuses">
              <Badge
                size="small"
                count={item.priority}
                style={PRIORITY_BADGE_COLOR[item.priority]}
              />
              <Badge
                size="small"
                count={item.status}
                style={STATUS_BADGE_COLOR[item.status]}
              />
            </Row>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default InboxItem;
