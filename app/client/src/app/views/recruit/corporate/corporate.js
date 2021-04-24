import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

import CorporateImg from "../../../../assets/images/recruit/corporate.jpg";

import "./corporate.scss";

const Corporate = () => {
  const isRecruiting = true;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="corporate">
      <h1 className="corporate-title">Corporate Outreach</h1>
      <h3 className="corporate-subheader">We Form Strategic Alliances</h3>
      {isRecruiting ? (
        <div className="status-div">
          <div className="status">No longer Recruiting</div>
        </div>
      ) : (
        <></>
      )}
      <br /> <br />
      <div className="corporate-team-img">
        <img className="img" alt="corporate Team" src={CorporateImg} />
      </div>
      <br />
      <p className="general-info-text">
        As a Corporate Outreach organizer, you will be responsible for
        contacting companies for financial sponsorship, hardware, swag, and
        mentorship. We build meaningful relationships with existing partners and
        reach out to other local companies to support HackUCI and Hack as a
        whole. Help us communicate with tech companies by using the following
        strategies: diligent emailing, scheduling phone calls, attending career
        fairs, participating at hackathons, and networking at professional
        events! Not only does this help us grow our professional network to have
        better experiences for our attendees, but this is also a great way for
        you to build lasting professional relationships with a wide breadth of
        companies and gain opportunities to get internships or full-time jobs.
      </p>
      <div className="roles">
        <div className="general">
          {/*<h3 className="role-title">General Corporate Organizer</h3>*/}

          {/*<p className="role-description">*/}
          {/*  Gain as many sponsorships from companies whether it be monetary*/}
          {/*  support, prizes, mentors, swag, etc.*/}
          {/*</p>*/}
          {/*<p className="role-description">*/}
          {/*  Attend other hackathons (LA Hacks, SD Hacks, Cal Hacks, Hacktech,*/}
          {/*  Citrus Hack, TreeHacks, etc) and talk to the sponsors there. Your*/}
          {/*  job is to advertise HackUCI, network with companies, collect contact*/}
          {/*  information, record what happened, and continuously follow up with*/}
          {/*  the people you've met.*/}
          {/*</p>*/}
          {/*<p className="role-description">*/}
          {/*  Attend and volunteer at UCI career fairs (Fall Career Fair, STEM*/}
          {/*  Career Fair, etc). Your job is to advertise HackUCI, network with*/}
          {/*  companies, collect contact information, record what happened, and*/}
          {/*  continuously follow up with the people you've met.*/}
          {/*</p>*/}
        </div>
      </div>
      <br />
      <div className="qualifications">
        <span>Key Qualifications</span>
        <ul>
          <li>Strong written and verbal communication skills</li>
          <li>
            Proficient in managing information through spreadsheets (MS Excel,
            Google Sheets)
          </li>
          <li>Organized and responsive</li>
          <li>Experience with drafting professional documents</li>
          <li>High tolerance for rejection</li>
          <li>Drive to work in a fast paced environment</li>
          <li>
            Willing to dedicate ~5 hours per week to Hack (meeting, content
            creation, etc.)
          </li>
        </ul>
      </div>
      <br />
      <br />
      {/*<a*/}
      {/*  target="_blank"*/}
      {/*  style={{ fontSize: "25px" }}*/}
      {/*  href="https://www.notion.so/Hack-at-UCI-Corporate-Outreach-Deliverable-2021-2022-158b187a1f4941158a3bd66f37e67cac"*/}
      {/*>*/}
      {/*  Click Here for General Corporate Deliverable Prompt!*/}
      {/*</a>*/}
      {/*<br />*/}
      {/*<Button className="apply-button" variant="hack">*/}
      {/*  <a*/}
      {/*    target="_blank"*/}
      {/*    style={{ color: "white" }}*/}
      {/*    href="https://airtable.com/shrIDZCuMyObiUmEC"*/}
      {/*  >*/}
      {/*    Apply here!*/}
      {/*  </a>*/}
      {/*</Button>*/}
    </div>
  );
};

export default Corporate;
