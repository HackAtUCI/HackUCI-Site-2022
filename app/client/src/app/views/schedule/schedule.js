import React from "react";
import moment from "moment";

import { Fireflies } from "app/components";
import { scheduleEvents } from "assets/data/schedule-data";

import ScheduleLanding from "./components/scheduleLanding";
import ScheduleNavigation from "./components/scheduleNavigation";
import ScheduleList from "./components/scheduleList";

import "./schedule.scss";

const now = moment();

function Schedule() {
  return (
    <div className="schedule">
      <Fireflies fireflyCount={10} />

      <ScheduleLanding now={now} scheduleEvents={scheduleEvents} />
      <ScheduleNavigation />
      <ScheduleList now={now} scheduleEvents={scheduleEvents} />
    </div>
  );
}

export default Schedule;
