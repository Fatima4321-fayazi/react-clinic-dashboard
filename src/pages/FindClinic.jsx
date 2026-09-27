import { useState } from "react";
import "./FindClinic.css";

// Placeholder clinic data — swap this for real data later.
const clinics = [
  {
    name: "Klinik Pakar Kesihatan USIM",
    address:
      "Lot 193,194 Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan Malaysia",
    website: "klinikpakar.usim.edu.my",
    phone: "+60126504921",
    plusCode: "RQ6F+ P7 NILAI, Negeri Sembilan, Malaysia",
    tag: "Primary Care",
  },
  {
    name: "Nilai Family Dental Centre",
    address: "12 Jalan Bandar Baru Nilai 2, 71800 Nilai, Negeri Sembilan Malaysia",
    website: "nilaidental.example.com",
    phone: "+60126504922",
    plusCode: "RQ6F+ Q8 NILAI, Negeri Sembilan, Malaysia",
    tag: "Dental Care",
  },
];

function FindClinic() {
  // Track which distance/availability filter chip is selected.
  // UI-only for now — doesn't actually filter the list yet.
  const [distance, setDistance] = useState("Any");
  const [availability, setAvailability] = useState("Any");
  const [view, setView] = useState("list"); // "map" or "list"

  return (
    <div>
      <div className="finder-banner">
        <h2>Find a Clinic</h2>
        <p>Search Clinics and schedule an appointment with doctors through Clinic</p>

        <div className="finder-search-row">
          <input type="text" placeholder="Search" />
          <input type="text" placeholder="Zip Code or Neighborhood" />
          <button className="banner-button">CURRENT</button>
          <button className="banner-button">SEARCH</button>
        </div>
      </div>

      <div className="view-toggle-row">
        <button
          className={"view-toggle" + (view === "map" ? " active" : "")}
          onClick={() => setView("map")}
        >
          🗺️ Map
        </button>
        <button
          className={"view-toggle" + (view === "list" ? " active" : "")}
          onClick={() => setView("list")}
        >
          ☰ List
        </button>
      </div>

      <div className="finder-layout">
        <aside className="finder-filters">
          <input className="filter-input" type="text" placeholder="Primary Care" />
          <input
            className="filter-input"
            type="text"
            placeholder="Zip code or Neighborhood"
          />

          <h4>Filter By</h4>

          <div className="filter-group">
            <span className="filter-label">Distance</span>
            <div className="chip-row">
              {["Any", "5 km", "10 km", "25 km"].map((option) => (
                <button
                  key={option}
                  className={"chip" + (distance === option ? " active" : "")}
                  onClick={() => setDistance(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <span className="filter-label">Availability</span>
            <div className="chip-row">
              {["Any", "Open today", "Online booking"].map((option) => (
                <button
                  key={option}
                  className={"chip" + (availability === option ? " active" : "")}
                  onClick={() => setAvailability(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <section className="finder-results">
          <p className="results-count">{clinics.length} clinics found</p>

          {clinics.map((clinic) => (
            <div className="clinic-card" key={clinic.name}>
              <div className="clinic-icon">🏥</div>

              <div className="clinic-info">
                <h4>{clinic.name}</h4>
                <p>{clinic.address}</p>
                <p className="clinic-link">{clinic.website}</p>
                <p>{clinic.phone}</p>
                <p className="clinic-pluscode">{clinic.plusCode}</p>
                <span className="clinic-tag">{clinic.tag}</span>
              </div>

              <div className="clinic-actions">
                <button className="primary-action">MORE ABOUT THIS LOCATION</button>
                <button className="primary-action">FIND A DOCTOR AND SCHEDULE</button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default FindClinic;
