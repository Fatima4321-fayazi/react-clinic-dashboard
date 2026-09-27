import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import FindClinic from "./pages/FindClinic";
import FindDoctor from "./pages/FindDoctor";
import "./App.css";

// This list drives both the sidebar links AND the breadcrumb text.
// Add a new page here later (e.g. "Appointments") and it will show up automatically.
export const NAV_ITEMS = [
  { key: "dashboard", label: "Dashboard", icon: "🏠" },
  { key: "appointments", label: "Appointments", icon: "📅" },
  { key: "findDoctor", label: "Find Doctor", icon: "🩺" },
  { key: "findClinic", label: "Find Clinic", icon: "🏥" },
  { key: "chat", label: "Chat", icon: "💬" },
  { key: "marketplace", label: "Find MarketPlace", icon: "🛍️" },
  { key: "pharmacy", label: "Find Pharmacy", icon: "💊" },
  { key: "dependents", label: "My Dependents", icon: "👪" },
  { key: "account", label: "My Account", icon: "👤" },
  { key: "settings", label: "Settings", icon: "⚙️" },
];

function App() {
  // activePage decides which page component is shown on the right.
  // This is a UI-only setup: no routing library, just simple state.
  const [activePage, setActivePage] = useState("dashboard");

  // Renders the correct page based on activePage.
  // Pages that aren't built yet just show a "Coming soon" placeholder.
  function renderPage() {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "findClinic":
        return <FindClinic />;
      case "findDoctor":
        return <FindDoctor />;
      default:
        return (
          <div className="placeholder-page">
            <h2>This page is coming soon</h2>
            <p>We haven't built the "{activePage}" screen yet.</p>
          </div>
        );
    }
  }

  const currentNavItem = NAV_ITEMS.find((item) => item.key === activePage);

  return (
    <div className="app-layout">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />

      <div className="app-main">
        <Topbar currentPageLabel={currentNavItem ? currentNavItem.label : ""} />

        <div className="app-content">{renderPage()}</div>
      </div>
    </div>
  );
}

export default App;
