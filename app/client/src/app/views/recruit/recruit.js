import React, { useEffect } from "react";

import Explore from "../../../assets/images/recruit/explore-icon-viv.png";
import Create from "../../../assets/images/recruit/create-icon-viv.png";
import Learn from "../../../assets/images/recruit/learn-icon-viv.png";

import { Link } from "react-router-dom";

import "./recruit.scss";
import { Button } from "react-bootstrap";

const Recruit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="recruit">
      <h1 className="recruitment-title">Recruiting</h1>
      <h2 className="recruitment-deadline">
        Deadline: April 18th 11:59 PM PST
      </h2>

      <div className="info-section">
        <div className="info-header">
          <img
            style={{ marginRight: "20px" }}
            alt="explore"
            src={Explore}
            width="50px"
            height="50px"
          />
          <h2>Explore</h2>
        </div>
        <p class="info-description">
          We provide professional events that help people to explore new
          technologies, ground-breaking ideas, and career paths.
        </p>
      </div>

      <div className="info-section">
        <div className="info-header">
          <img
            style={{ marginRight: "20px" }}
            alt="explore"
            src={Create}
            width="50px"
            height="50px"
          />
          <h2>Create</h2>
        </div>
        <p class="info-description">
          We support the developer community at UCI to collaborate on innovative
          technical products that have meaning.
        </p>
      </div>

      <div className="info-section">
        <div className="info-header">
          <img
            style={{ marginRight: "20px" }}
            alt="explore"
            src={Learn}
            width="50px"
            height="50px"
          />
          <h2>Learn</h2>
        </div>
        <p class="info-description">
          We host workshops and hackathons that support people as they learn
          industry-relevant skills.
        </p>
      </div>

      <div className="about-us-section">
        <h2 className="about-us-title">About Us</h2>
        <div class="about-us-description">
          Hack at UCI is an organization that promotes developer culture by
          encouraging people to think creatively, develop technology boldly, and
          pursue the leading edge of technical innovation. Our organization
          regularly hosts technical and professional development workshops that
          teach students industry-relevant skills. Furthermore, we aim to
          celebrate UC Irvine’s spirit of innovation by organizing ZotHacks, a
          beginner-friendly hackathon, and HackUCI, Orange County’s largest
          hackathon.
        </div>
      </div>

      <h2 className="teams-title">The Committees</h2>

      <div className="teams">
        <Link className="teams-link" to="/recruit/corporate">
          <Button className="apply-button teams-button" variant="hack">
            Corporate
          </Button>
        </Link>
        <Link className="teams-link" to="/recruit/logistics">
          <Button className="apply-button teams-button" variant="hack">
            Logistics
          </Button>
        </Link>
        <Link className="teams-link" to="/recruit/marketing">
          <Button className="apply-button teams-button" variant="hack">
            Marketing
          </Button>
        </Link>
        <Link className="teams-link" to="/recruit/technology">
          <Button className="apply-button teams-button" variant="hack">
            Technology
          </Button>
        </Link>
        <Link className="teams-link" to="/recruit/graphics">
          <Button className="apply-button teams-button" variant="hack">
            Graphics
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Recruit;
