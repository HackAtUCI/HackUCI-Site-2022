import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import HackLogo from "../../../assets/images/white-anteater-logo-vectorized.svg";

import { Link } from "react-router-dom";

import "./appNavbar.scss";

export default function AppNavbar() {
  return (
    <Navbar className="hack-navbar">
      <Navbar.Brand>
        <Link to="/">
          <img src={HackLogo} alt="HackLogo" className="hack-navbar-logo" />
        </Link>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link className="nav-non-button-item">
          <Link to="/">Home</Link>
        </Nav.Link>
        <Nav.Link className="nav-non-button-item">
          <Link to="/sponsors">Sponsor Us</Link>
        </Nav.Link>
        <Nav.Link>
          <Button>
            <Link to="/login">Login</Link>
          </Button>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
