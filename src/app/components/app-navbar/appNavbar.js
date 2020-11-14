import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { Link } from "react-router-dom";

import "./appNavbar.scss";

export default function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          <Link to="/">Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/login">Login</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/sponsors">Sponsor</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/application">Application</Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
