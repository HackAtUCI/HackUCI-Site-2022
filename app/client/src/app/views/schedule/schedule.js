import React from "react";

import scheduleEvents from "assets/data/schedule-data";

import ScheduleLanding from "./components/scheduleLanding";
import ScheduleNavigation from "./components/scheduleNavigation";
import ScheduleList from "./components/scheduleList";

import "./schedule.scss";

function Schedule() {
  return (
    <div className="schedule">
      <ScheduleLanding scheduleEvents={scheduleEvents} />
      <ScheduleNavigation />
      <ScheduleList scheduleEvents={scheduleEvents} />
    </div>
  );
}

export default Schedule;
