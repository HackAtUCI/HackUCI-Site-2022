import React from "react";

import { Sponsors } from "app/containers";
import twilio from "assets/images/sponsors/twilio-logo-red.png";
import ucibren from "assets/images/sponsors/ucibren.png";
import microsoft from "assets/images/sponsors/microsoft.png";
import bentley from "assets/images/sponsors/bentley.png";
import fiftenseventeen from "assets/images/sponsors/1517.svg";
import sendgrid from "assets/images/sponsors/sendgrid.png";
import northrop from "assets/images/sponsors/northrop.png";
import github from "assets/images/sponsors/github.png";
import surcle from "assets/images/sponsors/surcle.png";
import gigabyte from "assets/images/sponsors/gigabyte.png";
import ardent from "assets/images/sponsors/ardent.png";
import sketch from "assets/images/sponsors/sketch.png";
import stickermule from "assets/images/sponsors/stickermule.png";
import tech from "assets/images/sponsors/tech.png";
// import facebook from "assets/images/sponsors/facebook.png";
import hint from "assets/images/sponsors/hint.png";
import texas from "assets/images/sponsors/texas-instrument-white.png";
import interview from "assets/images/sponsors/interview-cake.png";
import producthunt from "assets/images/sponsors/producthunt.png";
import raspberry from "assets/images/sponsors/raspberry.png";
// import gcp from "assets/images/sponsors/gcp.png";

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
  },
  {
    name: "SendGrid",
    src: sendgrid,
    url: "https://sendgrid.com/"
  },
  {
    name: "Northrop Grumman",
    src: northrop,
    url: "https://www.northropgrumman.com/"
  },
  {
    name: "Github",
    src: github,
    url: "https://github.com/"
  },
  {
    name: "Surcle",
    src: surcle,
    url: "https://www.surcle.io/"
  },
  {
    name: "Gigabyte",
    src: gigabyte,
    url: "https://www.gigabyte.com/"
  },
  {
    name: "Ardent Labs",
    src: ardent,
    url: "https://www.ardentlabs.io/"
  },
  {
    name: "Sketch",
    src: sketch,
    url: "https://www.sketch.com/"
  },
  {
    name: "Stickermule",
    src: stickermule,
    url: "https://www.stickermule.com/supports/hackathons"
  },
  {
    name: ".Tech",
    src: tech,
    url: "https://get.tech/"
  },
  {
    name: "Hint",
    src: hint,
    url: "https://www.drinkhint.com/"
  },
  {
    name: "Texas Instruments",
    src: texas,
    url: "https://www.ti.com/"
  },
  {
    name: "Interview Cake",
    src: interview,
    url: "https://www.interviewcake.com/"
  },
  {
    name: "Product Hunt",
    src: producthunt,
    url: "https://www.producthunt.com/"
  },
  {
    name: "Raspberry Pi",
    src: raspberry,
    url: "https://www.raspberrypi.org/"
  }
];

export default function PastSponsors() {
  return (
    <div>
      <h2 className="mainpage__subtitle">Past Sponsors</h2>
      <Sponsors sponsors={sponsors} />
    </div>
  );
}
