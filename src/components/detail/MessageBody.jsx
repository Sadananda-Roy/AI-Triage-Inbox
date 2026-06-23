import {} from "react";
import { Skeleton } from "antd";
import "../../styles/MessageBody.css";

const MessageBody = ({ selectedItem }) => {
  return (
    <div>
      {!selectedItem ? (
        <>
          <Skeleton style={{ padding: "1em" }} />
          <Skeleton style={{ padding: "1em" }} />
        </>
      ) : (
        <div className="message-body">
          {/* <Row className="message-header">
            <Col span={18} className="message-subject">
              <div className="subject">{selectedItem.subject}</div>
              <div className="sender-name">
                <UserOutlined />
                <div>{selectedItem.sender.name}</div>
              </div>
              <div className="sender-email">
                <MailOutlined />
                <div>{selectedItem.sender.email}</div>
              </div>
            </Col>
            <Col span={6} className="message-tags">
              <StatusControls
                id={selectedItem.id}
                status={selectedItem.status}
                priority={selectedItem.priority}
                updateItem={updateItem}
              />
            </Col>
          </Row> */}
          <div className="message-content fs-0_9">
            <p className="">{selectedItem.body}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageBody;
