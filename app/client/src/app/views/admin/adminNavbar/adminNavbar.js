import React, { useState } from "react";

import useAuth from "hooks/useAuth";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { NavLink, useLocation } from "react-router-dom";
import { HackLogo } from "app/components";
import { classNames } from "utils/helpers";

import "./adminNavbar.scss";

export default function AdminNavbar() {
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

  return (
    <div>
      <h1>God Mode</h1>
      <Navbar className="hack-navbar-admin" expand="lg" expanded={expanded}>
        <Navbar.Toggle
          className="hack-nav-hamburger"
          aria-controls="navbarNav"
          aria-expanded={expanded}
          onClick={() => setExpanded(expanded => !expanded)}
        />

        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto w-100 nav-fill">
            <NavItem to="/admin/stats" text="Stats" onClick={closeNav} />
            <NavItem to="/admin/users" text="Users" onClick={closeNav} />
            <NavItem to="/admin/settings" text="Settings" onClick={closeNav} />
            <NavItem to="/admin/queue" text="Queue" onClick={closeNav} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
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
