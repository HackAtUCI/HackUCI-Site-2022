import React from "react";

import scheduleEvents from "assets/data/schedule-data";
import Countdown from "./components/countdown";
import ScheduleList from "./components/scheduleList";

import "./schedule.scss";

function Schedule() {
  return (
    <div className="schedule">
      <Countdown />
      <ScheduleList scheduleEvents={scheduleEvents} />
    </div>
  );
}

export default Schedule;
