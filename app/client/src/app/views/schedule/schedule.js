import React from "react";

import scheduleEvents from "assets/data/schedule-data";
import Countdown from "./components/countdown";
import ScheduleNavigation from "./components/scheduleNavigation";
import ScheduleList from "./components/scheduleList";

import "./schedule.scss";

function Schedule() {
  return (
    <div className="schedule">
      <h1>Schedule</h1>
      <Countdown />
      <ScheduleNavigation />
      <ScheduleList scheduleEvents={scheduleEvents} />
    </div>
  );
}

export default Schedule;
