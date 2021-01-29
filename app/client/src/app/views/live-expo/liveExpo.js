import React, { useState, useEffect } from "react";

import "./liveExpo.scss";

import Youtube from "react-youtube";
import { Fireflies, SponsorLoginModal } from "app/components";

export default function LiveExpo(props) {
  return (
    <div className="live-expo">
      <Fireflies fireflyCount={30} />
      <h2 className="live-expo-title">Stage</h2>
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
