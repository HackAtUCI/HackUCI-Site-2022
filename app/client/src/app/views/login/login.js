import React from "react";
import { Redirect, Link } from "react-router-dom";

import useForm from "hooks/useForm";
import useAuth from "hooks/useAuth";

import { validation } from "utils/validation.js";
import errorMessages from "globals/errors";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./login.scss";
// import * as session from "utils/session";

export default function Login(props) {
  const { values, errors, setErrors, handleChange, handleSubmit } = useForm(
    login,
    validation.processLoginForm
  );
  const { isLoggedIn, user, loginWithPassword } = useAuth();

  if (isLoggedIn && user) {
    return <Redirect to="/dashboard" />;
  }

  function login() {
    loginWithPassword(values.email, values.password)
      .then(response => {
        // successful login
        props.history.push("/dashboard");
        window.location.reload(false);
      })
      .catch(err => {
        const responseErrMsg = err.response
          ? err.response.data.message
          : err.message;
        if (responseErrMsg === "That's not the right password.") {
          setErrors({ networkError: responseErrMsg });
        } else {
          setErrors({ networkError: errorMessages.default });
        }
      });
  }

  const referrer = props.location.state && props.location.state.referrer;
  const referrerError = referrer ? (
    <div className="alert alert-danger" role="alert">
      You must be logged in to view that page!
    </div>
  ) : null;

  return (
    <div className="hack-form-container hack-login-info-pages">
      {referrerError}
      {Object.keys(errors).length !== 0 && (
        <div className="alert alert-danger" role="alert">
          {errors.email || errors.password || errors.networkError}
        </div>
      )}
      <Form className="hack-form" onSubmit={handleSubmit}>
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
        <Button type="submit" variant="hack">
          Login
        </Button>{" "}
        {/*<hr />*/}
        {/*<Link to="/apply">*/}
        {/*  <Button>Apply</Button>*/}
        {/*</Link>*/}
      </Form>
    </div>
  );
}
