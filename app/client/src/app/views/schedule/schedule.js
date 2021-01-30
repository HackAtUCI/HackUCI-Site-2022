import React, { useState, useEffect } from "react";
import moment from "moment";

import { Fireflies } from "app/components";
import { scheduleEvents } from "assets/data/schedule-data";

import ScheduleLanding from "./components/scheduleLanding";
import ScheduleNavigation from "./components/scheduleNavigation";
import ScheduleList from "./components/scheduleList";

import "./schedule.scss";

const intervals = [];
const T_REFRESH = 15000;

function Schedule() {
  const [now, setNow] = useState(moment());

  useEffect(() => {
    const refreshEvents = () => {
      setNow(moment());
    };

    intervals.push(setInterval(refreshEvents, T_REFRESH));
    return () => {
      // remove interval on cleanup
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

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
