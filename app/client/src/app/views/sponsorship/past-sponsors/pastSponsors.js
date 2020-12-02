import React from "react";

import twilio from "assets/images/sponsors/twilio-logo-red.png";
import ucibren from "assets/images/sponsors/ucibren.png";
import microsoft from "assets/images/sponsors/microsoft.png";
import bentley from "assets/images/sponsors/bentley.png";
import fiftenseventeen from "assets/images/sponsors/1517.png";

import "./pastSponsors.scss";

const sponsors = [
  {
    name: "UCI Donald Bren",
    src: ucibren,
    url: "https://www.ics.uci.edu/"
  },
  {
    name: "Twilio",
    src: twilio,
    url: "https://www.twilio.com/"
  },
  {
    name: "Microsoft",
    src: microsoft,
    url: "https://www.microsoft.com/"
  },
  {
    name: "Bentley",
    src: bentley,
    url: "https://www.bentley.com/en"
  },
  {
    name: "1517",
    src: fiftenseventeen,
    url: "https://www.1517fund.com/"
  }
];

function PastSponsors() {
  return (
    <div>
      <h2 className="mainpage__subtitle">Past Sponsors</h2>
      <div id="past-sponsors-container">
        <div className="past-sponsors-container__images">
          <div className="past-sponsors-container__images-grid">
            {sponsors.map(sponsor => (
              <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                <img src={sponsor.src} alt={sponsor.name} />
              </a>
            ))}
          </div>
        </div>
        <span className="last-element"> a</span>
      </div>
    </div>
  );
}

export default PastSponsors;
