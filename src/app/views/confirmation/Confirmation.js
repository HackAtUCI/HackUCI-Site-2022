import React, { useState, useContext } from "react";

import AuthService from "../../../services/AuthService";
import UserService from "../../../services/UserService";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            onChange={handlePhoneInput}
            type="tel"
            placeholder="(626) 111 - 2222"
          />
        </Form.Group>
        <div className="mb-3">
          {dietaryRestrictionsOptions.map(item => (
            <Form.Check
              inline
              name={item}
              label={item}
              onChange={handleCheckboxChange}
            />
          ))}
        </div>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Example select</Form.Label>
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
        <Button onClick={handleSubmit} variant="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
}
