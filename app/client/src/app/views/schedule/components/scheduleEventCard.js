import React from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import moment from "moment";

import { classNames } from "utils/helpers";

import "./scheduleEventCard.scss";

const extractTimeZone = timeString =>
  timeString.split(" ").filter(s => /^[[A-Z].+$/.test(s))[0];

// finds abbreviation for user time zone based on locale
// expresses time as 24 hour string with time zone and extracts last word
// this is not a foolproof parser for every locale
const timeString = new Date().toLocaleTimeString(undefined, {
  hour12: false,
  timeZoneName: "short"
});
const timezone = extractTimeZone(timeString) || "local time";

function ScheduleEventCard({
  now,
  title,
  time,
  category,
  host,
  location,
  description,
  condensed
}) {
  const startTime = moment(time.start);
  const endTime = moment(time.end);

  if (category === "hacking") {
    return <HackingCard now={now} title={title} startTime={startTime} />;
  }

  const hasStarted = now.isAfter(startTime);
  const hasEnded = now.isAfter(endTime);
  const inProgress = hasStarted && !hasEnded;
  const cardClassNames =
    classNames({
      "event-card": true,
      "event-card-past": hasEnded,
      "event-card-current": inProgress
    }) + ` event-card-${category}`;

  const eventMoment = hasEnded
    ? "ended " + endTime.from(now)
    : hasStarted
    ? "started " + startTime.from(now)
    : "starts " + startTime.from(now);

  if (category === "spacer") {
    return (
      <SpacerCard
        current={inProgress}
        title={title}
        hasEnded={hasEnded}
        startTime={startTime}
        endTime={endTime}
      />
    );
  }

  return (
    <Card
      className={cardClassNames}
      id={inProgress && !condensed ? "current" : null}
    >
      <span className="sr-only">
        {inProgress ? "currently happening" : null}
      </span>
      <Card.Body>
        <Card.Title as="h4" className="event-title">
          {title}
          <Badge className="event-badge" variant={category}>
            {category}
          </Badge>
        </Card.Title>
        <Card.Subtitle as="h5">{host}</Card.Subtitle>
        <Card.Subtitle>
          <span className="event-time">
            {startTime.format("dddd HH:mm")}
            {/* {startTime.format("dddd hh:mm A")} */}
            {" - "}
            {endTime.format(`HH:mm [${timezone}]`)}
            {/* {endTime.format(`hh:mm A [${timezone}]`)} */}
          </span>
          {" || "}
          <a className="event-location" href={location.url}>
            {location.name}
          </a>
        </Card.Subtitle>
        {!condensed && <Card.Text>{description}</Card.Text>}
        <footer className="text-right event-moment">{eventMoment}</footer>
      </Card.Body>
    </Card>
  );
}

const HackingCard = ({ now, title, startTime }) => (
  <Card className="event-card event-card-hacking">
    <Card.Body className="text-center">
      <Card.Title as="h4" className="event-title flex-column">
        {title}
      </Card.Title>
      <Card.Subtitle>
        {startTime.format(`dddd HH:mm [${timezone}]`)}
        {/* {startTime.format(`dddd hh:mm A [${timezone}]`)} */}
      </Card.Subtitle>
      <footer className="text-right">{startTime.from(now)}</footer>
    </Card.Body>
  </Card>
);

const SpacerCard = ({ current, hasEnded, title, startTime, endTime }) => {
  const cardClassNames = classNames({
    "event-card": true,
    "event-card-spacer": true,
    "event-card-past": hasEnded,
    "event-card-current": current,
    "event-card-final": title === "final stretch"
  });

  const humanize = duration => {
    if (duration.asHours() < 1) {
      return duration.asMinutes() + " minutes";
    } else if (duration.minutes() === 0) {
      return duration.asHours() + " hours";
    }
    return duration.hours() + " hrs " + duration.minutes() + " min";
  };

  const duration = moment.duration(endTime.diff(startTime));
  const full = duration.asHours() > 0.5;
  const cardHeight = 80 * duration.asHours();
  const footerText = `${!full ? title + " - " : ""}${humanize(duration)}`;

  return (
    <Card
      className={cardClassNames}
      id={current ? "current" : null}
      aria-label={current ? "currently happening" : null}
      style={{ minHeight: `${cardHeight}px` }}
    >
      <Card.Body className="text-right">
        {full ? (
          <Card.Title as="h4" className="event-title flex-column">
            {title}
          </Card.Title>
        ) : null}
        <footer>{footerText}</footer>
      </Card.Body>
    </Card>
  );
};

export default ScheduleEventCard;
