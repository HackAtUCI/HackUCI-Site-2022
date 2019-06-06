import React, { useState, useContext } from "react";

import AuthService from "../../../services/AuthService";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [mode, setMode] = useState("login");

  function handleEmailInput(event){
    setEmail(event.target.value);
  }

  function handleSubmit() {
    AuthService.sendResetEmail({
      email:email
    })
  }

  function changeMode(){
    if(mode == "login"){
      setMode("reset")
    }
    else if (mode == "reset"){
      setMode("login")
    }
  }

  return (
    <div>
      {mode=="login" ? <div> Login </div> : 
        (
          <div>
            <Form>
              <Form.Group controlId="loginResetPassword.ControlInput1">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  onChange={handleEmailInput}
                  type="email"
                  placeholder="foo@bar.edu"
                />
              </Form.Group>
              <Button onClick={handleSubmit} variant="primary">
                Send Reset Email
              </Button>
            </Form>
            <Button onClick={changeMode}>
              Login
            </Button>
          </div>
        )
      }
    </div>
  );
}
