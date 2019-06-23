import React, { useState } from "react";

import AuthService from "../../../services/AuthService";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailInput(event) {
    setEmail(event.target.value);
  }

  function handlePasswordInput(event) {
    setPassword(event.target.value);
  }

  function handleSubmit() {
    AuthService.loginWithPassword(email, password)
      .then(response => {
        console.log("successful");
      })
      .catch(err => {
        console.log("error");
      });
  }

  return (
    <div>
      <Form>
        <Form.Group controlId="email.ControlInput1">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            onChange={handleEmailInput}
            type="email"
            placeholder="foo@bar.edu"
          />
        </Form.Group>
        <Form.Group controlId="password.ControlInput2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handlePasswordInput}
            type="password"
            placeholder="password"
          />
        </Form.Group>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
}
