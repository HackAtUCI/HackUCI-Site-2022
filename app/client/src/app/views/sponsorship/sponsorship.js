import React from "react";

//import MoreInfo from "./more-info/moreInfo.js";
//import Recap from "./recap/recap.js";
import topWave from "assets/images/site-2022/top white wave.png";

import Welcome from "./welcome/welcome.js";
import Benefits from "./benefits/benefits.js";
import LastYear from "./last-year/lastYear.js";
import PastSponsors from "./past-sponsors/pastSponsors.js";
import "./sponsorship.scss";

function Sponsorship(props) {
  return (
    <React.Fragment>
      <div className="main-page">
        <Welcome />
        <Benefits />
        <LastYear />
        <img className="top-wave" src={topWave} />
        <PastSponsors />
      </div>
    </React.Fragment>
  );
}

export default Sponsorship;
