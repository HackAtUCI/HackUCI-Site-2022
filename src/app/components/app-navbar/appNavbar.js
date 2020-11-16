import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { Link } from "react-router-dom";

import "./appNavbar.scss";

export default function AppNavbar() {
  return (
    <Navbar className="navbar">
      <Navbar.Brand href="#home">HackUCI</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link>
          <Link to="/">Schedule</Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
