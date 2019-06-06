import React from "react";

import { Welcome } from "./welcome";
import { MoreInfo } from "./more-info";
import { PastSponsors } from "./past-sponsors";
import { Recap } from "./recap";

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
