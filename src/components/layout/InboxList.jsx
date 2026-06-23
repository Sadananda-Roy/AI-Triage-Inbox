import FilterBar from "../inbox/FilterBar";
import InboxItem from "../inbox/InboxItem";
import "../../styles/InboxList.css";
import { useInboxContext } from "../../context/inboxContext";

const InboxList = ({ detailsPanelRef }) => {
  const inbox = useInboxContext();
  return (
    <div className="inbox-list" role="region" aria-label="Inbox List">
      <FilterBar
        checkAll={inbox.checkAll}
        filteredMessages={inbox.filteredMessages}
        uncheckAll={inbox.uncheckAll}
        checkedIds={inbox.checkedIds}
        setSearchQuery={inbox.setSearchQuery}
        setStatusFilter={inbox.setStatusFilter}
        setPriorityFilter={inbox.setPriorityFilter}
        bulkMarkDone={inbox.bulkMarkDone}
      />
      <InboxItem
        detailsPanelRef={detailsPanelRef}
        filteredMessages={inbox.filteredMessages}
        toggleChecked={inbox.toggleChecked}
        checkedIds={inbox.checkedIds}
        selectItem={inbox.selectItem}
        selectedId={inbox.selectedId}
      />
    </div>
  );
};

export default InboxList;
