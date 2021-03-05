import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

import MarketingImg from "../../../../assets/images/recruit/marketing.jpg";

import "./marketing.scss";

const Marketing = () => {
  const isRecruiting = true;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="marketing">
      <h1 className="marketing-title">Marketing</h1>
      <h3 className="marketing-subheader">We Make Ourselves Known </h3>
      {isRecruiting ? (
        <div className="status-div">
          <div className="status">Currently Recruiting!</div>
        </div>
      ) : (
        <></>
      )}
      <br /> <br />
      <div className="marketing-team-img">
        <img className="img" alt="marketing Team" src={MarketingImg} />
      </div>
      <br />
      <p className="general-info-text">
        As a general marketing organizer, your responsibilities vary from
        sending emails via to making posts on social media platforms in a witty
        and creative manner. You are required to meet strict deadlines and have
        exceptional communication skills since marketing is all about reaching
        out to the public.
      </p>
      <br />
      <div className="qualifications">
        <span>Key Qualifications</span>
        <ul>
          <li>Exceptional communication and writing skills</li>
          <li>
            Experience with email and social media marketing campaigns
            (MailChimp, SendGrid, Facebook, Instagram, Twitter)
          </li>
          <li>Creative and critical thinking abilities</li>
          <li>Drive to work in a fast-paced cross-functional team</li>
          <li>Photography and videography skills (preferred)</li>
        </ul>
      </div>
      <br />
      <a
        target="_blank"
        style={{ fontSize: "25px" }}
        href="https://www.notion.so/Hack-at-UCI-Marketing-Deliverable-2021-2022-d66b84cfcea74ba2aef8bfce180e6023"
      >
        Click Here for General Marketing Deliverable Prompt!
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

export default Marketing;
