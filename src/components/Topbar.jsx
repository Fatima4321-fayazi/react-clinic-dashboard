import "./Topbar.css";

// Props:
// - currentPageLabel: text shown in the breadcrumb ("Dashboard", "Find Clinic", etc.)
function Topbar({ currentPageLabel }) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <span className="breadcrumb-icon">🏠</span>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">{currentPageLabel}</span>
        <span className="menu-icon">☰</span>
      </div>

      <div className="topbar-right">
        <div className="topbar-search">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Type here..." />
        </div>

        <button className="logout-button">
          <span>👤</span> Log out
        </button>

        <span className="topbar-icon">⚙️</span>
        <span className="topbar-icon">🔔</span>
      </div>
    </header>
  );
}

export default Topbar;
