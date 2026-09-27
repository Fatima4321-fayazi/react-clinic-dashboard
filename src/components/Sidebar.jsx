import { NAV_ITEMS } from "../App";
import "./Sidebar.css";

// Props:
// - activePage: the key of the page currently shown (used to highlight the link)
// - onNavigate: function called with a page key when a link is clicked
function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-badge">
          M<span className="logo-dot"></span>
        </div>
        <div>
          <div className="logo-title">MyPatientHUB</div>
          <div className="logo-subtitle">Teach | Trace | Promote</div>
        </div>
      </div>

      <nav>
        <ul className="sidebar-nav">
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <button
                className={
                  "sidebar-link" + (activePage === item.key ? " active" : "")
                }
                onClick={() => onNavigate(item.key)}
              >
                <span className="sidebar-icon">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
