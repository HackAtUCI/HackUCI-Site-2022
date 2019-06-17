import React, { useState } from "react";

import AuthService from "../../../services/AuthService";
import useForm from "../../../hooks/useForm"
import { validation } from "../../../utils/validation.js";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SendResetPassword(props) {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(sendResetEmail, validation.processSendResetEmailForm);

  function sendResetEmail() {
    AuthService.sendResetEmail({
      email: values.email
    })
      .then(function(response) {
        // TODO: Implement Modal informing user that the email has sent
      })
      .catch(function(err) {
        // TODO: Implement Modal telling user that system failed
        // This error only fires off if the form is valid
        errors.networkError = err.message
      });
  }

  return(
    <div>
      <Form>
        <Form.Group controlId="loginResetPassword.ControlInput1">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            name="email"
            onChange={handleChange}
            value={values.email || ''}
            type="email"
            placeholder="foo@bar.edu"
          />
          {errors.email}
        </Form.Group>
        <Button onClick={handleSubmit} variant="primary">
          Send Reset Email
        </Button>
      </Form>
    </div>
  );
}
