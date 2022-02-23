import React from "react";
import { hackingBegins, devpostSubmission } from "assets/data/schedule-data";
import Countdown from "react-countdown";
import "./scheduleLanding.scss";

function ScheduleLanding() {
  function generateCountdown() {
    if (Date.parse(hackingBegins) - Date.now() > 0) {
      return (
        <div className="schedule-countdown">
          <Countdown date={hackingBegins} />
          <div className="schedule-countdown-text">
            <span> Until Hacking Begins</span>
          </div>
        </div>
      );
    } else if (Date.parse(devpostSubmission) - Date.now() > 0) {
      return (
        <div className="schedule-countdown">
          <Countdown date={devpostSubmission} />
          <div className="schedule-countdown-text">
            <span> Until Devpost Submission Close</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="over-remarks">
          <span>
            Thank you so much for attending HackUCI 2021! We appreciate your
            participation at all of our events and hope you enjoyed hanging out
            with fellow hackers.
          </span>
        </div>
      );
    }
  }

  return <section id="schedule-block"> {generateCountdown()} </section>;
}

export default ScheduleLanding;
