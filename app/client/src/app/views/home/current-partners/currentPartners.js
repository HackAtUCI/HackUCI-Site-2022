import React from "react";

import { Sponsors } from "app/containers";

// Clubs
import codepath from "assets/images/sponsors/codepath.png";
import wics from "assets/images/sponsors/wics-website-logo.png";
import aiuci from "assets/images/sponsors/ai-at-uci.png";
import vgdc from "assets/images/sponsors/vgdc-logo.png";
import cyber from "assets/images/sponsors/cyber-logo.png";
import icssc from "assets/images/sponsors/icssc-logo.png";
import design from "assets/images/sponsors/design-logo.png";
import tag from "assets/images/sponsors/tag-logo.png";
import maiss from "assets/images/sponsors/maiss-logo.png";
import dfs from "assets/images/sponsors/dfs-logo.png";
import pinnacle from "assets/images/sponsors/pinnacle.png";
import { mapSeries } from "async";

const partners = [
  {
    name: "CodePath",
    src: codepath,
    url: "https://codepath.org/"
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
    name: "Design at UCI",
    src: design,
    url: "https://designatuci.com/"
  },
  {
    name: "TAG at UCI",
    src: tag,
    url: "https://linktr.ee/TAGUCI"
  },
  {
    name: "MAISS",
    src: mapSeries,
    url: "http://www.maissuci.com/"
  },
  {
    name: "ICSSC",
    src: icssc,
    url: "https://studentcouncil.ics.uci.edu/"
  },
  {
    name: "Dreams for Schools",
    src: dfs,
    url: "https://www.dreamsforschools.org/"
  },
  {
    name: "Pinnacle",
    src: pinnacle,
    url: "https://pinnacle.us.org/"
  }
];

export default function CurrentPartners() {
  return (
    <div>
      <h2 className="mainpage__subtitle">Partners</h2>
      <Sponsors sponsors={partners} />
    </div>
  );
}
