import React from "react";

import { Sponsors } from "app/containers";

import crowdstrike from "assets/images/sponsors/crowdstrike.png";
import wayup from "assets/images/sponsors/wayup.png";
import linode from "assets/images/sponsors/linode.png";
import jpl from "assets/images/sponsors/jpl.png";
import sketch from "assets/images/sponsors/sketch.png";
import wolfram from "assets/images/sponsors/wolfram.png";
import badabean from "assets/images/sponsors/badabean.png";
import digitalocean from "assets/images/sponsors/digitalocean.png";
import voiceflow from "assets/images/sponsors/voiceflow.png";
import codepath from "assets/images/sponsors/codepath.png";
import neuro from "assets/images/sponsors/neuro.png";

const sponsors = [
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
    name: "Jet Propulsion Laboratory",
    src: jpl,
    url: "https://www.jpl.nasa.gov/"
  },
  {
    name: "Wolfram Alpha",
    src: wolfram,
    url: "https://www.wolframalpha.com/"
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
    name: "Voiceflow",
    src: voiceflow,
    url: "https://www.voiceflow.com/"
  },
  {
    name: "CodePath",
    src: codepath,
    url: "https://codepath.org/"
  },
  {
    name: "Neuro",
    src: neuro,
    url: "https://getneuro.com/"
  },
  {
    name: "Sketch",
    src: sketch,
    url: "https://www.sketch.com/"
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
