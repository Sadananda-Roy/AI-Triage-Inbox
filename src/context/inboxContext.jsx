import { createContext, useContext } from "react";
import { useInbox } from "../hooks/useInbox";

const InboxContext = createContext(null);

export function InboxProvider({ children }) {
  const inbox = useInbox();
  return (
    <InboxContext.Provider value={inbox}>{children}</InboxContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useInboxContext() {
  const context = useContext(InboxContext);

  if (!context) {
    throw new Error("useInboxContext must be used inside InboxProvider");
  }

  return context;
}
