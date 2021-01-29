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
    name: "Corsair",
    src: corsair,
    url: "https://www.corsair.com/us/en/gaming"
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
    name: "Postman",
    src: postman,
    url: "https://www.postman.com/"
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
    name: "Figma",
    src: figma,
    url: "https://www.figma.com/"
  },
  {
    name: "Piazza",
    src: piazza,
    url: "https://www.piazza.com/"
  },
  {
    name: "Zybooks",
    src: zybooks,
    url: "https://www.zybooks.com/"
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
  },
  {
    name: "Wolfram Alpha",
    src: wolfram,
    url: "https://www.wolframalpha.com/"
  },
  {
    name: "Mathworks",
    src: mathworks,
    url: "https://www.mathworks.com/"
  },
  {
    name: "Replit",
    src: replit,
    url: "http://repl.it/"
  },
  {
    name: "Binarysearch",
    src: binarysearch,
    url: "https://binarysearch.com/"
  },
  {
    name: "Codex",
    src: codex,
    url: "https://thecodex.me/"
  },
  {
    name: "Quokka",
    src: quokka,
    url: "https://www.quokkabrew.com/"
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
