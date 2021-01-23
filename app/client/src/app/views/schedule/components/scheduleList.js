import React from "react";
import ScheduleEventCard from "./scheduleEventCard";

const DAYS = ["Friday", "Saturday", "Sunday"];

function ScheduleList({ scheduleEvents }) {
  return (
    <div className="schedule-list">
      {DAYS.map(day => (
        <div id={day.toLowerCase()} key={day}>
          <h3 className="schedule-heading">~ {day} ~</h3>
          {scheduleEvents[day.toLowerCase()].map(event => (
            <ScheduleEventCard key={event.name} {...event} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default ScheduleList;
