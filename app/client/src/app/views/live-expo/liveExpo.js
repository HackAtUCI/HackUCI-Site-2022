import React from "react";
import Youtube from 'react-youtube';

import "./liveExpo.scss";

import { Fireflies } from "app/components/";

export default function LiveExpo(props) {
  // 60% desktop view
  // mobile/ipad 80% 
  return (
    <div className="live-expo">
      <Fireflies fireflyCount={30} />
      <h2>Live Expo</h2>
      <p>The Youtube stream on which {props.eventName ? props.eventName : "<enter event name>"} will be held.</p>
      <Youtube 
        className = "video-stream"
        videoId = "eY3s4JVcqt0"
      />
    </div>
  );
}
