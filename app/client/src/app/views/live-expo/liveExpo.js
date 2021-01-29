import React, { useState, useEffect } from "react";

import "./liveExpo.scss";

import moment from "moment";
import Youtube from "react-youtube";
import { Fireflies } from "app/components";

let OPENING_CEREMONY = "UEncaPrcn_U";
let CLOSING_CEREMONY = "zsah7W_P4lM";

export default function LiveExpo(props) {
  let currentDate = moment();
  let showClosingDate = moment("2010-10-20 4:30", "YYYY-MM-DD HH:mm");

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
