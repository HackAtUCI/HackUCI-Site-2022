import React, { useState, useContext } from "react";

import AuthService from "../../../services/AuthService";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ResetPassword(props) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  let token = ""

  function componentDidMount(){
    token = this.props.navigation.state.params.token
  }

  function handlePasswordInput(event){
    setPassword(event.target.value);
  }

  function handleConfirmPasswordInput(event){
    setConfirmPassword(event.target.value);
  }

  function handleSubmit() {
    if(password == confirmPassword){
      AuthService.resetPassword({
        token:token,
        password:password
      }).then(function (response) {
        this.props.history.push('/login')
      }).catch(function (e) {
        setError(e.message);
      })
    }
    else{
      error = "Passwords don't match!"
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
