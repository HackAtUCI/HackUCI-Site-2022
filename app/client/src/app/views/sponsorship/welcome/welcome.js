import React from "react";

import "./welcome.scss";

function Welcome() {
  return (
    <div className="mainpage">
      <h1 className="mainpage__title">Sponsor Us</h1>
      <p className="mainpage__subtext">
        Every year HackUCI is only able to succeed through the great help of our
        sponsors. More nice stuff to say about it. etc. etc. We LOVE you. We
        NEED you. You make our lives great. Pwetty pwease sponsor us? {"\n"}
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
