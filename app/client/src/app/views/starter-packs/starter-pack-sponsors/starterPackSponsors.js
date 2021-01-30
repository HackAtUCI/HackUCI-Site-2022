import React from "react";

import { Sponsors } from "app/containers";

import bentley from "assets/images/sponsors/bentley.png";
import northrop from "assets/images/sponsors/northrop.png";
import mobilityware from "assets/images/sponsors/mobilityware-logo.png";
import gcp from "assets/images/sponsors/google-cloud-logo.png";
import corsair from "assets/images/sponsors/corsair.png";
import crowdstrike from "assets/images/sponsors/crowdstrike.png";
import wayup from "assets/images/sponsors/wayup.png";
import linode from "assets/images/sponsors/linode.png";
import postman from "assets/images/sponsors/postman-logo.svg";
import jpl from "assets/images/sponsors/jpl.png";
import sketch from "assets/images/sponsors/sketch.png";
import figma from "assets/images/sponsors/figma-logo.svg";
import wolfram from "assets/images/sponsors/wolfram.png";
import badabean from "assets/images/sponsors/badabean.png";
import digitalocean from "assets/images/sponsors/digitalocean.png";
import voiceflow from "assets/images/sponsors/voiceflow.png";
import neuro from "assets/images/sponsors/neuro.png";
import twilio from "assets/images/sponsors/twilio-logo-white.svg";
import piazza from "assets/images/sponsors/piazza.png";
import binarysearch from "assets/images/sponsors/binarysearch.png";
import replit from "assets/images/sponsors/replit.png";
import zybooks from "assets/images/sponsors/zybooks.png";
import codex from "assets/images/sponsors/codex.png";
import mathworks from "assets/images/sponsors/mathworks.png";
import quokka from "assets/images/sponsors/quokka.png";
import blaze from "assets/images/sponsors/blaze.png";

const sponsors = [
  {
    name: "Bentley Systems",
    src: bentley,
    url: "https://www.bentley.com/en"
  },
  {
    name: "Northrop Grumman",
    src: northrop,
    url: "https://www.northropgrumman.com/"
  },
  {
    name: "MobilityWare",
    src: mobilityware,
    url: "https://www.mobilityware.com/"
  },
  {
    name: "Google Cloud Platform",
    src: gcp,
    url: "https://cloud.google.com/"
  },
  {
    name: "CrowdStrike",
    src: crowdstrike,
    url: "https://www.crowdstrike.com/"
  },
  {
    name: "linode",
    src: linode,
    url: "https://www.linode.com/"
  }
];

export default function StarterPackSponsors() {
  return (
    <div>
      <h2 className="mainpage__subtitle">Sponsors</h2>
      <Sponsors sponsors={sponsors} />
    </div>
  );
}
