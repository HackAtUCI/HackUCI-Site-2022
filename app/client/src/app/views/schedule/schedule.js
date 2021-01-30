import React, { useState, useEffect } from "react";
import moment from "moment";

import { Fireflies } from "app/components";
import { scheduleEvents } from "assets/data/schedule-data";
import getScheduleUpdates from "./services/schedule_updater";

import ScheduleLanding from "./components/scheduleLanding";
import ScheduleNavigation from "./components/scheduleNavigation";
import ScheduleList from "./components/scheduleList";

import "./schedule.scss";

const intervals = [];
const T_REFRESH = 15000;

function Schedule() {
  const [liveEvents, setLiveEvents] = useState(scheduleEvents);
  // const [attemptedUpdates, setAttemptedUpdates] = useState(false);
  const [now, setNow] = useState(moment());

  useEffect(() => {
    const refreshEvents = () => {
      setNow(moment());
    };

    // will update liveEvents with all new props for each patch
    const patchEvents = source => {
      let patchIndex = 0;
      const n_patches = source.length;
      // iterate through all schedule events to find matching uid
      for (const dayEvents of Object.values(scheduleEvents)) {
        for (const event of dayEvents) {
          if (patchIndex >= n_patches) {
            break;
          }

          if (event.uid === source[patchIndex].uid) {
            console.log("updating", event, source[patchIndex]);
            Object.entries(source[patchIndex].props).forEach(
              ([name, value]) => {
                event[name] = value;
              }
            );
            ++patchIndex;
          }
        }
      }
    };

    getScheduleUpdates()
      .then(data => {
        patchEvents(data);
        setLiveEvents(Object.assign({}, scheduleEvents));
      })
      .catch(err => {
        console.log("could not update schedule events:", err);
      });

    intervals.push(setInterval(refreshEvents, T_REFRESH));

    return () => {
      // remove interval on cleanup
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  return (
    <div className="schedule">
      <Fireflies fireflyCount={10} />

      <ScheduleLanding now={now} scheduleEvents={liveEvents} />
      <ScheduleNavigation />
      <ScheduleList now={now} scheduleEvents={liveEvents} />
    </div>
  );
}

export default Schedule;
