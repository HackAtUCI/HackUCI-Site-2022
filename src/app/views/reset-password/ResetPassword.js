import React, { useState, useEffect } from "react";

import AuthService from "../../../services/AuthService";
import useForm from "../../../hooks/useForm";
import { validation } from "../../../utils/validation";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../../assets/scss/validation.scss";

export default function ResetPassword(props) {
  const [token, setToken] = useState("");
  const { values, errors, setErrors, handleChange, handleSubmit } = useForm(
    resetPasswordCall,
    validation.processResetPasswordForm
  );

  useEffect(() => {
    setToken(props.match.params.token);
  }, [props.match.params.token]);

  function resetPasswordCall() {
    AuthService.resetPassword({
      token: token,
      password: values.password
    })
      .then(response => {
        // TODO: Implement Modal informing user that they successfully reset password
        // Sets the errors so that there is no more network error
        this.props.history.push("/login");
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
          <p class="red">{errors.networkError}</p>
          <p class="red">{errors.passwordEquality}</p>
        </div>
        <Button onClick={handleSubmit} variant="primary">
          Reset Password
        </Button>
      </Form>
    </div>
  );
}
