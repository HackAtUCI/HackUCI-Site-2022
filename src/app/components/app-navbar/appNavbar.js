import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { Link } from "react-router-dom";
import { HackLogo } from "app/components";

import "./appNavbar.scss";

export default function AppNavbar() {
  return (
    <Navbar className="navbar">
      <Navbar.Brand href="#home">
        <HackLogo style={{ top: "5px" }} />
      </Navbar.Brand>
      <Nav className="ml-auto">
        {/* <Nav.Link>
          <Link to="/">Schedule</Link>
        </Nav.Link> */}
      </Nav>
    </Navbar>
  );
}
