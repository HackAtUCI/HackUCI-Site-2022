import React from "react";

import Fade from "react-reveal/Fade";

import CurrentSponsors from "./CurrentSponsors";
import CurrentPartners from "./CurrentPartners";

function SponsorInfo() {
  return (
    <section className="home-sponsors-and-partners">
      <Fade duration={1000}>
        <CurrentSponsors />
      </Fade>
      <Fade duration={1000}>
        <CurrentPartners />
      </Fade>
    </section>
  );
}

export default SponsorInfo;
