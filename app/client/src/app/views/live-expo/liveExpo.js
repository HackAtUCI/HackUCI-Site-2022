import React from "react";
import Youtube from "react-youtube";

import "./liveExpo.scss";

import { Fireflies } from "app/components/";

export default function LiveExpo(props) {
  return (
    <div className="live-expo">
      <Fireflies fireflyCount={30} />
      <h2>Live Expo Coming Soon!</h2>
    </div>
  );

  return (
    <div className="live-expo">
      <Fireflies fireflyCount={30} />
      <h2 className="live-expo-title">Live Expo</h2>
      <p className="live-expo-descrip">
        The Youtube stream on which the Opening Ceremony will be held.
      </p>
      <Youtube
        className="video-stream"
        videoId="UEncaPrcn_U"
        opts={{ playerVars: { autoplay: 1 } }}
      />
    </div>
  );
}
