import React, { useState, useEffect } from "react";

import "./liveExpo.scss";

import moment from "moment";
import Youtube from "react-youtube";
import { Fireflies } from "app/components";
import { CloudBackground } from "app/components";

let OPENING_CEREMONY = "24AWcM_6nx8";
let CLOSING_CEREMONY = "4O28rglVLo0";

export default function LiveExpo(props) {
  let currentDate = moment();
  let showClosingDate = moment("2022-01-29 00:00", "YYYY-MM-DD HH:mm");

  function getVideoId() {
    return currentDate.isBefore(showClosingDate)
      ? OPENING_CEREMONY
      : CLOSING_CEREMONY;
  }

  return (
    <div>
      <div className="live-expo">
        <CloudBackground />
        <div className="below-fold">
          <h2 className="live-expo-title">Stage</h2>
          <p className="live-expo-descrip">
            The Youtube stream on which the Closing Ceremony will be held.
          </p>
          <Youtube
            className="video-stream"
            videoId={getVideoId()}
            opts={{ playerVars: { autoplay: 1 } }}
          />
        </div>
      </div>
    </div>
  );
}
