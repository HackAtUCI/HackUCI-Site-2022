import React from "react";
import "./fireflies.scss";

function Fireflies({ fireflyCount }) {
  return (
    <div className="fireflies">
      {[...Array(fireflyCount)].map(function(z, index) {
        return <div className="firefly" key={index}></div>;
      })}
    </div>
  );
}

export default Fireflies;
