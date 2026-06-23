import { PauseCircleOutlined, ReloadOutlined } from "@ant-design/icons";
import { Badge, Button, Col, Popconfirm, Result, Row, Skeleton } from "antd";
import "../../styles/AIAssistPanel.css";
import TextArea from "antd/es/input/TextArea";
import {
  CATEGORY_BADGE_COLOR,
  getConfidenceBadgeStyle,
} from "../../utils/badgeColors";
import { useEffect, useRef } from "react";
import { ERROR_TYPES } from "../../data/constants";

const AIAssistPanel = ({ AI }) => {
  const textAreaRef = useRef(null);
  const panelAreaRef = useRef(null);
  const cancel = () => {};

  useEffect(() => {
    const textArea = textAreaRef.current?.resizableTextArea?.textArea;
    if (textArea) {
      textArea.scrollTop = textArea.scrollHeight;
    }
    const panel = panelAreaRef.current;

    if (panel) {
      panel.scrollTop = panel.scrollHeight;

      // console.log("s", panel.scrollHeight);
      // console.log(panel.clientHeight);
    }
  }, [AI.streamedDraft, AI.isStreaming]);

  if (AI.isLoading) return <Skeleton />;
  if (AI.isError && AI.errorType === ERROR_TYPES.NETWORK) {
    return (
      <Row className="network-error mb-1">
        <Result
          status="500"
          title={AI.errorMessage}
          extra={
            <Button
              aria-label="Regenerate AI Analysis"
              className="retry-button"
              size="large"
              onClick={AI.retry}
            >
              Retry
            </Button>
          }
        />
      </Row>
    );
  }
  if (!AI.result) return null;
  return (
    <div ref={panelAreaRef} className="ai-assist-panel pl-1 pr-1">
      <Row className="regenerate-row mb-1">
        <Col span={16} className="confidence-badge">
          <Badge
            className="category-badge"
            count={AI.result.category}
            size="medium"
            style={CATEGORY_BADGE_COLOR[AI.result.category]}
          />
          <div>
            <Badge
              className="fs-1_2"
              count={"Confidence - " + AI.result.confidence}
              size="medium"
              style={getConfidenceBadgeStyle(AI.result.confidence)}
            />
            {/* <span className="font-bold">Confidence</span> */}
          </div>
        </Col>
        <Col span={8} className="regenerate-button">
          {!AI.userEditedDraft ? (
            <Button
              aria-label="Regenerate AI Analysis"
              onClick={AI.retry}
              size="small"
              type="default"
              icon={<ReloadOutlined />}
            >
              Regenerate
            </Button>
          ) : (
            <Popconfirm
              placement="topRight"
              title="Replace AI analysis?"
              description="Any edits to the current draft will be lost."
              onConfirm={AI.retry}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button
                aria-label="Regenerate AI Analysis"
                // onClick={AI.retry}
                size="small"
                type="default"
                icon={<ReloadOutlined />}
              >
                Regenerate
              </Button>
            </Popconfirm>
          )}
        </Col>
      </Row>
      <Row className="summary-row mb-1">
        <div className="fs-1_2 font-bold">Summary</div>
        <ul>
          {AI.result.summary_bullets.map((item, index) => (
            <li key={index} className="fs-0_9">
              {item}
            </li>
          ))}
        </ul>
      </Row>
      <Row className="suggested-action-row mb-1">
        <div className="fs-1_2 font-bold">Suggested Action</div>
        <div className="fs-0_9">{AI.result.suggested_action}</div>
      </Row>
      <Row className="draft-reply-row">
        <div className="draft-reply-label">
          <div className="fs-1_2 font-bold">Draft Reply</div>
          {AI.isStreaming && (
            <Button
              aria-label="Stop AI Analysis"
              className="stop-button fs-0_8 font-light"
              onClick={AI.stop}
              type="primary"
              size="small"
              icon={<PauseCircleOutlined />}
            >
              Stop
            </Button>
          )}
        </div>
        <TextArea
          aria-label="Draft Reply"
          ref={textAreaRef}
          className="draft-reply-box"
          autoSize={{ minRows: 4, maxRows: 20 }}
          value={AI.streamedDraft}
          onChange={(e) => AI.updateDraft(e.target.value)}
        />
      </Row>
    </div>
  );
};

export default AIAssistPanel;
