import React from "react";

import Welcome from "./welcome/welcome.js";
import MoreInfo from "./more-info/moreInfo.js";
import PastSponsors from "./past-sponsors/pastSponsors.js";
import Recap from "./recap/recap.js";
import Benefits from "./benefits/benefits.js";

import "./sponsorship.scss";

function Sponsorship(props) {
  return (
    <React.Fragment>
      <div className="main-page">
        <Welcome />
        <Benefits />
        <MoreInfo />
        <PastSponsors />
      </div>
    </React.Fragment>
  );
}

export default Sponsorship;
