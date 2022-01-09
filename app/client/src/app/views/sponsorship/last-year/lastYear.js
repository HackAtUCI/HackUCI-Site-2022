import React from "react";
import "./lastYear.scss";

const stats = [
  {
    stat: "750+",
    name: "Attendees"
  },
  {
    stat: "$15k+",
    name: "In Prizes"
  },
  {
    stat: "89",
    name: "Projects Submitted"
  },
  {
    stat: "TBD",
    name: "First-time Hackers"
  },
  {
    stat: "100+",
    name: "Colleges"
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
        <a
          className="btn btn-hack m-1"
          href="https://hackuci2020.devpost.com/project-gallery"
          target="_blank"
          rel="noopener noreferrer"
        >
          HackUCI 2021 Winners
        </a>
        {/*<a*/}
        {/*  className="btn btn-hack m-1"*/}
        {/*  href="https://youtu.be/eY3s4JVcqt0"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  HackUCI 2020 Recap*/}
        {/*</a>*/}
      </div>
      <div className="last-year__stats-grid">
        {stats.map(statistic => (
          <Stat
            key={statistic.name}
            stat={statistic.stat}
            name={statistic.name}
          />
        ))}
      </div>
    </div>
  );
}

export default LastYear;
