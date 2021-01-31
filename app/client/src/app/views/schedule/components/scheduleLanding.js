import React from "react";

import { closingCeremonyEnd } from "assets/data/schedule-data";

import Countdown from "./countdown";
import UpcomingEvents from "./upcomingEvents";

import chevronDown from "assets/icons/chevron-down.svg";

import "./scheduleLanding.scss";

function ScheduleLanding({ now, scheduleEvents }) {
  const hackathonOver = now.isAfter(closingCeremonyEnd);

  return (
    <header className="schedule-landing">
      <div>
        <h1 className="text-center">HackUCI 2021</h1>
        {!hackathonOver ? (
          <Countdown />
        ) : (
          <div className="h3 over-remarks">
            {/* Thank you so much for attending HackUCI 2021! We appreciate your
            participation at all of our events and hope you enjoyed hanging out
            with fellow hackers. */}
          </div>
        )}
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
