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
              <Form.Label className="text-container">
                <p className="text">What's your phone number? (required)</p>
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
            <Form.Label className="text-container">
              <p className="text">Dietary Restrictions</p>
            </Form.Label>
            <br />
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
            <br />
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label className="text-container">
                <p className="text">Shirt Size (required)</p>
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
          <div className="legal-text-container">
            <p>Liability Waiver</p>
            <p>
              For legal reasons, our university asks that you read and accept
              the terms of their liability waiver. We also ask that you read and
              accept the terms of our event waiver.
            </p>
            <p>
              <b>
                You will be sent a follow up email with links to sign the
                waivers,
              </b>{" "}
              and you have until the day of the event, February 21, 2020 to sign
              both waivers.
            </p>
            <p>Code of Conduct</p>
            <p>
              It is extremely important to us that attendees follow a set of
              guidelines to make the event fun for everyone involved. Please
              read through ad make sure you understand what will be expected of
              you.
            </p>
            <p>
              By clicking submit below, I affirm that I have read and will abide
              by the Code of Conduct
            </p>
          </div>
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
