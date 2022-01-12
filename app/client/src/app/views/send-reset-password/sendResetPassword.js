import React, { useState, useEffect } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import SweetAlert from "sweetalert-react";

import useForm from "hooks/useForm";
import useAuth from "hooks/useAuth";

import { validation } from "utils/validation.js";
import errorMessages from "globals/errors";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import "sweetalert/dist/sweetalert.css";
import { Link } from "react-router-dom";

export default function SendResetPassword(props) {
  const { values, errors, setErrors, handleChange, handleSubmit } = useForm(
    sendResetEmailCall,
    validation.processSendResetEmailForm
  );

  const [showStatus, setshowStatus] = useState({
    showLoading: false,
    showConfirm: false,
    showError: false
  });

  const { isLoggedIn, sendResetEmail } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      props.history.push("/dashboard");
    }
  }, [isLoggedIn, props.history]);

  function sendResetEmailCall() {
    setshowStatus({
      showLoading: true,
      showConfirm: false
    });
    sendResetEmail(values.email)
      .then(response => {
        setshowStatus({
          showLoading: false,
          showConfirm: true
        });
      })
      .catch(err => {
        setshowStatus({
          showError: true
        });
      });
  }

  const { showLoading, showConfirm, showError } = showStatus;
  return (
    <div className="hack-form-container hack-login-info-pages">
      <Form onSubmit={handleSubmit} className="hack-form">
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
        <Button onClick={handleSubmit} variant="hack">
          Send Reset Email
        </Button>{" "}
        <hr />
        <Link to="/login">
          <Button>Login or Apply</Button>
        </Link>
      </Form>
      <SweetAlert
        show={showConfirm}
        title="Awesome!"
        type="success"
        text="Your reset email has been sent."
        showConfirmButton={true}
        onConfirm={() => {
          setshowStatus({
            showConfirm: false
          });
        }}
      />
      <SweetAlert
        show={showError}
        title="Uh oh!"
        type="error"
        text={errorMessages.default}
        onConfirm={() => {
          setshowStatus({
            showError: false
          });
        }}
      />
      {showLoading && (
        <div>
          <SweetAlert
            show={true}
            title="Sending"
            html
            text={renderToStaticMarkup(<Spinner animation="grow" />)}
            showConfirmButton={false}
          />
        </div>
      )}
    </div>
  );
}
