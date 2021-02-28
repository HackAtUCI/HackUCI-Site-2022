import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

import logisticsImg from "../../../../assets/images/recruit/logistics.jpg";

import "./logistics.scss";

const Logistics = () => {
  const isRecruiting = true;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="logistics">
      <h1 className="logistics-title">Logistics</h1>
      <h3 className="logistics-subheader">We Coordinate Event Operations </h3>
      {isRecruiting ? (
        <div className="status-div">
          <div className="status">Currently Recruiting!</div>
        </div>
      ) : (
        <></>
      )}
      <br /> <br />
      <div className="logistics-team-img">
        <img className="img" alt="logistics Team" src={logisticsImg} />
      </div>
      <br />
      <p className="general-info-text">
        The logistics team organizes the operations of HackUCI and ZotHacks, as
        well as workshops during the year. We are a detail-oriented and
        impact-driven team, uniting diverse backgrounds and skill sets to ensure
        that events run smoothly and benefit all parties involved.
      </p>
      <br />
      <div className="qualifications">
        <span>Key Qualifications</span>
        <ul>
          <li>Excellent time management skills</li>
          <li>Great planning and organization skills</li>
          <li>Attention to detail</li>
          <li>
            Strong written and verbal communication skills, especially in a
            timely and efficient manner for issues
          </li>
          <li>Drive to work in a fast paced environment</li>
          <li>Work in a team based environment in order to meet goals</li>
          <li>Handle a large budget in order to organize events efficiently</li>
          <li>
            Proficient in managing information through folders (Google Drive),
            spreadsheets (Google Sheets), and documents (Google Docs)
          </li>
          <li>
            Willing to dedicate ~4 hours per week to Hack (meeting, content
            creation, etc.)
          </li>
          <li>Most importantly, willingness to adapt and learn new things</li>
        </ul>
      </div>
      <br />
      <br />
      <a
        target="_blank"
        style={{ fontSize: "25px" }}
        href="https://www.notion.so/Hack-at-UCI-Logistics-Team-Deliverable-2021-2022-091e7a2d9346455799604fd21065ad03"
      >
        Click Here for General logistics Deliverable Prompt!
      </a>
      <br />
      <Button className="apply-button" variant="hack">
        <a
          style={{ color: "white" }}
          target="_blank"
          href="https://airtable.com/shrIDZCuMyObiUmEC"
        >
          Apply here!
        </a>
      </Button>
    </div>
  );
};

export default Logistics;
