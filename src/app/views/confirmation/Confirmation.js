import React, { useState, useContext } from "react";

import AuthService from "../../../services/AuthService";
import UserService from "../../../services/UserService";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./confirmation.scss";

//TODO: ADD VALIDATION METHODS FOR EACH FIELD
export default function Confirmation(props) {
  //Use effect to get data from API call)

  //Constants for the input fields and selectorsw
  const dietaryRestrictionsOptions = [
    "Vegetarian",
    "Vegan",
    "Halal",
    "Kosher",
    "Nut Allergy",
    "Lactose Intolerance"
  ];

  const shirtSizesOptions = ["XS", "S", "M", "L", "XL"];

  //State variables
  const [phone, setPhone] = useState("");
  const [shirtSize, setShirtSize] = useState(shirtSizesOptions[2]);
  const [dietaryRestrictions, setDietaryRestrictions] = useState([]);

  //Event handlers
  function handlePhoneInput(event) {
    setPhone(event.target.value);
  }

  function handleSelectChange(event) {
    //TODO: Change logic so it handles the exact name of the select
    setShirtSize(event.target.value);
  }

  function handleCheckboxChange(event) {
    var newDietaryRestrictions = dietaryRestrictions;
    const target = event.target;
    if (!target.checked) {
      newDietaryRestrictions = newDietaryRestrictions.filter(
        item => target.name !== item
      );
    } else {
      newDietaryRestrictions = [...dietaryRestrictions, target.name];
    }
    setDietaryRestrictions(newDietaryRestrictions);
  }

  //TODO: Add actual request to backend service
  function handleSubmit() {
    console.log(phone);
    console.log(shirtSize);
    console.log(dietaryRestrictions);
  }

  //TODO: Rendering method
  return (
    <div className="confirmation-container">
      <div className="confirmation-content">
        <h1 className="confirmation-header">CONFIRMATION</h1>
        <h2 className="confirmation-subheader">BASIC DETAILS</h2>
        <Form>
          <div className="form-container">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="text">
                <p className="text">What's your phone number? (required)</p>
                <br />
                <p className="text">
                  We need this in case we need to get ahold of you!
                </p>
              </Form.Label>
              <Form.Control
                onChange={handlePhoneInput}
                type="tel"
                placeholder="(626) 111 - 2222"
              />
            </Form.Group>
            <Form.Label className="text">Dietary Restrictions</Form.Label>
            <br />
            <div className="diet-restrictions-container">
              <div className="diet-restrictions">
                {dietaryRestrictionsOptions.map(item => (
                  <Form.Check
                    inline
                    name={item}
                    label={item}
                    onChange={handleCheckboxChange}
                  />
                ))}
              </div>
            </div>
            <br />
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label className="text">
                <p className="text">Shirt Size (required)</p>
                <br />
                <p className="text">Let's get you some swag!</p>
              </Form.Label>
              <Form.Control
                as="select"
                value={shirtSize}
                onChange={handleSelectChange}
              >
                {shirtSizesOptions.map(shirtOption => (
                  <option label={shirtOption} value={shirtOption}>
                    {shirtOption}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </div>
          <h2 className="confirmation-subheader">LEGAL</h2>
          <div className="text">[insert legal information here]</div>
          <Button
            className="submit-button"
            onClick={handleSubmit}
            variant="primary"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
