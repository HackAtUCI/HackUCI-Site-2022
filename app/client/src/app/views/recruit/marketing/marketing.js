import React from 'react';
import { Button } from 'react-bootstrap';

import MarketingImg from '../../../../assets/images/recruit/marketing.jpg';

import './marketing.scss';

const Marketing = () => {

  return (
    <div className="marketing">
      <h1 className="marketing-title">Marketing</h1>


      <h3 className="marketing-subheader">
        We Make Ourselves Known </h3>
      <br /> <br />

      <div className="marketing-team-img">
        <img className = "img" alt="marketing Team" src={MarketingImg} />
      </div>

      <br />

      <p className="general-info-text">
        As a general marketing organizer, your responsibilities vary
        from sending emails via to making posts on social media platforms
        in a witty and creative manner. You are required to meet strict
        deadlines and have exceptional communication skills since marketing
        is all about reaching out to the public.
      </p>

      <br />

      <div className="qualifications">
        <span>Key Qualifications</span>
        <ul>
          <li>Exceptional communication and writing skills</li>
          <li>Experience with email and social media marketing campaigns
              (MailChimp, SendGrid, Facebook, Instagram, Twitter)</li>
          <li>Creative and critical thinking abilities</li>
          <li>Drive to work in a fast-paced cross-functional team</li>
          <li>Drive to work in a fast-paced cross-functional team</li>
          <li>Photography and videography skills (preferred)</li>
        </ul>
      </div>

      <a target="_blank" style={{ fontSize: "25px" }} href="https://drive.google.com/file/d/1P37JzKyDyjlizvj4LJfT1HERajLZhR8v/view?usp=sharing">Click Here for General Marketing Deliverable Prompt!</a>


      <br /><br />

      <p className="general-info-text">
        As a graphic designer, you will be responsible for creating graphics
        that represent our organization and events for various platforms,
        such as Facebook or Instagram. Designers also shape the theme and
        aesthetic for ZotHacks and HackUCI. Each design will follow general
        guidelines and have to be submitted for review before given deadlines.
        You must be detail-oriented and have proficient knowledge in visual
        design, color theory, and typography. You will also be working
        closely with the web development team, so experience with HTML and
        CSS is a plus, but not required.
      </p>


      <br />

      <div className="qualifications">
        <span>Key Qualifications</span>
        <ul>
          <li>Proficiency in graphic design</li>
          <li>Experience using a raster graphics editor (ex. Adobe Photoshop,
              Fire Alpaca, etc.)</li>
          <li>Creative and critical thinking abilities</li>
          <li>Experience using a vector graphics editor (ex. Adobe Illustrator,
              Inkscape, etc.)</li>
          <li>Willing to dedicate ~4 hours per week to Hack (meeting, content
              creation, etc.)</li>
        </ul>
      </div>

      <br /><br />
      <a
        target="_blank"
        style={{ fontSize: "25px" }}
        href="https://drive.google.com/file/d/1t1YvWNu455j7jh087o_p9kpKdBSQv99W/view?usp=sharing"
      >Click for Graphic Design Deliverable Prompt
            </a>


      <br />
      <Button className = "apply-button" variant="hack">
        <a style={{ color: "white" }} target="_blank" href="https://forms.gle/BmwpMbmFvJRT8eWy9">Apply here!</a>
      </Button>
    </div>
  );
}

export default Marketing;