import React from "react";

import facebook from "assets/images/sponsors/facebook.png";
import google from "assets/images/sponsors/google.png";
import kareo from "assets/images/sponsors/kareo.png";
import wolfram from "assets/images/sponsors/wolfram.png";
import twilio from "assets/images/sponsors/twilio-logo-red.png";
import ucibren from "assets/images/sponsors/ucibren.png";
import microsoft from "assets/images/sponsors/microsoft.png";
import bentley from "assets/images/sponsors/bentley.png";
import fiftenseventeen from "assets/images/sponsors/1517.png";

import "./pastSponsors.scss";

function PastSponsors() {
  return (
    <div id="past-sponsors-container">
      <h2 className="title">Past Sponsors</h2>
      <div className="past-sponsors-container__images">
        <a href="https://www.twilio.com/" target="_blank">
          <img src={ucibren} alt="UCI Donald Bren" />
        </a>
        <a href="https://www.twilio.com/" target="_blank">
          <img src={twilio} alt="Twilio" />
        </a>
        <a href="https://www.microsoft.com/" target="_blank">
          <img src={microsoft} alt="Microsoft" />
        </a>
        <a href="https://www.kareo.com/" target="_blank">
          <img src={bentley} alt="Bentley" />
        </a>
        <a href="https://www.wolframalpha.com/" target="_blank">
          <img src={fiftenseventeen} alt="1517" />
        </a>
      </div>
    </div>
  );
}

export default PastSponsors;
