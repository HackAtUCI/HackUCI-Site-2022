import React from "react";

import topWave from "assets/images/site-2022/top white wave.png";

import "./WaveFooter.scss";

function WaveFooter() {
  return (
    <div className="wave-footer">
      <img className="top-wave" src={topWave} alt="" />
      <div className="wave-footer-body" />
    </div>
  );
}

export default WaveFooter;
