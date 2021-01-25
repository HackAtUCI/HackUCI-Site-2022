import React from "react";

import Countdown from "./countdown";
import UpcomingEvents from "./upcomingEvents";

import "./scheduleLanding.scss";

function ScheduleLanding({ now, scheduleEvents }) {
  return (
    <section className="schedule-landing">
      <div>
        <h1 className="text-center">HackUCI 2021</h1>
        <Countdown />
      </div>

      <UpcomingEvents now={now} scheduleEvents={scheduleEvents} />
    </section>
  );
}

export default ScheduleLanding;
