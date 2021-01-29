import React from "react";
import ScheduleEventCard from "./scheduleEventCard";

const DAYS = ["Friday", "Saturday", "Sunday"];

function ScheduleList({ now, scheduleEvents }) {
  return (
    <div className="schedule-list">
      {DAYS.map(day => (
        <section id={day.toLowerCase()} key={day}>
          <h3 className="schedule-heading">~ {day} ~</h3>
          {scheduleEvents[day.toLowerCase()].map(event => (
            <ScheduleEventCard key={event.title} now={now} {...event} />
          ))}
        </section>
      ))}
    </div>
  );
}

export default ScheduleList;
