import React, { useState } from "react";

import useAuth from "hooks/useAuth";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { NavLink, useLocation } from "react-router-dom";
import { HackLogo } from "app/components";
import { classNames } from "utils/helpers";

import "./appNavbar.scss";

export default function AppNavbar() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  // useEffect(() => {
  //   console.log("logged in", isLoggedIn);
  //   console.log(location.pathname);
  // }, [location, isLoggedIn]);

  const logButtonText = isLoggedIn ? "Logout" : "Login";
  const logButtonPath = isLoggedIn ? "/" : "/login";

  const closeNav = () => setExpanded(false);

  const PrivateNavItem = props => (isLoggedIn ? <NavItem {...props} /> : null);

  const navbarClass = classNames({
    "hack-navbar": true,
    "hack-navbar-home": location.pathname === "/"
  });

  return (
    <Navbar className={navbarClass} expand="lg" expanded={expanded}>
      <Navbar.Brand>
        <NavLink exact to="/">
          <HackLogo />
        </NavLink>
      </Navbar.Brand>

      <Navbar.Toggle
        className="hack-nav-hamburger"
        aria-controls="navbarNav"
        aria-expanded={expanded}
        onClick={() => setExpanded(expanded => !expanded)}
      />

      <Navbar.Collapse id="navbarNav">
        <Nav className="ml-auto">
          <NavItem to="/" exact={true} text="Home" onClick={closeNav} />
          <NavItem to="/sponsors" text="Sponsor Us" onClick={closeNav} />

          {/* <PrivateNavItem to="/schedule" text="Schedule" onClick={closeNav} /> */}
          <NavItem to="/schedule" text="Schedule" onClick={closeNav} />
          <NavItem
            to="/starter-packs"
            text="Starter Packs"
            onClick={closeNav}
          />
          {/* <PrivateNavItem to="/stage" text="Stage" onClick={closeNav} /> */}
          <NavItem to="/stage" text="Stage" onClick={closeNav} />
          <PrivateNavItem to="/dashboard" text="Dashboard" onClick={closeNav} />

          <Nav.Item
            className="hack-nav-item"
            onClick={() => {
              closeNav();
              logout();
            }}
          >
            <NavLink to={logButtonPath} className="btn btn-hack">
              {logButtonText}
            </NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const NavItem = ({ to, exact, text, onClick }) => (
  <Nav.Item className="hack-nav-item" onClick={onClick}>
    <NavLink
      to={to}
      exact={exact}
      activeClassName="selected"
      className="nav-link special-nav-animation"
    >
      {text}
    </NavLink>
  </Nav.Item>
);
