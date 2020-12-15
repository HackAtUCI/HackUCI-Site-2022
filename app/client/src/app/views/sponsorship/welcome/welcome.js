import React from "react";

import "./welcome.scss";

function Welcome() {
  return (
    <div className="mainpage">
      <h1 className="mainpage__title">Sponsor Us</h1>
      <p className="mainpage__subtext">
        As the largest and longest-running hackathon in Orange County, HackUCI
        2021 hopes to emphasize the core values of a hackathon by connecting
        hackers from all over, creating a close-knit community, and inspiring
        ideas to help change the world. Although we will be virtual, we plan on
        taking advantage of this environment and will not be limited by the
        capacity limits of our usual event center; therefore, we are expecting
        to have over 1000 students in attendance!
      </p>
      <p className="mainpage__subtext">
        Every year, HackUCI is able to succeed through the great help of our
        sponsors which is why we need your help to help make our largest ever
        event even better for our attendees! Sponsors for HackUCI 2021 will have
        the opportunities to host workshops, speaking at our opening ceremony,
        sponsoring prize categories, and much more!{" "}
      </p>
      <p className="mainpage__subtext">
        Interested in sponsoring? Contact us at{" "}
        <a
          className="mainpage__subtext--link"
          href="mailto:hack@uci.edu"
          rel="noopener noreferrer"
        >
          hack@uci.edu
        </a>
        .
      </p>
    </div>
  );
}

export default Welcome;
