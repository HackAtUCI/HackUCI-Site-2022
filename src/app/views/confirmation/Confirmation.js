import React, { useState, useEffect } from "react";
import SweetAlert from "sweetalert-react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import useUser from "../../../hooks/useUser";
import useForm from "../../../hooks/useForm";
import useAuth from "../../../hooks/useAuth";
import useConfirmationUser from "../../../hooks/UseConfirmationUser";
import useSettings from "../../../hooks/useSettings";
import { validation } from "../../../utils/validation";
import errorMessages from "../../../globals/errors";
import * as session from "../../../utils/session";

import "./confirmation.scss";

export default function Confirmation(props) {
  const { values, errors, handleChange, handleSubmit, handleChecked } = useForm(
    confirmRequest,
    validation.processConfirmationForm
  );
  const { getCurrentUser, updateConfirmation } = useUser();
  const { confirmationUser, validateConfirmationUser } = useConfirmationUser();
  const { isLoggedIn } = useAuth();
  const { getPublicSettings } = useSettings();
  const [showStatus, setshowStatus] = useState({
    showConfirm: false,
    showError: false,
    errorMessage: "",
    showErrorConfirm: true
  });
  const [dietaryRestrictions, setDietaryRestrictions] = useState([]);

  //Constants for the input fields and selectors
  const dietaryRestrictionsOptions = [
    "Vegetarian",
    "Vegan",
    "Halal",
    "Kosher",
    "Nut Allergy",
    "Lactose Intolerance"
  ];

  const shirtSizesOptions = {
    "": "Shirt Size",
    XS: "Unisex X-Small",
    S: "Unisex Small",
    M: "Unisex Medium",
    L: "Unisex Large",
    XL: "Unisex X-Large"
  };

  useEffect(() => {
    if (!isLoggedIn) {
      props.history.push("/login");
    }

    getCurrentUser()
      .then(response => {
        getPublicSettings()
          .then(settingData => {
            validateConfirmationUser(response.data, settingData.data);
            const confirmationData = response.data.confirmation;
            if (confirmationData) {
              values.phoneNumber = confirmationData.phoneNumber;
              values.shirtSize = confirmationData.shirtSize;
              setDietaryRestrictions(confirmationData.dietaryRestrictions);
            }
          })
          .catch(err => {
            setshowStatus({
              showError: true,
              showErrorConfirm: false,
              errorMessage: err
            });
            setTimeout(() => {
              setshowStatus({
                showError: false,
                showErrorConfirm: true
              });
              props.history.push("/dashboard");
            }, 1500);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }, [
    getCurrentUser,
    getPublicSettings,
    isLoggedIn,
    props.history,
    validateConfirmationUser,
    values.phoneNumber,
    values.shirtSize
  ]);

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

  function confirmRequest() {
    updateConfirmation(session.getSessionUserId(), {
      phoneNumber: values.phoneNumber,
      shirtSize: values.shirtSize,
      dietaryRestrictions: dietaryRestrictions
    })
      .then(res => {
        return setshowStatus({
          showConfirm: true
        });
      })
      .then(res => {
        setTimeout(() => {
          setshowStatus({
            showConfirm: false
          });
          props.history.push("/dashboard");
        }, 1500);
      })
      .catch(err => {
        setshowStatus({
          showError: true,
          showErrorConfirm: true,
          errorMessage: errorMessages.default
        });
      });
  }

  const { showConfirm, showError, errorMessage, showErrorConfirm } = showStatus;
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
                name="phoneNumber"
                onChange={handleChange}
                class={"form-control" + (errors.phoneNumber ? " error" : "")}
                value={values.phoneNumber || ""}
                type="tel"
                placeholder="123-456-7890"
                disabled={!confirmationUser.editable}
              />
              <div>
                <p class="red">{errors.phoneNumber}</p>
              </div>
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
                  checkedg={dietaryRestrictions.indexOf(item) > -1}
                  disabled={!confirmationUser.editable}
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
                name="shirtSize"
                onChange={handleChange}
                as="select"
                class={"form-control" + (errors.shirtSize ? " error" : "")}
                value={values.shirtSize || ""}
                disabled={!confirmationUser.editable}
              >
                {Object.keys(shirtSizesOptions).map((shirtSizeValue, _) => (
                  <option value={shirtSizeValue} key={shirtSizeValue}>
                    {shirtSizesOptions[shirtSizeValue]}
                  </option>
                ))}
              </Form.Control>
              <div>
                <p class="red"> {errors.shirtSize} </p>
              </div>
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
            disabled={!confirmationUser.editable}
          >
            Submit
          </Button>
        </Form>
      </div>
      <SweetAlert
        show={showConfirm}
        title="Awesome!"
        type="success"
        text="Your application has been received."
        showConfirmButton={false}
      />
      <SweetAlert
        show={showError}
        title="Uh oh!"
        type="error"
        text={errorMessage}
        showConfirmButton={showErrorConfirm}
        onConfirm={() => {
          setshowStatus({
            showError: false
          });
        }}
      />
    </div>
  );
}
