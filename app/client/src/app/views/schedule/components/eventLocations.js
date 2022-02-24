import React from "react";

const EventLocations = (props) => {
  return props.locations.map((location, index) => (
    <a className="event-location" href={location.url}>
      <b>
        {location.name}
        {index != props.locations.length - 1 ? ", " : ""}
      </b>
    </a>
  ));
};

export default EventLocations;
