import React from "react";
import moment from "moment";

import ScheduleEventCard from "./scheduleEventCard";

import { hackingStart, hackingEnd } from "assets/data/schedule-data";

const DAYS = ["friday", "saturday", "sunday"];
const T_PAD = moment.duration(2, "hours");
const N_UPCOMING = 2;

const selectEvents = event =>
  event.title !== "hacking begins" && event.category !== "spacer";

function UpcomingEvents({ now, scheduleEvents }) {
  const hackingStartThresh = moment(hackingStart).subtract(T_PAD);
  if (!now.isBetween(hackingStartThresh, hackingEnd)) {
    return null;
  }

  let upcomingEvents = [];

  for (const day of DAYS) {
    for (const event of scheduleEvents[day].filter(selectEvents)) {
      const startTime = moment(event.time.start);
      const endTime = moment(event.time.end);

      if (now.isBetween(startTime, endTime)) {
        upcomingEvents.push(event);
        continue;
      }

      let startThresh = moment(startTime).subtract(T_PAD);
      if (now.isBetween(startThresh, startTime)) {
        upcomingEvents.push(event);
      } else if (upcomingEvents[0]) {
        // event is beyond consideration range
        break;
      }

      if (upcomingEvents.length === N_UPCOMING) {
        break;
      }
    }
  }

  return (
    <div className="upcoming-events">
      <h2>Upcoming Events</h2>
      {upcomingEvents.length === 0 ? <h3>no events for a while</h3> : null}
      <div className="schedule-list">
        {upcomingEvents.map(event => (
          <ScheduleEventCard
            key={event.title}
            condensed={true}
            now={now}
            {...event}
          />
        ))}
      </div>
    </div>
  );
}

export default UpcomingEvents;
