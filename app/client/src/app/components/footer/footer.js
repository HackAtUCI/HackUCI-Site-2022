import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import FB from "assets/images/facebook.svg";
import IG from "assets/images/instagram.svg";
import Mail from "assets/images/ic_fluent_mail_48_filled.svg";
import YT from "assets/images/youtube.svg";
import LinkedIn from "assets/images/linkedin.svg";
import HACK from "assets/images/hacklogo.png";

// import { Link } from "react-router-dom";

import "./footer.scss";

export default function Footer() {
  return (
    <Navbar className="hack-footer">
      <Nav className="hack-footer-icon-group ml-auto">
        <a href="https://hack.ics.uci.edu">
          <img src={HACK} alt="Hack" className="hack-footer-icon" />
        </a>
        <a href="mailto:hack@uci.edu">
          <img
            src={Mail}
            alt="Email"
            className="hack-footer-icon hack-footer-email-svg-color"
          />
        </a>
        <a href="https://www.facebook.com/groups/HackAtUCI">
          <img src={FB} alt="Facebook" className="hack-footer-icon" />
        </a>
        <a href="https://www.instagram.com/hackatuci/">
          <img src={IG} alt="Instagram" className="hack-footer-icon" />
        </a>
        <a href="https://www.linkedin.com/company/hackuci/">
          <img src={LinkedIn} alt="Linkedin" className="hack-footer-icon" />
        </a>
        <a href="https://www.youtube.com/channel/UCeQbk4CMo3mxPHMtY80PtFQ">
          <img src={YT} alt="YouTube" className="hack-footer-icon" />
        </a>
      </Nav>
      <span className="hack-footer-message">
        {"Made with "}
        <span role="img" aria-label="white heart">
          🤍
        </span>
        {"  in Irvine, CA. • Learn more about the "}
        <a href="https://hack.ics.uci.edu/about">Hack @ UCI team</a>
      </span>
    </Navbar>
  );
}
