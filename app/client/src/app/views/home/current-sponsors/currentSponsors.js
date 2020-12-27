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
import neuro from "assets/images/sponsors/neuro.png";
import twilio from "assets/images/sponsors/twilio-logo-white.svg";

// Clubs
import codepath from "assets/images/sponsors/codepath.png";
import wics from "assets/images/sponsors/wics-website-logo.png";
import aiuci from "assets/images/sponsors/ai-at-uci.png";
import vgdc from "assets/images/sponsors/vgdc-logo.png";
import cyber from "assets/images/sponsors/cyber-logo.png";
import icssc from "assets/images/sponsors/icssc-logo.png";

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
    name: "Twilio",
    src: twilio,
    url: "https://www.twilio.com/"
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
    name: "Neuro",
    src: neuro,
    url: "https://drinkneuro.com/"
  },
  {
    name: "Sketch",
    src: sketch,
    url: "https://www.sketch.com/"
  },
  {
    name: "WICS",
    src: wics,
    url: "https://wics.ics.uci.edu/"
  },
  {
    name: "AI @ UCI",
    src: aiuci,
    url: "https://aiclub.ics.uci.edu/"
  },
  {
    name: "CodePath",
    src: codepath,
    url: "https://codepath.org/"
  },
  {
    name: "VGDC",
    src: vgdc,
    url: "https://sites.google.com/uci.edu/vgdcuci/home"
  },
  {
    name: "Cyber @ UCI",
    src: cyber,
    url: "https://cyberclub.ics.uci.edu/"
  },
  {
    name: "ICSSC",
    src: icssc,
    url: "https://studentcouncil.ics.uci.edu/"
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
