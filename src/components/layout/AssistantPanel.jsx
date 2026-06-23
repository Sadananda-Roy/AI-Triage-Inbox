import { useAIAssist } from "../../hooks/useAIAssit";
import "../../styles/AssistantPanel.css";
// import AIAssistPanel from "../ai/AIAssistPanel";
// import DebugPanel from "../ai/DebugPanel";
import { Badge, Collapse, Skeleton } from "antd";
import { useInboxContext } from "../../context/inboxContext";
import { lazy, Suspense, useEffect, useState } from "react";
import {
  BugOutlined,
  CheckCircleFilled,
  ExclamationCircleFilled,
  LoadingOutlined,
  OpenAIOutlined,
} from "@ant-design/icons";
import { AI_STATUS, ERROR_TYPES } from "../../data/constants";

const DebugPanel = lazy(() => import("../ai/DebugPanel"));
const AIAssistPanel = lazy(() => import("../ai/AIAssistPanel"));

const AssistantPanel = ({ id }) => {
  const { selectedItem } = useInboxContext();
  const [activeKey, setActiveKey] = useState();

  const AI = useAIAssist(id);
  const getStatusBadge = (panelId) => {
    let icon;
    let label;
    let backgroundColor;

    // DEBUG PANEL
    if (panelId === 2) {
      if (AI.status === AI_STATUS.LOADING) {
        icon = <LoadingOutlined />;
        label = "Loading";
        backgroundColor = "rgba(109, 107, 107, 0.7)";
      } else if (AI.errorType === ERROR_TYPES.VALIDATION) {
        icon = <ExclamationCircleFilled style={{ color: "orangered" }} />;
        label = "Validation Error";
        backgroundColor = "rgba(255, 0, 0, 0.19)";
      } else if (AI.errorType === ERROR_TYPES.NETWORK) {
        icon = <ExclamationCircleFilled style={{ color: "orangered" }} />;
        label = "Network Error";
        backgroundColor = "rgba(255, 0, 0, 0.19)";
      } else {
        icon = <CheckCircleFilled style={{ color: "green" }} />;
        label = "Done";
        backgroundColor = "rgba(26, 255, 0, 0.19)";
      }
    }

    // AI ASSIST PANEL
    else {
      if (AI.errorType === ERROR_TYPES.NETWORK) {
        icon = <ExclamationCircleFilled style={{ color: "orangered" }} />;
        label = "Network Error";
        backgroundColor = "rgba(255, 0, 0, 0.19)";
      } else if (AI.status === AI_STATUS.LOADING) {
        icon = <LoadingOutlined />;
        label = "Loading";
        backgroundColor = "rgba(109, 107, 107, 0.7)";
      } else if (AI.status === AI_STATUS.STREAMING) {
        icon = <LoadingOutlined />;
        label = "Streaming";
        backgroundColor = "rgba(109, 107, 107, 0.7)";
      } else {
        icon = <CheckCircleFilled style={{ color: "green" }} />;
        label = "Done";
        backgroundColor = "rgba(26, 255, 0, 0.19)";
      }
    }

    const badgeContent = (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {icon}
        <span style={{ paddingLeft: "0.5em" }}>{label}</span>
      </div>
    );

    return (
      <Badge
        count={badgeContent}
        style={{
          backgroundColor,
          padding: "0.5em",
          borderRadius: "1em",
          fontSize: "0.8em",
        }}
      />
    );
  };
  const items = [
    {
      key: "1",
      label: (
        <span className="font-bold fs-1_2">
          <OpenAIOutlined /> AI Assist
        </span>
      ),
      children: (
        <Suspense fallback={<Skeleton />}>
          <AIAssistPanel id={id} AI={AI} />
        </Suspense>
      ),
      extra: getStatusBadge(1),
    },
    {
      key: "2",
      label: (
        <span className="font-bold fs-1_2">
          <BugOutlined /> Debug
        </span>
      ),
      children: (
        <Suspense fallback={<Skeleton />}>
          <DebugPanel AI={AI} />
        </Suspense>
      ),
      extra: getStatusBadge(2),
    },
  ];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveKey("1");
  }, [selectedItem?.id]);

  return (
    selectedItem && (
      <div className="assistant-panel">
        <Collapse
          // accordion
          className="assistant-collapse"
          items={items}
          activeKey={activeKey}
          // onChange={onChange}
          onChange={setActiveKey}
          size="small"
        />
      </div>
    )
  );
};

export default AssistantPanel;
