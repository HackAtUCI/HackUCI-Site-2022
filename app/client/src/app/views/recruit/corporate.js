import React from 'react';
import { Button } from 'react-bootstrap';

import CorporateImg from '../../../assets/images/recruit/corporate.jpg';

import './corporate.scss';

const corporate = () => {

  return (
    <div className="corporate">
      <h1 className="corporate-title">Corporate Outreach</h1>


      <h3 className="corporate-subheader">
        We Form Strategic Alliances</h3>
      <br /> <br />

      <div className="corporate-team-img">
        <img alt="corporate Team" src={CorporateImg} width="50%" height="50%" style={{ borderRadius: "25px" }} />
      </div>

      <br />
      <p className="general-info-text">
        As a Corporate Outreach organizer, you will be responsible for
        contacting companies for financial sponsorship, hardware, swag,
        and mentorship. We build meaningful relationships with existing
        partners and reach out to other local companies to support HackUCI
        and Hack as a whole. Help us communicate with tech companies by
        using the following strategies: diligent emailing, scheduling phone
        calls, attending career fairs, participating at hackathons, and
        networking at professional events! Not only does this help us
        grow our professional network to have better experiences for our
        attendees, but this is also a great way for you to build lasting
        professional relationships with a wide breadth of companies and
        gain opportunities to get internships or full-time jobs.
      </p>

      <div className="roles">
        <div className="general">
          <h3 className="role-title">General Corporate Organizer</h3>

          <p className="role-description">
            Gain as many sponsorships from companies whether it be monetary
            support, prizes, mentors, swag, etc.
          </p>

        </div>

        <div className="hackathon-specialist">
          <h3 className="role-title">Hackathon Specialist</h3>
          <p className="role-description">
            Attend other hackathons (LA Hacks, SD Hacks, Cal Hacks, Hacktech,
            Citrus Hack, TreeHacks, etc) and talk to the sponsors there. Your
            job is to advertise HackUCI, network with companies, collect contact
            information, record what happened, and continuously follow up with
            the people you've met.
          </p>
        </div>

        <div className="career-specialist">
          <h3 className="role-title">Hackathon Specialist</h3>
          <p className="role-description">
            Attend and volunteer at UCI career fairs (Fall Career Fair, STEM
            Career Fair, etc). Your job is to advertise HackUCI, network with
            companies, collect contact information, record what happened, and
            continuously follow up with the people you've met.
          </p>
        </div>
      </div>

      <br />
      <div className="qualifications">
        <span>Key Qualifications</span>
        <ul>
          <li>Strong written and verbal communication skills</li>
          <li>Proficient in managing information through spreadsheets (MS Excel,
              Google Sheets)</li>
          <li>Organized and responsive</li>
          <li>Experience with drafting professional documents</li>
          <li>High tolerance for rejection</li>
          <li>Drive to work in a fast paced environment</li>
          <li>Willing to dedicate ~5 hours per week to Hack (meeting, content
              creation, etc.)</li>
        </ul>
      </div>

      <br /><br />

      <a style={{ fontSize: "25px" }} href="https://drive.google.com/file/d/1rncNZJfbVn74jFIq4sXTzQ3-3xvNaJ0t/view">Click Here for General corporate Deliverable Prompt!</a>
      <br />
      <Button className="apply-button" variant="hack">
        <a style={{ color: "white" }} href="https://forms.gle/BmwpMbmFvJRT8eWy9">Apply here!</a>
      </Button>
    </div>
  );
}

export default corporate;