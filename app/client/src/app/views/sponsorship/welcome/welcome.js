import React from "react";

import "./welcome.scss";

function Welcome() {
  return (
    <div className="mainpage">
      <h1 className="mainpage__title">Sponsor Us</h1>
      <div className="sponsor-text-region">
        <p className="mainpage__subtext">
          As the largest and longest-running hackathon in Orange County, HackUCI
          2021 will emphasize the core values of a hackathon by connecting
          hackers from all over the nation. We’re also touching back with our
          roots and cultivating our close-knit community and the tech scene of
          Irvine, CA, by going hybrid. Therefore, we are expecting to bring 850+
          attendees together, unified by 36 hours of hacking!
        </p>
        <p className="mainpage__subtext">
          Every year, HackUCI is made possible by the great help of our
          sponsors, which is why we need your help to make our event better than
          ever. Our partners will have opportunities to host workshops, host
          keynotes at our opening and closing ceremony, award prizes, and much
          more.
        </p>
        <p className="mainpage__subtext" style={{ textAlign: "center" }}>
          <b>Interested in sponsoring? Contact us at </b> <br />
          <a
            className="mainpage__subtext--link"
            href="mailto:hack@uci.edu"
            rel="noopener noreferrer"
            style={{ fontSize: "2.25rem" }}
          >
            hack@uci.edu
          </a>
        </p>
      </div>
    </div>
  );
}

export default Welcome;
