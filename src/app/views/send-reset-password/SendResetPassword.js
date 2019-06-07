import React, { useState } from "react";

import AuthService from "../../../services/AuthService";
import { validation } from "../../../utils/validation.js"

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SendResetPassword(props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleEmailInput(event){
    setEmail(event.target.value);
  }

  function errorValidation(){
    const error1 = validation.required(email)
    if(error1){
      setError(error1)
    }
    else{
      return true;
    }
    return false
  }

  function handleSubmit() {
    if(errorValidation()){
      AuthService.sendResetEmail({
        email:email
      })
    }
  }

  return(
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
        <p> {error} </p>
        <Button onClick={handleSubmit} variant="primary">
          Send Reset Email
        </Button>
      </Form>
    </div>
  );
}
