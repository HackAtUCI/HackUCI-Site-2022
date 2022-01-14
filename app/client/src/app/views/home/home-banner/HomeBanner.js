import React from "react";

import { Link } from "react-router-dom";

import Floaters from "./Floaters";

import "./HomeBanner.scss";

function HomeBanner() {
  return (
    <section className="home-banner">
      <Floaters />

      <div className="banner-overlay container">
        <h1>HackUCI</h1>
        <div className="lead banner-subtitle">
          <span>February 11&ndash;13, 2022</span>{" "}
          <span className="middot">·</span> <span>Virtual Hackathon</span>
        </div>
        <div className="apply-buttons">
          <Link to="/apply" className="btn btn-hack">
            Apply to be a Hacker
          </Link>
          <a
            href="https://airtable.com/shrbPw3zLgnVZkMkA"
            className="btn btn-hack"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply to be a Mentor
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
