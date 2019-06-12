import React, { useState, useEffect } from "react";

import AuthService from "../../../services/AuthService";
import { validation } from "../../../utils/validation";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ResetPassword(props) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(props.match.params.token)
  }, [props.match.params.token]);

  function handlePasswordInput(event){
    setPassword(event.target.value);
  }

  function handleConfirmPasswordInput(event){
    setConfirmPassword(event.target.value);
  }

  function isFormValid(){
    const isPasswordValid = validation.hasValue(password)
    const isConfirmValid = validation.hasValue(confirmPassword)
    const isNotMatchingValid = validation.isStringEqual(password, confirmPassword)
    const passwordMessage = "Password Field Missing"
    const confirmMissingMessage = "Confirm Field Missing"
    const notMatchingMessage = "Fields not matching"

    setErrors(errors => 
      validation.processError(errors, isPasswordValid, passwordMessage)
    )
    setErrors(errors => 
      validation.processError(errors, isConfirmValid, confirmMissingMessage)
    )
    setErrors(errors => 
      validation.processError(errors, isNotMatchingValid, notMatchingMessage)
    )
  }

  function handleSubmit() {
    if(isFormValid()){
      AuthService.resetPassword({
        token:token,
        password:password
      }).then(function (response) {
        // TODO: Implement Modal informing user that they successfully reset password
        this.props.history.push('/login')
      }).catch(function (err) {
        setErrors(err.message);
      })
    }
  }

  return (
    <div>
      <Form>
        <Form.Group controlId="resetPassword.ControlInput1">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            onChange={handlePasswordInput}
            type="password"
            placeholder="Password (at least 6 characters)"
          />
        </Form.Group>
        <Form.Group controlId="resetPassword.ControlInput2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
              onChange={handleConfirmPasswordInput}
              type="password"
              placeholder="Just making sure you got it!"
            />
        </Form.Group>
        {Array.from(errors).map((value, index) => 
          <p key={"error" + index}>{value}</p>
        )}
        <Button onClick={handleSubmit} variant="primary">
          Reset Password
        </Button>
      </Form>
    </div>
  );
}
