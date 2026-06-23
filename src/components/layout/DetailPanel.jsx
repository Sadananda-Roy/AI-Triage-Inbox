import MessageBody from "../detail/MessageBody";
import AssistantPanel from "./AssistantPanel";
import "../../styles/DetailPanel.css";
import { useInboxContext } from "../../context/inboxContext";
import { Col, Row } from "antd";
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import StatusControls from "../detail/StatusControls";
import { useEffect } from "react";

const DetailPanel = ({ detailsPanelRef }) => {
  const inbox = useInboxContext();

  useEffect(() => {
    detailsPanelRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inbox?.selectedItem?.id]);

  return (
    <div className="detail-panel" ref={detailsPanelRef} tabIndex={-1}>
      {inbox.selectedItem && (
        <Row className="message-header">
          <Col span={18} className="message-subject">
            <div className="subject fs-1_2 font-bold mb-0_8">
              {inbox.selectedItem.subject}
            </div>
            <div className="sender-name font-regular">
              <UserOutlined />
              <div>{inbox.selectedItem.sender.name}</div>
            </div>
            <div className="sender-email font-light fs-0_9">
              <MailOutlined />
              <div>{inbox.selectedItem.sender.email}</div>
            </div>
          </Col>
          <Col span={6} className="message-tags">
            <StatusControls
              id={inbox.selectedItem.id}
              status={inbox.selectedItem.status}
              priority={inbox.selectedItem.priority}
              updateItem={inbox.updateItem}
            />
          </Col>
        </Row>
      )}
      <MessageBody
        selectedItem={inbox.selectedItem}
        updateItem={inbox.updateItem}
        // filteredMessages={inbox.filteredMessages}
        // selectedId={inbox.selectedId}
        // selectItem={inbox.selectItem}
        // updateItem={inbox.updateItem}
      />
      <AssistantPanel id={inbox.selectedId} />
    </div>
  );
};

export default DetailPanel;
