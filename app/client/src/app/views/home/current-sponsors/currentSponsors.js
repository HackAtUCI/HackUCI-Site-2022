import React from "react";

import { Sponsors } from "app/containers";

import bentley from "assets/images/sponsors/bentley.png";
import mobilityware from "assets/images/sponsors/mobilityware-logo.png";
import gcp from "assets/images/sponsors/google-cloud-logo.png";
import crowdstrike from "assets/images/sponsors/crowdstrike.png";
import wayup from "assets/images/sponsors/wayup.png";
import linode from "assets/images/sponsors/linode.png";
import jpl from "assets/images/sponsors/jpl.png";
import sketch from "assets/images/sponsors/sketch.png";
import wolfram from "assets/images/sponsors/wolfram.png";
import badabean from "assets/images/sponsors/badabean.png";
import digitalocean from "assets/images/sponsors/digitalocean.png";
import voiceflow from "assets/images/sponsors/voiceflow.png";
import neuro from "assets/images/sponsors/neuro.png";
import twilio from "assets/images/sponsors/twilio-logo-white.svg";
import piazza from "assets/images/sponsors/piazza.png";

const sponsors = [
  {
    name: "Bentley Systems",
    src: bentley,
    url: "https://www.bentley.com/en"
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
    name: "WayUp",
    src: wayup,
    url: "https://www.wayup.com/"
  },
  {
    name: "linode",
    src: linode,
    url: "https://www.linode.com/"
  },
  {
    name: "Twilio",
    src: twilio,
    url: "https://www.twilio.com/"
  },
  {
    name: "Sketch",
    src: sketch,
    url: "https://www.sketch.com/"
  },
  {
    name: "Piazza",
    src: piazza,
    url: "https://www.piazza.com/"
  },
  {
    name: "Wolfram Alpha",
    src: wolfram,
    url: "https://www.wolframalpha.com/"
  },
  {
    name: "Voiceflow",
    src: voiceflow,
    url: "https://www.voiceflow.com/"
  },
  {
    name: "Jet Propulsion Laboratory",
    src: jpl,
    url: "https://www.jpl.nasa.gov/"
  },
  {
    name: "Bada Bean Snacks",
    src: badabean,
    url: "https://www.badabeansnacks.com/"
  },
  {
    name: "DigitalOcean",
    src: digitalocean,
    url: "https://www.digitalocean.com/"
  },
  {
    name: "Neuro",
    src: neuro,
    url: "https://getneuro.com/"
  }
];

export default function CurrentSponsors() {
  return (
    <div>
      <h2 className="mainpage__subtitle">Sponsors</h2>
      <Sponsors sponsors={sponsors} />
    </div>
  );
}
