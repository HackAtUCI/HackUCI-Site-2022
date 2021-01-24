import React from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import moment from "moment";

import "./scheduleEventCard.scss";
import { classNames } from "utils/helpers";

const now = moment();

function ScheduleEventCard({
  title,
  time,
  category,
  host,
  location,
  description
}) {
  const startTime = moment(time.start);
  const endTime = moment(time.end);

  const hasStarted = now > startTime;
  const hasEnded = now > endTime;
  const inProgress = hasStarted && !hasEnded;
  const cardClassNames = classNames({
    "event-card": true,
    "event-card-past": hasEnded
  });

  return (
    <Card
      className={cardClassNames + ` event-card-${category}`}
      id={inProgress ? "current" : ""}
    >
      <Card.Body>
        <Card.Title
          as="h4"
          className="event-title d-flex justify-content-between"
        >
          {title}
          <Badge className="event-badge" variant={category}>
            {category}
          </Badge>
        </Card.Title>
        <Card.Subtitle as="h5" className="mb-3">
          {host}
        </Card.Subtitle>
        <Card.Subtitle>
          <span className="event-time">
            {startTime.format("dddd HH:mm")}
            {" - "}
            {endTime.format("HH:mm")}
          </span>
          {" || "}
          <a className="event-location" href={location.url}>
            {location.name}
          </a>
        </Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <footer className="text-right event-moment">
          {hasEnded
            ? "ended " + endTime.from(now)
            : hasStarted
            ? "started " + startTime.from(now)
            : "starts " + startTime.from(now)}
        </footer>
      </Card.Body>
    </Card>
  );
}

export default ScheduleEventCard;
