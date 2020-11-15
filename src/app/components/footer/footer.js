import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import FB from "../../../assets/images/facebook.svg";
import IG from "../../../assets/images/instagram.svg";
import TW from "../../../assets/images/twitter.svg";
import Mail from "../../../assets/images/ic_fluent_mail_48_filled.svg";

import { Link } from "react-router-dom";

import "./footer.scss";
import Button from "react-bootstrap/Button";

export default function Footer() {
  return (
    <Navbar className="hack-footer">
      <span>
        Made with 🥛🍵 and 💛️ in Irvine, CA. • Learn more about the Hack @ UCI
        team.
      </span>
      <Nav className="ml-auto">
        <Link to="/login">
          <img
            src={Mail}
            alt="Email"
            className="hack-footer-icon hack-footer-email-svg-color"
          />
        </Link>
        <Link to="/login">
          <img src={FB} alt="Facebook" className="hack-footer-icon" />
        </Link>
        <Link to="/login">
          <img src={IG} alt="Instagram" className="hack-footer-icon" />
        </Link>
        <Link to="/login">
          <img src={TW} alt="Twitter" className="hack-footer-icon" />
        </Link>
      </Nav>
    </Navbar>
  );
}
