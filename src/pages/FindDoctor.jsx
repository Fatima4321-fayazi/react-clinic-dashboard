import { useState } from "react";
import "./FindDoctor.css";

// Placeholder doctor data — swap this for real data later.
const doctors = [
  {
    name: "Prof. Dr. Muhammad Shamsir Bin Mohd Aris",
    specialty: "Obstetrics and Gynaecology",
    role: "Visiting Consultant",
    address: "Lot 193,194 Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan Malaysia",
    website: "https://klinikpakar.usim.edu.my",
    phone: "+60126504921",
    languages: "English, Malay",
    nextAvailable: "Tuesday, March 22",
  },
  {
    name: "Prof Dr Madya Dr. Khairullah",
    specialty: "Obstetrics and Gynaecology",
    role: "Visiting Consultant",
    address: "Lot 193,194 Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan Malaysia",
    website: "https://klinikpakar.usim.edu.my",
    phone: "+60126504921",
    languages: "English, Malay",
    nextAvailable: "Tuesday, March 22",
  },
];

function FindDoctor() {
  const [sortBy, setSortBy] = useState("Next Available"); // "Next Available" or "Distance"

  return (
    <div>
      <div className="finder-banner">
        <h2>Find a Doctor</h2>
        <p>Search Doctors and schedule an appointment</p>

        <div className="finder-search-row">
          <input type="text" placeholder="Search a doctor by name, specialty" />
          <input type="text" placeholder="Zip Code or Neighborhood" />
          <button className="banner-button">CURRENT</button>
          <button className="banner-button">SEARCH</button>
        </div>
      </div>

      <div className="finder-layout">
        <aside className="finder-filters">
          <input className="filter-input" type="text" placeholder="Primary Care" />
          <input className="filter-input" type="text" placeholder="Zip code or Neighborhood" />

          <h4>Filter By</h4>

          <select className="filter-select">
            <option>Specialty</option>
          </select>
          <select className="filter-select">
            <option>Gender</option>
          </select>
          <select className="filter-select">
            <option>Condition</option>
          </select>
          <select className="filter-select">
            <option>Languages</option>
          </select>

          <h4>Providers Who Treat</h4>
          <ul className="checkbox-list">
            <li>All Ages</li>
            <li>Children</li>
            <li>Adults</li>
          </ul>

          <h4>View Only</h4>
          <ul className="checkbox-list">
            <li>Online Scheduling</li>
            <li>Primary Care</li>
          </ul>
        </aside>

        <section className="finder-results">
          <div className="sort-row">
            <span className="sort-label">Sort By</span>
            {["Next Available", "Distance"].map((option) => (
              <button
                key={option}
                className={"sort-button" + (sortBy === option ? " active" : "")}
                onClick={() => setSortBy(option)}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>

          {doctors.map((doctor) => (
            <div className="doctor-card" key={doctor.name}>
              <div className="doctor-photo">👨‍⚕️</div>

              <div className="doctor-info">
                <h4>{doctor.name}</h4>
                <p className="doctor-specialty">{doctor.specialty}</p>
                <p>{doctor.role}</p>
                <p>{doctor.address}</p>
                <p className="clinic-link">{doctor.website}</p>
                <p>{doctor.phone}</p>
                <p>{doctor.languages}</p>

                <button className="next-available-button">
                  NEXT AVAILABLE: {doctor.nextAvailable}
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default FindDoctor;
