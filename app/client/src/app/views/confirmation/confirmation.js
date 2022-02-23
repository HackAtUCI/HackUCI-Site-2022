import React, { useState, useEffect } from "react";
import SweetAlert from "sweetalert-react";

import useAuth from "hooks/useAuth";
import useUser from "hooks/useUser";
import useForm from "hooks/useForm";

import { validation } from "utils/validation";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import * as session from "utils/session";
import "./confirmation.scss";

//TODO: ADD VALIDATION METHODS FOR EACH FIELD
export default function Confirmation(props) {
  //Use effect to get data from API call)

  //Constants for the input fields and selectors

  const dietaryRestrictionsOptions = [
    "I eat anything, including the following (chicken, beef, pork)",
    "I eat meat, but mostly chicken",
    "I am vegetarian",
    "I am vegan"
  ];

  const shirtSizesOptions = ["XS", "S", "M", "L", "XL"];

  //State variables
  const { values, errors, handleChange, handleSubmit, handleChecked } = useForm(
    sendConfirmation,
    validation.processConfirmationForm
  );

  const [showStatus, setshowStatus] = useState({
    showConfirm: false,
    showError: false
  });
  const { updateConfirmation, getCurrentUser } = useUser();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    // if (!isLoggedIn) {
    //   props.history.push("/login");
    // }

    getCurrentUser()
      .then(response => {
        if (!response["data"]["status"]["admitted"]) {
          props.history.push("/dashboard");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [isLoggedIn, props.history]);

  //TODO: Add actual request to backend service
  function sendConfirmation(e) {
    const {
      inPerson,
      dietaryConcerns,
      shirt,
      phone,
      dietaryRestrictions
    } = values;

    const confirmation = {
      dietaryRestrictions: dietaryRestrictions || "",
      phoneNumber: phone,
      shirtSize: shirt || "",
      dietaryConcerns: dietaryConcerns,
      inPerson: inPerson ? (inPerson == "No" ? false : true) : false
    };

    if (
      !confirmation.phoneNumber ||
      !confirmation.phoneNumber.match(
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
      )
    ) {
      return setshowStatus({
        showError: true,
        showConfirm: false
      });
    }

    if (!inPerson) {
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
        console.log(error);
        props.history.push("/dashboard");

        // setshowStatus({
        //   showError: true,
        //   showConfirm: false,
        // });
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
                onChange={handleChange}
                name="phone"
                type="tel"
                value={values.phone}
                placeholder="(111) 222 - 3333"
                pattern="[0-9-+ ]+"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="text-container">
                <label className="text">Dietary Restrictions</label>
              </Form.Label>
              <Form.Control
                name="dietaryRestrictions"
                as="select"
                value={values.dietaryRestrictions || ""}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Dietary Restrictions
                </option>
                {dietaryRestrictionsOptions.map(option => (
                  <option label={option} value={option}>
                    {option}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <label className="text">
                  Dietary Concerns? Please describe any other dietary concerns
                  that we should know about. This includes allergies,
                  restrictions, etc.
                </label>
              </Form.Label>
              <Form.Control
                value={values.dietaryConcerns}
                onChange={handleChange}
                name="dietaryConcerns"
                type="text"
                placeholder="i.e. Nut Allergy"
              />
            </Form.Group>
            {/*<Form.Group controlId="exampleForm.ControlSelect1">*/}
            {/*  <Form.Label className="text-container">*/}
            {/*    <label className="text">*/}
            {/*      Shirt Size? Let's get you some swag!*/}
            {/*    </label>*/}
            {/*    <span className="field-required">*</span>*/}
            {/*  </Form.Label>*/}
            {/*  <Form.Control*/}
            {/*    as="select"*/}
            {/*    value={values.shirtSize || ""}*/}
            {/*    onChange={handleChange}*/}
            {/*    name="shirt"*/}
            {/*  >*/}
            {/*    <option value="" disabled>*/}
            {/*      Shirt Sizes*/}
            {/*    </option>*/}
            {/*    {shirtSizesOptions.map(shirtOption => (*/}
            {/*      <option*/}
            {/*        label={shirtOption}*/}
            {/*        value={shirtOption}*/}
            {/*        key={shirtOption}*/}
            {/*      >*/}
            {/*        {shirtOption}*/}
            {/*      </option>*/}
            {/*    ))}*/}
            {/*  </Form.Control>*/}
            {/*</Form.Group>*/}
          </div>
          <h3 className="confirmation-header">
            Interested in attending in person?
            <span className="field-required">*</span>
          </h3>
          <Form.Group>
            <Form.Label>
              Are you interested in attending in person? You must be a UCI
              student with a valid UCI ID and be able to provide a negative
              COVID test taken within the last 72 hours. Reminder that we will
              have limited slots which will be filled up lottery style.
            </Form.Label>
            <Form.Control
              name="inPerson"
              as="select"
              value={values.inPerson || ""}
              onChange={handleChange}
            >
              <option value="" disabled>
                In Person?
              </option>
              {["No", "Yes"].map(option => (
                <option label={option} value={option}>
                  {option}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <h2 className="confirmation-header">LEGAL</h2>
          <div className="legal-text-container">
            <h5 className="confirmation-subheader">Liability Waiver</h5>
            <Form.Group>
              <Form.Label>
                For legal reasons, we ask that you read and accept the terms of
                our event waiver.
              </Form.Label>
              <label>
                <b>
                  You will be sent a follow up email with links and be presented
                  with a button in the dashboard to sign the waiver.
                </b>
                &nbsp; You have until the end of the day, Friday, February 25th,
                2022 to sign.
              </label>
            </Form.Group>
            <h5 className="confirmation-subheader">Code of Conduct</h5>
            <Form.Group>
              <label>
                It is extremely important to us that attendees follow a set of
                guidelines to make the event fun for everyone involved. Please
                read through and make sure you understand what will be expected
                of you.
              </label>
              <label>
                By clicking submit below, I affirm that I have read and will
                abide by the {/* link updated to 2022 already*/}
                <a href="https://docs.google.com/document/d/e/2PACX-1vTSYn2b66o9O1N8ybA8qctuZL6E53dxwVajGrZpG6A8aXhkYdr8OFDdKDCGkt4HhJ2wr-vY1fuyKA8U/pub">
                  Code of Conduct.
                </a>
              </label>
              <div className="text-center submit-button-container">
                <Button
                  className="submit-button"
                  onClick={handleSubmit}
                  variant="hack"
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
        text="Something went wrong. Check all required fields!"
        onConfirm={() => {
          setshowStatus({
            showError: false
          });
        }}
      />
    </div>
  );
}
