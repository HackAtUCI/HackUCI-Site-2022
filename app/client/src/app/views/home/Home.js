import React from "react";

import topWave from "assets/images/site-2022/top white wave.png";

import HomeBanner from "./home-banner/HomeBanner";
import HomeDescription from "./home-description/HomeDescription";
import Volunteer from "./volunteer/Volunteer";
import Faq from "./faq/Faq";
import SponsorsInfo from "./sponsor-info/SponsorInfo";

import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <HomeBanner />
      <div className="sky-bridge">
        <HomeDescription />
      </div>
      <Volunteer />
      <Faq />
      <img className="top-wave" src={topWave} />
      <SponsorsInfo />
    </div>
  );
}

export default Home;
