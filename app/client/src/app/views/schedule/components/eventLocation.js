import React from "react";

const EventLocation = (props) => {
  return (
  <a className="event-location" href={props.location.url}>
    <b>{props.location.name}</b>
  </a>
  )
}

export default EventLocation;