import "./App.css";
import InboxPage from "./Pages/InboxPage";
import { InboxProvider } from "./context/inboxContext";
import "../src/styles/variables.css";

function App() {
  return (
    <InboxProvider>
      <InboxPage />
    </InboxProvider>
  );
}

export default App;
