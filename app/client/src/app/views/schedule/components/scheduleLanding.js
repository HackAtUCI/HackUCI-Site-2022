import React from "react";

import Countdown from "./countdown";
import UpcomingEvents from "./upcomingEvents";

import chevronDown from "assets/icons/chevron-down.svg";

import "./scheduleLanding.scss";

function ScheduleLanding({ now, scheduleEvents }) {
  return (
    <header className="schedule-landing">
      <div>
        <h1 className="text-center">HackUCI 2021</h1>
        <Countdown />
      </div>

      <UpcomingEvents now={now} scheduleEvents={scheduleEvents} />

      <div className="text-center">
        <div className="h2">Events</div>
        <img
          className="floater-icon"
          src={chevronDown}
          width="48px"
          height="48px"
          alt="down arrow"
          role="presentation"
        />
      </div>
    </header>
  );
}

export default ScheduleLanding;
