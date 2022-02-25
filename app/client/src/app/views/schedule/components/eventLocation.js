import React from "react";

const EventLocation = (props) => {
  return (
    <a className="event-location" href={props.location.url} style={{pointerEvents: props.location.url ? "auto" : "none"}}>
      <b>{props.location.name}</b>
    </a>
  )
}

export default EventLocation;