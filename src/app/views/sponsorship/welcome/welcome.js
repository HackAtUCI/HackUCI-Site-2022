import React from "react";

import Button from "react-bootstrap/Button";

import "./welcome.scss";

function Welcome() {
  return (
    <div>
      <div id="welcome-container">
        <div className="title-container center">
          <h1 className="welcome">Sponsor Us</h1>
          <span>
            Every year HackUCI is only able to succeed through the great help of
            our sponsors. More nice stuff to say about it. etc. etc. We LOVE
            you. We NEED you. You make our lives great. Pwetty pwease sponsor
            us? Interested in sponsoring? Contact us at hack@uci.edu.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
