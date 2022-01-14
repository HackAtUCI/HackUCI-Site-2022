import React from "react";

import { motion, useViewportScroll, useTransform } from "framer-motion";

import cloudCoverShort from "assets/images/site-2022/cloud-cover-1.png";
import cloudCoverMed from "assets/images/site-2022/cloud-cover-2.png";
import cloudCoverTall from "assets/images/site-2022/cloud-cover-3.png";

import frontCloud1 from "assets/images/site-2022/cloud-front-1.png";
import frontCloud2 from "assets/images/site-2022/cloud-front-2.png";
import frontCloud3 from "assets/images/site-2022/cloud-front-3.png";

import island from "assets/images/site-2022/island.png";

import rearCloud1 from "assets/images/site-2022/cloud-rear-1.png";
import rearCloud2 from "assets/images/site-2022/cloud-rear-2.png";
import rearCloud3 from "assets/images/site-2022/cloud-rear-3.png";

import "./Floaters.scss";

function Floaters() {
  const { scrollY } = useViewportScroll();

  // distance of base plane to viewer
  const origin = 10;

  // calculate y-offset based on perspective projection to origin plane
  // negative feed indicates further from viewer, aligned with z-axis
  const perspectiveOffset = f => y => -(y * f) / (origin - f);

  const yFarthestView = useTransform(scrollY, perspectiveOffset(-10));
  const yFartherView = useTransform(scrollY, perspectiveOffset(-4));
  const yFarView = useTransform(scrollY, perspectiveOffset(-2));

  const yCloseView1 = useTransform(scrollY, perspectiveOffset(2));
  const yCloseView2 = useTransform(scrollY, perspectiveOffset(2.7));
  const yCloseView3 = useTransform(scrollY, perspectiveOffset(2.3));

  return (
    <div className="floaters">
      <motion.div
        className="cloud cloud-cover-tall"
        style={{ y: yFarthestView }}
      >
        <img src={cloudCoverTall} alt="" />
      </motion.div>

      <motion.div className="cloud cloud-cover-med" style={{ y: yFartherView }}>
        <img src={cloudCoverMed} alt="" />
      </motion.div>

      <motion.div
        className="cloud clouds-rear cloud-rear-1"
        style={{ y: yFarView }}
      >
        <img src={rearCloud1} alt="" />
      </motion.div>
      <motion.div
        className="cloud clouds-rear cloud-rear-2"
        style={{ y: yFarView }}
      >
        <img src={rearCloud2} alt="" />
      </motion.div>
      <motion.div
        className="cloud clouds-rear cloud-rear-3"
        style={{ y: yFarView }}
      >
        <img src={rearCloud3} alt="" />
      </motion.div>

      <div className="cloud cloud-cover-short" style={{}}>
        <img src={cloudCoverShort} alt="" />
      </div>

      <div className="island">
        <img src={island} alt="" />
      </div>

      <motion.div
        className="cloud clouds-front cloud-front-1"
        style={{ y: yCloseView1, scale: 1.25 }}
      >
        <img src={frontCloud1} alt="" />
      </motion.div>
      <motion.div
        className="cloud clouds-front cloud-front-2"
        style={{ y: yCloseView2, scale: 1.25 }}
      >
        <img src={frontCloud2} alt="" />
      </motion.div>
      <motion.div
        className="cloud clouds-front cloud-front-3"
        style={{ y: yCloseView3, scale: 1.25 }}
      >
        <img src={frontCloud3} alt="" />
      </motion.div>
    </div>
  );
}

export default Floaters;
