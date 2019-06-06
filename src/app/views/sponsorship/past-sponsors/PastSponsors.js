import React from "react";

import "./past-sponsors.scss";

import cylance from "assets/images/sponsors/cylance.png";
import sendgrid from "assets/images/sponsors/sendgrid.png";
import knobbemartens from "assets/images/sponsors/knobbemartens.png";
import restoration from "assets/images/sponsors/restoration.png";
import github from "assets/images/sponsors/github.png";
import pariveda from "assets/images/sponsors/pariveda.png";
import templarbit from "assets/images/sponsors/templarbit.png";
import digitalocean from "assets/images/sponsors/digitalocean.png";
import facebook from "assets/images/sponsors/facebook.png";
import google from "assets/images/sponsors/google.png";
import kareo from "assets/images/sponsors/kareo.png";
import wolfram from "assets/images/sponsors/wolfram.png";

function PastSponsors() {
  return (
    <div id="past-sponsors-container">
      <h2 className="title">Past Sponsors</h2>

      <div>
        <a href="https://www.cylance.com" target="_blank">
          <img src={cylance} alt="Cylance" />
        </a>
        <a href="https://sendgrid.com/" target="_blank">
          <img src={sendgrid} alt="Sendgrid" />
        </a>
        <a href="https://www.knobbe.com/" target="_blank">
          <img src={knobbemartens} alt="Knobbe Martens" />
        </a>
        <a href="http://restorationmedia.com/" target="_blank">
          <img src={restoration} alt="Restoration Media" />
        </a>
        <a href="https://www.github.com" target="_blank">
          <img src={github} alt="Github" />
        </a>
        <a href="https://www.parivedasolutions.com/" target="_blank">
          <img src={pariveda} alt="Pariveda Solutions" />
        </a>
        <a href="https://www.templarbit.com/" target="_blank">
          <img src={templarbit} alt="Templarbit" />
        </a>
        <a href="https://www.digitalocean.com/" target="_blank">
          <img src={digitalocean} alt="Digital Ocean" />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://www.google.com" target="_blank">
          <img src={google} alt="Google" />
        </a>
        <a href="https://www.kareo.com/" target="_blank">
          <img src={kareo} alt="Kareo" />
        </a>
        <a href="https://www.wolframalpha.com/" target="_blank">
          <img src={wolfram} alt="Wolfram Alpha" />
        </a>
      </div>
    </div>
  );
}

export default PastSponsors;
