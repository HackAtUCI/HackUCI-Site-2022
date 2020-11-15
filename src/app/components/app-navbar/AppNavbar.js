import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Hamburger from "../../../assets/images/ic_fluent_navigation_24_regular.svg";

import HackLogo from "../../../assets/images/white-anteater-logo-vectorized.svg";

import { Link } from "react-router-dom";

import "./appNavbar.scss";

export default function AppNavbar() {
  return (
    <>
      <Navbar className="hack-navbar">
        <Navbar.Brand>
          <Link to="/">
            <img src={HackLogo} alt="HackLogo" className="hack-navbar-logo" />
          </Link>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link className="hack-nav-item nav-non-button-item">
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link className="hack-nav-item nav-non-button-item">
            <Link to="/sponsors">Sponsor Us</Link>
          </Nav.Link>
          <Nav.Link className="hack-nav-item nav-non-button-item">
            <Link to="/dashboard">Dashboard</Link>
          </Nav.Link>
          <Nav.Link>
            <Button className="hack-nav-item hack-button">
              <Link to="/login">Login</Link>
            </Button>
          </Nav.Link>
          <Button className="hack-nav-hamburger">
            <img src={Hamburger} alt="Menu" />
          </Button>
        </Nav>
      </Navbar>
      <div className="hack-nav-mobile-menu">
        <Nav.Link className="nav-non-button-item">
          <Link to="/">Home</Link>
        </Nav.Link>
        <Nav.Link className="nav-non-button-item">
          <Link to="/sponsors">Sponsor Us</Link>
        </Nav.Link>
        <Nav.Link className="nav-non-button-item">
          <Link to="/dashboard">Dashboard</Link>
        </Nav.Link>
        <Nav.Link>
          <Button className="hack-button">
            <Link to="/login">Login</Link>
          </Button>
        </Nav.Link>
      </div>
    </>
  );
}
