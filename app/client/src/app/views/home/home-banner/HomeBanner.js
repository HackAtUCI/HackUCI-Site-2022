import React from "react";

import { Link } from "react-router-dom";

import Floaters from "./Floaters";

import "./HomeBanner.scss";

function HomeBanner() {
  return (
    <section className="home-banner">
      <Floaters />

      <div className="banner-overlay">
        <h1>HackUCI</h1>
        <span className="lead">February 11-13, 2022</span>
        <Link
          to="/apply"
          className="btn btn-hack fit-content"
          aria-label="Apply to HackUCI 2021"
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
}

export default HomeBanner;
