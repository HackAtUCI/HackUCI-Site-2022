import React, { useState, useEffect } from "react";
import SweetAlert from "sweetalert-react";

import useAuth from "../../../hooks/useAuth";
import useSettings from "../../../hooks/useSettings";
import useUser from "../../../hooks/useUser";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import * as session from "../../../utils/session";
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
  const [showStatus, setshowStatus] = useState({
    showConfirm: false,
    showError: false
  });
  const { updateConfirmation, getCurrentUser } = useUser();
  const { isLoggedIn } = useAuth();
  const { getPublicSettings } = useSettings();

  useEffect(() => {
    if (!isLoggedIn) {
      props.history.push("/login");
    }

    getCurrentUser()
      .then(response => {
        console.log(response);
        if (!response["data"]["status"]["admitted"]) {
          props.history.push("/dashboard");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  //Event handlers
  function handlePhoneInput(event) {
    event.target.value = event.target.value.replace(/[^0-9 +-]+/, "");
    setPhone(event.target.value.replace(/[^0-9 +-]+/, ""));
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
  function handleSubmit(e) {
    const confirmation = {
      dietaryRestrictions: dietaryRestrictions,
      phoneNumber: phone,
      shirtSize: shirtSize
    };

    if (!confirmation.phoneNumber.match(/^[0-9 +-]+$/)) {
      return setshowStatus({
        showError: true,
        showConfirm: false
      });
    }

    updateConfirmation(session.getSessionUserId(), confirmation)
      .then(data => {
        return setshowStatus({
          showError: false,
          showConfirm: true
        });
      })
      .then(data => {
        setTimeout(() => {
          setshowStatus({
            showError: false,
            showConfirm: false
          });
          props.history.push("/dashboard");
        }, 1500);
      })
      .catch(error => {
        setshowStatus({
          showError: true,
          showConfirm: false
        });
      });
  }

  const { showConfirm, showError } = showStatus;
  //TODO: Rendering method
  return (
    <div>
      <div className="hack-form-container">
        <h1 className="confirmation-header">CONFIRMATION</h1>
        <Form className="hack-form">
          <h2 className="confirmation-header">BASIC DETAILS</h2>
          <div className="form-container">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="text-container">
                <label className="text">
                  What's your phone number? We need this in case we need to get
                  a hold of you!
                  <span className="field-required">*</span>
                </label>
              </Form.Label>
              <Form.Control
                onChange={handlePhoneInput}
                type="tel"
                placeholder="(111) 222 - 3333"
                pattern="[0-9-+ ]+"
              />
            </Form.Group>
            {/*<Form.Group>*/}
            {/*  <Form.Label className="text-container">*/}
            {/*    <label className="text">Dietary Restrictions</label>*/}
            {/*  </Form.Label>*/}
            {/*  <div className="diet-restrictions">*/}
            {/*    {dietaryRestrictionsOptions.map(item => (*/}
            {/*      <Form.Check*/}
            {/*        inline*/}
            {/*        name={item}*/}
            {/*        label={item}*/}
            {/*        onChange={handleCheckboxChange}*/}
            {/*      />*/}
            {/*    ))}*/}
            {/*  </div>*/}
            {/*</Form.Group>*/}
            {/*<Form.Group controlId="exampleForm.ControlSelect1">*/}
            {/*  <Form.Label className="text-container">*/}
            {/*    <label className="text">*/}
            {/*      Shirt Size? Let's get you some swag!*/}
            {/*    </label>*/}
            {/*    <span className="field-required">*</span>*/}
            {/*  </Form.Label>*/}
            {/*  <Form.Control*/}
            {/*    as="select"*/}
            {/*    value={shirtSize}*/}
            {/*    onChange={handleSelectChange}*/}
            {/*  >*/}
            {/*    {shirtSizesOptions.map(shirtOption => (*/}
            {/*      <option label={shirtOption} value={shirtOption}>*/}
            {/*        {shirtOption}*/}
            {/*      </option>*/}
            {/*    ))}*/}
            {/*  </Form.Control>*/}
            {/*</Form.Group>*/}
          </div>
          <h2 className="confirmation-header">LEGAL</h2>
          <div className="legal-text-container">
            <h5 className="confirmation-subheader">Liability Waiver</h5>
            <Form.Group>
              <Form.Label>
                For legal reasons, our university asks that you read and accept
                the terms of their liability waiver. We also ask that you read
                and accept the terms of our event waiver.
              </Form.Label>
              <label>
                <b>
                  You will be sent a follow up email with links to sign the
                  waivers,
                </b>{" "}
                and you have until the day of the event, February 21, 2020 to
                sign both waivers.
              </label>
            </Form.Group>
            <h5 className="confirmation-subheader">Code of Conduct</h5>
            <Form.Group>
              <label>
                It is extremely important to us that attendees follow a set of
                guidelines to make the event fun for everyone involved. Please
                read through ad make sure you understand what will be expected
                of you.
              </label>
              <label>
                By clicking submit below, I affirm that I have read and will
                abide by the <a href="">Code of Conduct</a>
              </label>
              <div className="text-center submit-button-container">
                <Button
                  className="submit-button"
                  onClick={handleSubmit}
                  variant="primary"
                >
                  Submit
                </Button>
              </div>
            </Form.Group>
          </div>
        </Form>
      </div>
      <SweetAlert
        show={showConfirm}
        title="Woo!"
        type="success"
        text=" You're confirmed!!"
        showConfirmButton={false}
      />
      <SweetAlert
        show={showError}
        title="Uh oh!"
        type="error"
        text="Something went wrong"
      />
    </div>
  );
}
