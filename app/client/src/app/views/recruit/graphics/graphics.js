import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

import graphicsImg from "../../../../assets/images/recruit/graphics.png";

import "./graphics.scss";

const Graphics = () => {
  const isRecruiting = true;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="graphics">
      <h1 className="graphics-title">Graphics</h1>
      {isRecruiting ? (
        <div className="status-div">
          <div className="status">No longer Recruiting</div>
        </div>
      ) : (
        <></>
      )}
      <br /> <br />
      <div className="graphics-team-img">
        <img className="img" alt="graphics Team" src={graphicsImg} />
      </div>
      <br />
      <p className="general-info-text">
        As a graphic designer, you will be responsible for creating graphics
        that represent our organization and events for various platforms, such
        as Facebook or Instagram. Designers also shape the theme and aesthetic
        for ZotHacks and HackUCI. Each design will follow general guidelines and
        have to be submitted for review before given deadlines. You must be
        detail-oriented and have proficient knowledge in visual design, color
        theory, and typography. You will also be working closely with the web
        development team, so experience with HTML and CSS is a plus, but not
        required.
      </p>
      <br />
      <div className="qualifications">
        <span>Key Qualifications</span>
        <ul>
          <li>Proficiency in graphic design</li>
          <li>
            Experience using a raster graphics editor (ex. Adobe Photoshop, Fire
            Alpaca, etc.)
          </li>
          <li>Creative and critical thinking abilities</li>
          <li>
            Experience using a vector graphics editor (ex. Adobe Illustrator,
            Inkscape, etc.)
          </li>
          <li>
            Willing to dedicate ~4 hours per week to Hack (meeting, content
            creation, etc.)
          </li>
        </ul>
      </div>
      <br />
      <br />
      {/*<a*/}
      {/*  target="_blank"*/}
      {/*  style={{ fontSize: "25px" }}*/}
      {/*  href="https://www.notion.so/Hack-at-UCI-Graphics-Deliverable-2021-2022-10eeb56393104af9b5eccfd4964e0eb6"*/}
      {/*>*/}
      {/*  Click for Graphic Design Deliverable Prompt!*/}
      {/*</a>*/}
      {/*<br />*/}
      {/*<Button className="apply-button" variant="hack">*/}
      {/*  <a*/}
      {/*    style={{ color: "white" }}*/}
      {/*    target="_blank"*/}
      {/*    href="https://airtable.com/shrIDZCuMyObiUmEC"*/}
      {/*  >*/}
      {/*    Apply here!*/}
      {/*  </a>*/}
      {/*</Button>*/}
    </div>
  );
};

export default Graphics;
