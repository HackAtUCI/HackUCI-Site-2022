import React from "react";

import { motion, useViewportScroll, useTransform } from "framer-motion";

import frontClouds from "assets/images/site-2022/clouds-front.png";
import island from "assets/images/site-2022/island.png";
import rearClouds from "assets/images/site-2022/clouds-rear.png";

import cloudCoverShort from "assets/images/site-2022/cloud-cover-1.png";
import cloudCoverMed from "assets/images/site-2022/cloud-cover-2.png";
import cloudCoverTall from "assets/images/site-2022/cloud-cover-3.png";

import "./Floaters.scss";

function Floaters() {
  const { scrollY } = useViewportScroll();

  // distance of base plane to viewer
  const origin = 10;

  // calculate y-offset based on perspective projection to origin plane
  // negative feed indicates further from viewer, aligned with z-axis
  const perspectiveOffset = f => y => -(y * f) / (origin - f);

  const yFarthestView = useTransform(scrollY, perspectiveOffset(-10));
  const yFartherView = useTransform(scrollY, perspectiveOffset(-5));
  const yFarView = useTransform(scrollY, perspectiveOffset(-2));
  const yCloseView = useTransform(scrollY, perspectiveOffset(3));

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

      <motion.div className="cloud clouds-rear" style={{ y: yFarView }}>
        <img src={rearClouds} alt="" />
      </motion.div>

      <div className="island">
        <img src={island} alt="" />
      </div>

      <div className="cloud cloud-cover-short">
        <img src={cloudCoverShort} alt="" />
      </div>

      <motion.div
        className="cloud clouds-front"
        style={{ y: yCloseView, scale: 1.25 }}
      >
        <img src={frontClouds} alt="" />
      </motion.div>
    </div>
  );
}

export default Floaters;
