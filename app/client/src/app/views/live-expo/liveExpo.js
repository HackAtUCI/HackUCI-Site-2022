import React from "react";

import "./liveExpo.scss";

import { Fireflies } from "app/components";

export default function LiveExpo(props) {
  return (
    <div className="live-expo">
      <Fireflies fireflyCount={30} />
      <h2>Live Expo Page Coming Soon!</h2>
    </div>
  );
}
