import React from "react";

import { Link } from "react-router-dom";

import { motion, useViewportScroll, useTransform } from "framer-motion";

import "./HomeBanner.scss";

function HomeBanner() {
  const { scrollYProgress } = useViewportScroll();

  return (
    <section className="home-banner">
      <div className="banner-image" />
      <motion.div className="banner-info">
        <h1>
          <span className="hack">HackUCI</span>
        </h1>
        <h3>February 11-13, 2022</h3>
        <Link
          to="/apply"
          className="btn btn-hack fit-content"
          aria-label="Apply to HackUCI 2021"
        >
          Apply Now
        </Link>
      </motion.div>
    </section>
  );
}

export default HomeBanner;
