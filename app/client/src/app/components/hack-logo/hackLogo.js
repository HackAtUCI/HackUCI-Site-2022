import React from "react";
import "./hackLogo.scss";

import anteater from "assets/images/site/hackuci-anteater.svg";
import gear from "assets/images/site/hackuci-gear.svg";

function HackLogo({ style }) {
  return (
    <div className="hack-logo" style={style}>
      <img src={anteater} alt="HackUCI logo anteater" />
      <img className="spinning" src={gear} alt="HackUCI logo gear" />
    </div>
  );
}

export default HackLogo;
