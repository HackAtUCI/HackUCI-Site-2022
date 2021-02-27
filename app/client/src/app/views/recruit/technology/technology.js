import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';

import TechnologyImg from '../../../../assets/images/recruit/technology.jpg';

import './technology.scss';

const Technology = () => {
  const isRecruiting = true;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  });

  return (
    <div className="technology">
      <h1 className="technology-title">Technology</h1>

      {isRecruiting ?
        <div className="status-div">
          <div className="status">
            Currently Recruiting!
      </div>
        </div> : <></>}

      <br/><br/>
      <p className="general-info-text">
        Every year, thousands of students across the country apply to our annual
        HackUCI event on our website. In addition, our website also receives a
        huge amount of traffic from various companies who visit our website to
        obtain sponsorship information. By joining the Technology team, you not
        only get to work on a large-scale hackathon application tracking
        platform, but you also have the opportunity to build exciting internal
        tools for our organizers so that they can work more efficiently.
        <br /> <br />

        <div className="technology-team-img">
          <img className="img" alt="Technology Team" src={TechnologyImg} />
        </div>

        <br />
        As a general developer, your primary task is to design and develop an
            eye-catching user interface that delivers a good first impression to
            both attendees and sponsors. You will be streamlining the hackathon
            registration experience and utilize the latest frontend technologies to
            implement it. On occasion, you will be tasked with building onto our server-side
            application or setting up and maintaining databases.
      </p>
      <br />
      <div className="qualifications">
        <span>Key Qualifications</span>
        <ul>
          <li>Proficiency in HTML5, CSS3 and Javascript.</li>
          <li>Experience in modern Javascript frameworks.</li>
          <li>Ability to write clean, well documented code.</li>
          <li>Experience with front-end styling frameworks (Bootstrap, Semantic
              UI, Material UI, etc.)</li>
        </ul>

        <br />
        <span>Preferred Qualifications</span>
        <ul>
          <li>Experience in developing Node.js web applications.</li>
          <li>Experience in setting up and maintaining MongoDB databases.</li>
          <li>Experience with cloud technologies (AWS, GCP, Heroku)</li>
        </ul>
      </div>

      <br /><br />

      <a target="_blank" style={{ fontSize: "25px" }} href="https://www.notion.so/uci/HackUCI-Tech-Team-Deliverable-e31d10cc364e4357b6bb9a581e4244c2">Click Here for General Technology Deliverable Prompt!</a>

      <br />

      <Button className="apply-button" variant="hack">
        <a target="_blank" style={{ color: "white" }} href="https://forms.gle/BmwpMbmFvJRT8eWy9">Apply here!</a>
      </Button>
    </div>
  );
}

export default Technology;