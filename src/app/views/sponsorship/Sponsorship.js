import React from "react";

import Welcome from "./welcome/welcome.js";
import MoreInfo from "./more-info/moreInfo.js";
import PastSponsors from "./past-sponsors/pastSponsors.js";
import Recap from "./recap/recap.js";

import "./Sponsorship.scss";

function Sponsorship(props) {
  return (
    <React.Fragment>
      <Welcome />
      <MoreInfo />
      <PastSponsors />
      <Recap />
    </React.Fragment>
  );
}

export default Sponsorship;
