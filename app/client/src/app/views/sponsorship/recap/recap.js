import React from "react";

import "./recap.scss";

function Recap() {
  return (
    <div>
      <div id="recap-winners-container">
        <div id="recap-container">
          <h2>Recap</h2>
          <div>[insert recap text here]</div>
        </div>
        <br />
        <div id="winners-container">
          <h2>Winners</h2>
          <div>[insert winners here]</div>
        </div>
      </div>
      <div id="questions-container">
        Questions? Please contact us at{" "}
        <a href="mailto:hackuci@gmail.com">hackuci@gmail.com</a>
      </div>
    </div>
  );
}

export default Recap;
