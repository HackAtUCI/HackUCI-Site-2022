import React from "react";

import Countdown from "./countdown";

import "./scheduleLanding.scss";

function ScheduleLanding({ scheduleEvents }) {
  return (
    <section className="schedule-landing">
      <div>
        <h1 className="text-center">HackUCI 2021</h1>
        <Countdown />
      </div>

      <h2>Upcoming Events</h2>
    </section>
  );
}

export default ScheduleLanding;
