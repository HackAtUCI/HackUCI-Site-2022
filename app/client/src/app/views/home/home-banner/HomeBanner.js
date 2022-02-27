import React from "react";

import { Link } from "react-router-dom";

import { Floaters } from "app/components";

import "./HomeBanner.scss";

function HomeBanner() {
  return (
    <section className="home-banner">
      <Floaters />

      <div className="banner-overlay container">
        <h1>HackUCI</h1>
        <div className="lead banner-subtitle">
          <span>
            February 25-27, 2022
            {/*Postponed until the near future.{" "}*/}
            {/*<Link to="/statement" className="banner-link">*/}
            {/*  Read more*/}
            {/*</Link>*/}
          </span>{" "}
          <span className="middot">·</span> <span>Hybrid Hackathon</span>
        </div>
        <div className="apply-buttons">
          <a
            href="https://hackuci-2022.devpost.com/"
            className="btn btn-hack"
            target="_blank"
            rel="noopener noreferrer"
          >
            Devpost
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
