import React, { useState } from "react";

import AuthService from "../../../services/AuthService";
import { validation } from "../../../utils/validation.js"

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SendResetPassword(props) {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);

  function handleEmailInput(event){
    setEmail(event.target.value);
  }

  function isFormValid(){
    const emailValid = validation.hasValue(email)
    const emailMessage = "Email Field Missing"

    setErrors(errors => 
      validation.processError(errors, emailValid, emailMessage)
    )
  }

  function handleSubmit() {
    if(isFormValid()){
      AuthService.sendResetEmail({
        email:email
      }).then(function (response) {
        // TODO: Implement Modal informing user that they successfully reset password
      }).catch(function (err) {
        // TODO: Implement Modal telling user that system failed
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
        {Array.from(errors).map((value, index) => 
          <p key={"error" + index}>{value}</p>
        )}
        <Button onClick={handleSubmit} variant="primary">
          Send Reset Email
        </Button>
      </Form>
    </div>
  );
}
