import React, { useState, useContext } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Confirmation(props) {
  const [phone, setPhone] = useState("");
  const [shirtSize, setShirtSize] = useState("medium");
  const [dietaryRestrictions, setDietaryRestrictions] = useState([]);

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
        item => target.name != item
      );
    } else {
      newDietaryRestrictions.push(target.name);
    }
    setDietaryRestrictions(newDietaryRestrictions);
  }

  function handleSubmit() {
    console.log(phone);
    console.log(shirtSize);
    console.log(dietaryRestrictions);
  }

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
          <Form.Check
            inline
            name="Vegetarian"
            label="Vegetarian"
            onChange={handleCheckboxChange}
          />
          <Form.Check
            inline
            name="Kosher"
            label="Kosher"
            onChange={handleCheckboxChange}
          />
        </div>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Example select</Form.Label>
          <Form.Control
            as="select"
            value={shirtSize}
            onChange={handleSelectChange}
          >
            <option value="x-small">Unisex X-Small</option>
            <option value="small">Unisex Small</option>
            <option value="medium">Unisex Medium</option>
            <option value="large">Unisex Large</option>
            <option value="x-large">Unisex X-Large</option>
          </Form.Control>
        </Form.Group>
        <Button onClick={handleSubmit} variant="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
}
