import React from "react";

import Welcome from "./welcome/Welcome.js";
import MoreInfo from "./more-info/MoreInfo.js";
import PastSponsors from "./past-sponsors/PastSponsors.js";
import Recap from "./recap/Recap.js";

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
