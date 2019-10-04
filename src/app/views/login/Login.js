import React, { useEffect } from "react";

import useForm from "../../../hooks/useForm";
import useAuth from "../../../hooks/useAuth";
import { validation } from "../../../utils/validation.js";
import { Link, Route } from "react-router-dom";

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
  }, []);

  function login() {
    loginWithPassword(values.email, values.password)
      .then(response => {
        // successful login
        console.log(response);
        props.history.push("/dashboard");
      })
      .catch(err => {
        // login failed
        // Checks to see if there is an error response from the server.
        // If not, it sets the error to the default error message, which is most likely the network error
        const errMsg = err.response ? err.response.data.message : err.message;
        setErrors({ networkError: errMsg });
      });
  }

  return (
    <div>
      <Form>
        <Form.Group controlId="email.ControlInput1">
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
        <Form.Group controlId="password.ControlInput2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            onChange={handleChange}
            class={"form-control" + (errors.password ? " error" : "")}
            value={values.password || ""}
            type="password"
            placeholder="Password"
          />
          <div>
            <p class="red">{errors.password}</p>
          </div>
        </Form.Group>
        <div>
          <p class="red">{errors.networkError}</p>
        </div>
        <Button onClick={handleSubmit}>Login</Button>
        <Link to="/application">
          <Button disabled>Apply</Button>
        </Link>
        <Link to="/send-reset-password">
          <p class="forgot-password">Forgot Password?</p>
        </Link>
      </Form>
    </div>
  );
}
