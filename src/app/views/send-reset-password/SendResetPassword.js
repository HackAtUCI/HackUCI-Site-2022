import React, { useState } from "react";

import AuthService from "../../../services/AuthService";
import useForm from "../../../hooks/useForm";
import { validation } from "../../../utils/validation.js";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../../assets/scss/validation.scss";

export default function SendResetPassword(props) {
  const { values, errors, setErrors, handleChange, handleSubmit } = useForm(
    sendResetEmail,
    validation.processSendResetEmailForm
  );

  function sendResetEmail() {
    AuthService.sendResetEmail({
      email: values.email
    })
      .then(response => {
        // TODO: Implement Modal informing user that the email has sent
      })
      .catch(err => {
        //NOTE: do not mutate the "errors" object since React will not know the state has changed.
        //NOTE: instead, export the setErrors function and handle error setting using the hook setErrors
        //TODO: instead of telling the user that there is a network error, just inform them through a constant string that the service is unavailable currently
        setErrors({ networkError: err.message });
      });
  }

  return (
    <div>
      <Form>
        <Form.Group controlId="loginResetPassword.ControlInput1">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            name="email"
            onChange={handleChange}
            class={"form-control" + (errors.email ? " error" : "")}
            value={values.email || ""}
            type="email"
            placeholder="foo@bar.edu"
          />
          <div>
            <p class="red">{errors.email}</p>
          </div>
        </Form.Group>
        <Button onClick={handleSubmit} variant="primary">
          Send Reset Email
        </Button>
        <div>
          <p class="red">{errors.networkError}</p>
        </div>
      </Form>
    </div>
  );
}
