import React from "react";
import "./lastYear.scss";
const stats = [
  {
    stat: "500+",
    name: "Attendees"
  },
  {
    stat: "$10,000+",
    name: "In Prizes"
  },
  {
    stat: "92%",
    name: "Submitted a Project"
  },
  {
    stat: "91",
    name: "Projects Submitted"
  },
  {
    stat: "35%",
    name: "Female Attendance"
  },
  {
    stat: "46%",
    name: "First-time Hackers"
  },
  {
    stat: "17",
    name: "Majors"
  },
  {
    stat: "15",
    name: "Colleges"
  },
  {
    stat: "3000+",
    name: "Meals Served"
  },
  {
    stat: "3000+",
    name: "Meals Served"
  },
  {
    stat: "3000+",
    name: "Meals Served"
  },
  {
    stat: "3000+",
    name: "Meals Served"
  }
];

function Stat(props) {
  return (
    <div className="last-year__stat">
      <h4 className="last-year_stat--value">{props.stat}</h4>
      <h5 className="last-year_stat--name"> {props.name}</h5>
    </div>
  );
}
function LastYear() {
  return (
    <div className="last-year">
      <h2 className="mainpage__subtitle">Last Year's Successes</h2>
      <div className="last-year__links">
        <h5 className="last-year__link">HackUCI 2020 Winners</h5>
        <h5 className="last-year__link">HackUCI 2020 Recap</h5>
      </div>
      <div className="last-year__stats-grid">
        {stats.map(statistic => (
          <Stat stat={statistic.stat} name={statistic.name} />
        ))}
      </div>
    </div>
  );
}

export default LastYear;
