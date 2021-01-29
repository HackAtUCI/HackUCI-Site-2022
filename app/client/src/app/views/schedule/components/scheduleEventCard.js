import React from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import moment from "moment";

import { classNames } from "utils/helpers";

import "./scheduleEventCard.scss";

// finds abbreviation for user time zone based on locale
const timezone = new Date()
  .toLocaleTimeString(undefined, { timeZoneName: "short" })
  .split(" ")[2];

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

  return (
    <Card
      className={cardClassNames}
      id={inProgress && !condensed ? "current" : null}
      aria-label={inProgress ? "currently happening" : null}
    >
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
            {startTime.format("dddd hh:mm")}
            {" - "}
            {endTime.format(`hh:mm [${timezone}]`)}
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
      </Card.Subtitle>
      <footer className="text-right">{startTime.from(now)}</footer>
    </Card.Body>
  </Card>
);

export default ScheduleEventCard;
