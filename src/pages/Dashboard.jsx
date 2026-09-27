import "./Dashboard.css";

// Static placeholder data — this is UI only, so numbers are hard-coded for now.
const clinicPromotions = [
  { name: "Klinik Lee Healthcare", percent: 19, color: "#e6007e" },
  { name: "Klinik Bandar Baru Nilai", percent: 4, color: "#facc15" },
  { name: "Klinik Mediviron Giant Nilai", percent: 10, color: "#3b82f6" },
  { name: "KLINIK NILAI IMPIAN", percent: 21, color: "#22c55e" },
  { name: "Klinik Mediviron", percent: 2, color: "#1f2937" },
];

const pharmacyPromotions = [
  { name: "ALPRO PHARMACY NILAI", percent: 15, color: "#1f2937" },
  { name: "ALPRO PHARMACY PEKAN NILAI", percent: 12, color: "#3b82f6" },
  { name: "OK PHARMACY", percent: 5, color: "#a855f7" },
  { name: "PHARMART PHARMACY NILAI", percent: 9, color: "#e6007e" },
  { name: "Health Lane Family Pharmacy", percent: 14, color: "#94a3b8" },
];

const appUsage = [
  { name: "Food Panda", percent: 25, color: "#e6007e" },
  { name: "Grab Food", percent: 3, color: "#1f2937" },
];

// Turns a list of {percent, color} into a CSS conic-gradient string,
// so we can draw a donut chart with plain CSS (no chart library).
function buildDonutGradient(items) {
  let current = 0;
  const stops = items.map((item) => {
    const start = current;
    const end = current + item.percent;
    current = end;
    return `${item.color} ${start}% ${end}%`;
  });
  // Fill the remainder of the circle with a light grey.
  stops.push(`#eef0f5 ${current}% 100%`);
  return `conic-gradient(${stops.join(", ")})`;
}

// Reusable card for "Promotion by X" — takes a title and a list of items.
function PromotionCard({ title, items }) {
  return (
    <div className="dash-card">
      <div className="dash-card-header">
        <h3>{title}</h3>
        <span className="info-icon">ⓘ</span>
      </div>

      <div className="donut-row">
        <div
          className="donut-chart"
          style={{ background: buildDonutGradient(items) }}
        >
          <div className="donut-hole"></div>
        </div>

        <ul className="promotion-list">
          {items.map((item) => (
            <li key={item.name}>
              <span
                className="legend-dot"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="legend-name">{item.name}</span>
              <span className="legend-percent">{item.percent}%</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="more-details-button">MORE DETAILS</button>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2 className="dashboard-welcome">Welcome To MyPatientHUB!</h2>

      <div className="dashboard-grid">
        <PromotionCard title="Promotion by Clinics" items={clinicPromotions} />
        <PromotionCard
          title="Promotion by Pharmacies"
          items={pharmacyPromotions}
        />

        <div className="dash-card">
          <div className="dash-card-header">
            <h3>Smart Market Usage by app</h3>
            <span className="info-icon">ⓘ</span>
          </div>
          <ul className="promotion-list">
            {appUsage.map((item) => (
              <li key={item.name}>
                <span
                  className="legend-dot"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="legend-name">{item.name}</span>
                <span className="legend-percent">{item.percent}%</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="dash-card">
          <div className="dash-card-header">
            <h3>Health Index</h3>
          </div>
          <div className="health-index">
            <span className="health-number">70%</span>
            <span className="health-change">+3%</span>
          </div>
          <div className="health-chart-placeholder">
            {/* Placeholder area for a future line chart */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
