import { Col, Row } from "antd";
import { MailTwoTone } from "@ant-design/icons";
import "../styles/InboxPage.css";
import DetailPanel from "../components/layout/DetailPanel";
import InboxList from "../components/layout/InboxList";
import { useRef } from "react";

const InboxPage = () => {
  const detailsPanelRef = useRef(null);
  return (
    <div className="inbox-page">
      <Row className="title-bar" aria-label="Title Bar" role="banner">
        <Col span={12} className="logo">
          {/* <InboxOutlined className="logo-icon" /> */}
          <MailTwoTone className="logo-icon" />
          <div className="font-bold fs-1_2">AI Triage Inbox</div>
        </Col>
        {/* <Col span={12} className="debug-button">
          <Button icon={<BugOutlined />}>Debug</Button>
        </Col> */}
      </Row>
      <Row>
        <Col span={6} className="left-panel">
          <InboxList detailsPanelRef={detailsPanelRef} />
        </Col>
        <Col span={18} className="right-panel">
          <DetailPanel detailsPanelRef={detailsPanelRef} />
        </Col>
      </Row>
    </div>
  );
};

export default InboxPage;
