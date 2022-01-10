import React from "react";

import { Link } from "react-router-dom";

import antMentor from "assets/images/site-2022/mentor.png";
import whiteCloudBorderTop from "assets/images/site-2022/white_cloud_border_top.svg";
import whiteCloudBorderBottom from "assets/images/site-2022/white_cloud_border_bottom.svg";
import antSponsor from "assets/images/site-2022/sponsor.png";

import "./Volunteer.scss";

function Volunteer() {
  return (
    <section className="volunteer-block">
      <img src={whiteCloudBorderTop} />
      <div className="volunteer-item-wrapper">
        <div className="volunteer-mentor-item">
          <img
            src={antMentor}
            alt="antmentor cat robot, saying 'teach' and 'tech"
          />
          <p className="header">Apply to be Mentor</p>
          <p>
            Due to the virtual format of HackUCI 2022, mentorship this year will
            be more important than ever. We need <b>YOUR</b> help to make this
            event successful and enjoyable for our hackers. Apply to be a mentor
            today!
          </p>
          <a
            href="https://airtable.com/shrbPw3zLgnVZkMkA"
            className="btn btn-hack"
            aria-label="HackUCI 2022 Mentor Applications"
          >
            Mentor Application
          </a>
        </div>
        <div className="volunteer-mentor-item">
          <img
            src={antSponsor}
            alt="antsponsor cat robot, saying 'support us'"
          />
          <p className="header">Become a Sponsor</p>
          <p>
            Interested in sponsoring HackUCI 2022? Check out our information
            below to learn more about our event and the outstanding achievements
            we have accomplished! For more information, email us at{" "}
            <a href="mailto:hack@uci.edu">hack@uci.edu</a>.
          </p>
          <Link
            to="/sponsors"
            className="btn btn-hack"
            aria-label="View Sponsors"
          >
            Sponsor Us
          </Link>
        </div>
      </div>
      <img src={whiteCloudBorderBottom} />
    </section>
  );
}

export default Volunteer;
