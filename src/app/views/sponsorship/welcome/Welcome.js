import React from "react";

import "./welcome.scss";
import Button from "react-bootstrap/Button";

function Welcome() {
  //Constants for the stats right below the welcome text
  const hackathonStats = [
    {
      text: "participants",
      stat: "450"
    },
    {
      text: "female attendees",
      stat: "30%"
    },
    {
      text: "schools",
      stat: "10"
    },
    {
      text: "hours",
      stat: "36"
    },
    {
      text: "projects completed",
      stat: "73"
    },
    {
      text: "prize categories",
      stat: "9"
    }
  ];

  return (
    <div>
      <div id="welcome-container">
        <div className="title-container center">
          <h1 className="welcome">Welcome</h1>
          <h1 className="potential-sponsors">Potential Sponsors</h1>
          <Button href="mailto:hackuci@gmail.com" className="sponsor-button">
            INTERESTED IN SPONSORING?
          </Button>
        </div>
      </div>
      <div id="stats-container">
        {hackathonStats.map((item, index) => (
          <div className="stat-pair" key={index}>
            <div className="stat">{item.stat}</div>
            <div className="category">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Welcome;
