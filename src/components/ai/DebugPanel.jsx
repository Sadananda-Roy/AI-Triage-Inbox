import "../../styles/DebugPanel.css";
import { Badge, Button, Col, Row } from "antd";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  DisconnectOutlined,
  ExclamationCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";

const DebugPanel = ({ AI }) => {
  const statusBadgeData = () => {
    const valid = AI.validationErrors.length > 0 ? false : true;
    if (!valid)
      return (
        <div className="font-regular fs-0_8">
          <ExclamationCircleOutlined style={{ paddingRight: "4px" }} />
          Invalid - {AI.validationErrors.length} error(s)
        </div>
      );
    return (
      <div className="font-regular fs-0_8">
        <CheckCircleOutlined style={{ paddingRight: "4px" }} />
        Valid - {AI.validationErrors.length} error(s)
      </div>
    );
  };
  return (
    <div className="debug-panel pl-1 pr-1">
      {AI.isError && (
        <Row className="network-error-row">
          <Col span={18} className="network-error-details-wrapper">
            <DisconnectOutlined color="red" style={{ fontSize: "2em" }} />
            <div className="network-error-details">
              <div className="font-bold fs-1_2">Network Error</div>
              <div className="fs-0_8">{AI.errorMessage}</div>
            </div>
          </Col>
          <Col span={6} className="retry-button">
            <Button
              aria-label="Regenerate AI Analysis"
              onClick={AI.retry}
              icon={<SyncOutlined />}
              size="small"
              type="default"
              style={{ borderRadius: "1em" }}
            >
              Retry
            </Button>
          </Col>
        </Row>
      )}
      {!AI.isError && (
        <Row className="status-row mb-1">
          <Col span={12}>
            <Badge
              size="small"
              className="status-badge"
              count={statusBadgeData()}
              style={{
                backgroundColor:
                  AI.validationErrors.length > 0
                    ? "rgba(255, 0, 0, 0.19)"
                    : "rgba(26, 255, 0, 0.19)",
                padding: "0.5em 1em",
                borderRadius: "1em",
              }}
            />
          </Col>
          <Col span={12} className="retry-button-wrapper">
            {AI.fetchDuration && (
              <div className="font-bold fs-0_8">
                <ClockCircleOutlined /> {AI.fetchDuration}ms
              </div>
            )}
            <Button
              aria-label="Regenerate AI Analysis"
              className="retry"
              onClick={AI.retry}
              icon={<SyncOutlined />}
              size="small"
              type="default"
            >
              Retry
            </Button>
          </Col>
        </Row>
      )}
      {!AI.isError && AI.validationErrors.length > 0 && (
        <Row className="validation-error-row mb-1">
          <div className="font-bold fs-1_2">Validation Errors</div>
          <div className="validation-error-detail fs-0_9">
            {AI.validationErrors.map((item, index) => {
              return (
                <ol>
                  <li key={index}>{item}</li>
                </ol>
              );
            })}
          </div>
        </Row>
      )}
      {!AI.isError && (
        <Row className="raw-response-row">
          <div className="font-bold fs-1_2">Raw Response</div>
          <pre className="raw-response-container font-light fs-0_8">
            {JSON.stringify(AI.rawJSON, null, 10)}
          </pre>
        </Row>
      )}
    </div>
  );
};

export default DebugPanel;
