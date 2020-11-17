import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";

import useForm from "../../../hooks/useForm";
import useAuth from "../../../hooks/useAuth";

import { validation } from "../../../utils/validation.js";
import errorMessages from "../../../globals/errors";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./login.scss";

export default function Login(props) {
  const { values, errors, setErrors, handleChange, handleSubmit } = useForm(
    login,
    validation.processLoginForm
  );
  const { isLoggedIn, user, loginWithPassword } = useAuth();

  useEffect(() => {
    if (isLoggedIn && user) {
      props.history.push("/dashboard");
    }
  }, [isLoggedIn, props.history, user]);

  function login() {
    loginWithPassword(values.email, values.password)
      .then(response => {
        // successful login
        props.history.push("/dashboard");
      })
      .catch(err => {
        const responseErrMsg = err.response
          ? err.response.data.message
          : err.message;
        if (responseErrMsg == "That's not the right password.") {
          setErrors({ networkError: responseErrMsg });
        } else {
          setErrors({ networkError: errorMessages.default });
        }
      });
  }

  return (
    <div className="hack-form-container hack-login-page">
      {Object.keys(errors).length !== 0 && (
        <div class="alert alert-danger" role="alert">
          {errors.email || errors.password || errors.networkError}
        </div>
      )}
      <Form className="hack-form">
        <Form.Group controlId="email.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            onChange={handleChange}
            class="form-control"
            value={values.email || ""}
            type="email"
            placeholder="foo@bar.edu"
          />
        </Form.Group>
        <Form.Group controlId="password.ControlInput2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            onChange={handleChange}
            class="form-control hack-form-input"
            value={values.password || ""}
            type="password"
            placeholder="Password"
          />
          <Link to="/send-reset-password">
            <p class="forgot-password">Forgot Password?</p>
          </Link>
        </Form.Group>
        <Button onClick={handleSubmit}>Login</Button> <hr />
        <Link to="/apply">
          <Button>Apply</Button>
        </Link>
      </Form>
    </div>
  );
}