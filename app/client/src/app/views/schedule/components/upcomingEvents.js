import React from "react";
import moment from "moment";

import ScheduleEventCard from "./scheduleEventCard";

import { hackingStart, hackingEnd } from "assets/data/schedule-data";

const DAYS = ["friday", "saturday", "sunday"];
const T_PAD = moment.duration(2, "hours");

function UpcomingEvents({ now, scheduleEvents }) {
  const hackingStartThresh = moment(hackingStart).subtract(T_PAD);
  if (!now.isBetween(hackingStartThresh, hackingEnd)) {
    return null;
  }

  let currentEvent, nextEvent;

  for (const day of DAYS) {
    for (const event of scheduleEvents[day]) {
      if (currentEvent && nextEvent) {
        break;
      }

      const startTime = moment(event.time.start);
      const endTime = moment(event.time.end);
      if (now.isBetween(startTime, endTime)) {
        currentEvent = event;
      }
      let startThresh = moment(startTime).subtract(T_PAD);
      if (now.isBetween(startThresh, startTime)) {
        if (!currentEvent) {
          currentEvent = event;
        } else {
          nextEvent = event;
        }
      }
    }
  }

  return (
    <div className="upcoming-events">
      <h2>Upcoming Events</h2>
      {!currentEvent && !nextEvent ? <h3>no events for a while</h3> : null}
      <div className="schedule-list">
        {currentEvent && (
          <ScheduleEventCard condensed={true} now={now} {...currentEvent} />
        )}
        {nextEvent && (
          <ScheduleEventCard condensed={true} now={now} {...nextEvent} />
        )}
      </div>
    </div>
  );
}

export default UpcomingEvents;
