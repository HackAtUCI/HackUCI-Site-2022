import React, { useState, useEffect } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import SweetAlert from "sweetalert-react";

import useForm from "../../../hooks/useForm";
import useAuth from "../../../hooks/useAuth";
import { validation } from "../../../utils/validation";
import errorMessages from "../../../globals/errors";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import "../../../assets/scss/validation.scss";
import "../../../../node_modules/sweetalert/dist/sweetalert.css";

export default function ResetPassword(props) {
  const [token, setToken] = useState("");
  const { values, errors, setErrors, handleChange, handleSubmit } = useForm(
    resetPasswordCall,
    validation.processResetPasswordForm
  );
  const [showStatus, setshowStatus] = useState({
    showLoading: false,
    showConfirm: false,
    showError: false
  });
  const { isLoggedIn, resetPassword } = useAuth();

  useEffect(() => {
    setToken(props.match.params.token);
  }, [props.match.params.token]);

  function resetPasswordCall() {
    setshowStatus({
      showLoading: true,
      showConfirm: false
    });
    resetPassword(token, values.password)
      .then(response => {
        return setshowStatus({
          showLoading: false,
          showConfirm: true
        });
      })
      .then(res => {
        setTimeout(() => {
          setshowStatus({
            showLoading: false,
            showConfirm: false
          });
          props.history.push("/login");
        }, 1500);
      })
      .catch(err => {
        setshowStatus({
          showError: true
        });
      });
  }

  const { showLoading, showConfirm, showError } = showStatus;
  return (
    <div>
      <Form>
        <Form.Group controlId="resetPassword.ControlInput1">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            name="password"
            class={
              "form-control" +
              (errors.passwordEquality || errors.password ? " error" : "")
            }
            onChange={handleChange}
            value={values.password || ""}
            type="password"
            placeholder="Password (at least 6 characters)"
          />
          <div>
            <p class="red">{errors.password}</p>
          </div>
        </Form.Group>
        <Form.Group controlId="resetPassword.ControlInput2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            name="confirmPassword"
            class={
              "form-control" +
              (errors.passwordEquality || errors.confirmPassword
                ? " error"
                : "")
            }
            onChange={handleChange}
            value={values.confirmPassword || ""}
            type="password"
            placeholder="Just making sure you got it!"
          />
          <div>
            <p class="red">{errors.confirmPassword}</p>
          </div>
        </Form.Group>
        <div>
          <p class="red">{errors.passwordEquality}</p>
        </div>
        <Button onClick={handleSubmit} variant="primary">
          Reset Password
        </Button>
      </Form>
      <SweetAlert
        show={showConfirm}
        title="Awesome!"
        type="success"
        text="Your email has been reset."
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
            title="Changing Password"
            html
            text={renderToStaticMarkup(<Spinner animation="grow" />)}
            showConfirmButton={false}
          />
        </div>
      )}
    </div>
  );
}
