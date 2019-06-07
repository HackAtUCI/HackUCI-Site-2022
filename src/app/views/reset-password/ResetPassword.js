import React, { useState, useEffect } from "react";

import AuthService from "../../../services/AuthService";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { validation } from "../../../utils/validation";

export default function ResetPassword(props) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
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

  function errorValidation(){
    const error1 = validation.required(password)
    const error2 = validation.required(confirmPassword)
    const error3 = validation.equal(password, confirmPassword)
    if(error1){
      setError(error1)
    }
    else if(error2){
      setError(error2)
    }
    else if(error3){
      setError(error3)
    }
    else{
      return true;
    }
    return false
  }

  function handleSubmit() {
    if(errorValidation()){
      AuthService.resetPassword({
        token:token,
        password:password
      }).then(function (response) {
        this.props.history.push('/login')
      }).catch(function (e) {
        setError(e.message);
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
        <p> {error} </p>
        <Button onClick={handleSubmit} variant="primary">
          Reset Password
        </Button>
      </Form>
    </div>
  );
}
