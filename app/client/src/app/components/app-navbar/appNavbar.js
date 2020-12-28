import React, { useState, useEffect } from "react";

import useAuth from "../../../hooks/useAuth";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import { Link, useLocation } from "react-router-dom";
import { HackLogo } from "app/components";

import "./appNavbar.scss";

export default function AppNavbar() {
  const location = useLocation();
  const [currentPath, setcurrentPath] = useState("");
  const [expanded, setExpanded] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  useEffect(() => {
    console.log(isLoggedIn);
    setcurrentPath(location.pathname);
  }, [location, isLoggedIn]);

  const logButtonText = isLoggedIn ? "Logout" : "Login";
  const logButtonPath = isLoggedIn ? "/" : "/";

  return (
    <Navbar
      className={
        currentPath === "/" ? "hack-navbar hack-navbar-home" : "hack-navbar"
      }
      expand="lg"
      expanded={expanded}
    >
      <Navbar.Brand>
        <Link to="/">
          <HackLogo />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        className="hack-nav-hamburger"
        aria-controls="iner-navbar-nav"
        onClick={() => setExpanded(expanded ? false : "expanded")}
      />
      <Navbar.Collapse
        className={
          currentPath === "/" ? "hack-navbar-blue" : "hack-navbar-black"
        }
      >
        <Nav className="ml-auto">
          <Nav.Link
            className="hack-nav-item nav-non-button-item"
            onClick={() => setExpanded(false)}
          >
            <Link
              to="/"
              className={
                (currentPath === "/" && "selected") + " special-nav-animation"
              }
            >
              Home
            </Link>
          </Nav.Link>
          <Nav.Link
            className="hack-nav-item nav-non-button-item"
            onClick={() => setExpanded(false)}
          >
            <Link
              to="/sponsors"
              className={
                (currentPath.includes("sponsors") && "selected") +
                " special-nav-animation"
              }
            >
              Sponsor Us
            </Link>
          </Nav.Link>
          {isLoggedIn ? (
            <Nav.Link
              className="hack-nav-item nav-non-button-item"
              onClick={() => setExpanded(false)}
            >
              <Link
                to="/dashboard"
                className={currentPath.includes("dashboard") && "selected"}
              >
                Dashboard
              </Link>
            </Nav.Link>
          ) : (
            ""
          )}
          <Nav.Link
            className="hack-nav-item"
            onClick={() => {
              setExpanded(false);
              logout();
            }}
          >
            <Button className="hack-button">
              <Link to={logButtonPath}>{logButtonText}</Link>
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
