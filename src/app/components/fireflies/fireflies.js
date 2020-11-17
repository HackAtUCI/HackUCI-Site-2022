import React from "react";
import "./fireflies.scss";

function Fireflies({ fireflyCount }) {
  return (
    <div className="fireflies">
      {[...Array(fireflyCount)].map(function() {
        return <div className="firefly"></div>;
      })}
    </div>
  );
}

export default Fireflies;
