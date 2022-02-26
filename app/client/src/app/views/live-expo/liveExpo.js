import React, { useState, useEffect } from "react";

import "./liveExpo.scss";

import moment from "moment";
import Youtube from "react-youtube";
import { Fireflies } from "app/components";
import { CloudBackground } from "app/components";

let OPENING_CEREMONY = "BjMug75ck0o";
let CLOSING_CEREMONY = "4O28rglVLo0";

export default function LiveExpo(props) {
  let currentDate = moment();
  let showClosingDate = moment("2022-02-27 00:00", "YYYY-MM-DD HH:mm");

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
            The Youtube stream on which the
            {currentDate.isBefore(showClosingDate) ? " Opening " : " Closing "}
            Ceremony will be held.
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
