import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import FB from "assets/images/facebook.svg";
import IG from "assets/images/instagram.svg";
import TW from "assets/images/twitter.svg";
import Mail from "assets/images/ic_fluent_mail_48_filled.svg";
import Discord from "assets/images/discord.svg";
import YT from "assets/images/youtube.svg";

// import { Link } from "react-router-dom";

import "./footer.scss";

export default function Footer() {
  return (
    <Navbar className="hack-footer">
      <span className="hack-footer-message">
        Made with 🥛🍵 and 💛️ in Irvine, CA. • Learn more about the{" "}
        <a href="https://hack.ics.uci.edu/about">Hack @ UCI team</a>
      </span>
      <Nav className="hack-footer-icon-group ml-auto">
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
        <a href="https://www.twitter.com/HackUCI">
          <img src={TW} alt="Twitter" className="hack-footer-icon" />
        </a>
        <a href="https://hack.ics.uci.edu/#discord">
          <img src={Discord} alt="Discord" className="hack-footer-icon" />
        </a>
        <a href="https://www.youtube.com/channel/UCeQbk4CMo3mxPHMtY80PtFQ">
          <img src={YT} alt="YouTube" className="hack-footer-icon" />
        </a>
      </Nav>
    </Navbar>
  );
}
