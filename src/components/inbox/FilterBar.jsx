import { CheckOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Input, Row, Select } from "antd";
import "../../styles/FilterBar.css";
import {
  PRIORITY_DROPDOWN_OPTIONS,
  STATUS_DROPDOWN_OPTIONS,
} from "../../data/constants";

const FilterBar = ({
  checkAll,
  filteredMessages,
  uncheckAll,
  checkedIds,
  setSearchQuery,
  setStatusFilter,
  setPriorityFilter,
  bulkMarkDone,
}) => {
  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }

  const handleCheckAll = (e) => {
    if (e.target.checked) checkAll(filteredMessages);
    else uncheckAll();
  };

  return (
    <div className="filter-bar">
      <Input
        aria-label="Enter text to search"
        className="filter-input"
        size="medium"
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search mail"
        prefix={<SearchOutlined />}
      />
      <Row className="status-priority" gutter={16}>
        <Col span={12}>
          <Select
            aria-label="Filter by Priority - Multi Select"
            className="priority-select fs-0_8"
            mode="multiple"
            size="small"
            allowClear
            // style={{ width: "100%", borderRadius: "1em", padding: "0.5em" }}
            placeholder="Filter by Priority"
            defaultValue={[]}
            onChange={(e) => setPriorityFilter(e)}
            options={PRIORITY_DROPDOWN_OPTIONS}
          />
        </Col>
        <Col span={12}>
          <Select
            aria-label="Filter by Status - Multi Select"
            className="status-select fs-0_8"
            mode="multiple"
            size="small"
            allowClear
            // style={{ width: "100%", borderRadius: "1em", padding: "0.5em" }}
            placeholder="Filter by Status"
            defaultValue={[]}
            onChange={(e) => setStatusFilter(e)}
            options={STATUS_DROPDOWN_OPTIONS}
          />
        </Col>
      </Row>
      <Row className="selected-row">
        <Col span={12} className="select-checkbox">
          <Checkbox
            aria-label="Checkbox to select all mails"
            onChange={(e) => handleCheckAll(e)}
            checked={
              filteredMessages.length > 0 &&
              filteredMessages.every((msg) => checkedIds.has(msg.id))
            }
          >
            {checkedIds.size} Selected
          </Checkbox>
        </Col>
        {checkedIds.size > 0 && (
          <Col span={12} className="mark-done-button">
            <Button
              aria-label="Mark all Mails as done"
              size="small"
              type="link"
              icon={<CheckOutlined />}
              onClick={bulkMarkDone}
            >
              Mark Done
            </Button>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default FilterBar;
