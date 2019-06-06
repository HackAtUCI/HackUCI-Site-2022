import React from "react";

import "./welcome.scss";
import Button from "react-bootstrap/Button";

function Welcome() {
  //Constants for the stats right below the welcome text
  const hackathonStats = {
    participants: "450",
    "female attendees": "30%",
    schools: "10",
    hours: "36",
    "projects completed": "73",
    "prize categories": "9"
  };

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
        {Object.entries(hackathonStats).map(([key, value]) => (
          <div className="stat-pair">
            <div className="stat">{value}</div>
            <div className="category">{key}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Welcome;
