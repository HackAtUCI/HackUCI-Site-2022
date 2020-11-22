import React, { useState, useEffect } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import { Link, useLocation } from "react-router-dom";
import { HackLogo } from "app/components";

import "./appNavbar.scss";

export default function AppNavbar() {
  const location = useLocation();
  const [currentPath, setcurrentPath] = useState("");

  useEffect(() => {
    setcurrentPath(location.pathname);
  }, [location]);

  return (
    <Navbar
      className={
        currentPath === "/" ? "hack-navbar hack-navbar-home" : "hack-navbar"
      }
      expand="lg"
    >
      <Navbar.Brand>
        <Link to="/">
          <HackLogo />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        className="hack-nav-hamburger"
        aria-controls="iner-navbar-nav"
      />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Nav.Link className="hack-nav-item nav-non-button-item">
            <Link to="/" className={currentPath === "/" && "selected"}>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link className="hack-nav-item nav-non-button-item">
            <Link
              to="/sponsors"
              className={currentPath.includes("sponsors") && "selected"}
            >
              Sponsor Us
            </Link>
          </Nav.Link>
          <Nav.Link className="hack-nav-item nav-non-button-item">
            <Link
              to="/dashboard"
              className={currentPath.includes("dashboard") && "selected"}
            >
              Dashboard
            </Link>
          </Nav.Link>
          <Nav.Link className="hack-nav-item">
            <Button className="hack-button">
              <Link to="/login">Login</Link>
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
