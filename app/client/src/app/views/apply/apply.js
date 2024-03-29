import React, { useState, useEffect } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import SweetAlert from "sweetalert-react";

import useForm from "hooks/useForm";
import useAuth from "hooks/useAuth";
import useUser from "hooks/useUser";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import { validation } from "utils/validation";
import PersonalInfo from "app/components/form-components/personalInfo.js";
import EducationalInfo from "app/components/form-components/educationalInfo.js";
import ProfileInfo from "app/components/form-components/profileInfo.js";
import * as session from "utils/session";
import errorMessages from "globals/errors";

import "sweetalert/dist/sweetalert.css";

export default function Apply(props) {
  const { values, errors, handleChange, handleSubmit, handleChecked } = useForm(
    applyCall,
    validation.processApplicationForm
  );

  const { isLoggedIn, user, register } = useAuth();
  const { updateProfile, uploadResume } = useUser();
  const [showStatus, setshowStatus] = useState({
    showLoading: false,
    showConfirm: false,
    showError: false,
    errorMessage: ""
  });

  useEffect(() => {
    if (isLoggedIn && user) {
      props.history.push("/application");
    }
  }, [isLoggedIn, props.history, user]);

  function applyCall() {
    const { email, password } = values;
    const profile = values;
    profile["name"] = profile["firstname"] + profile["lastname"];

    register(email, password, profile)
      .then(response => {
        setshowStatus({
          showLoading: true,
          showConfirm: false
        });
        session.setSession(response.data.token, response.data.user);
        return response;
      })
      .then(response => {
        updateProfile(response.data.user.id, profile)
          .then(response => {
            const formData = new FormData();
            formData.append("file", values.file, values.file.name);

            uploadResume(formData)
              .then(res => {
                return setshowStatus({
                  showLoading: false,
                  showConfirm: true
                });
              })
              .then(res => {
                setTimeout(() => {
                  setshowStatus({
                    showLoading: false,
                    showConfirm: false
                  });
                  props.history.push("/dashboard");
                }, 1500);
              });
          })
          .catch(err => {
            setshowStatus({
              showError: true,
              errorMessage: errorMessages.default
            });
          });
      })
      .catch(err => {
        const responseErrMsg = err.response
          ? err.response.data.message
          : err.message;
        let errorMsg = "";
        if (responseErrMsg === "An account for this email already exists.") {
          errorMsg = errorMessages.existingAccount;
        } else if (responseErrMsg === "Please use a edu email.") {
          errorMsg = errorMessages.needEduEmail;
        } else {
          errorMsg = errorMessages.default;
        }
        setshowStatus({
          showError: true,
          errorMessage: errorMsg
        });
      });
  }

  const { showLoading, showConfirm, showError, errorMessage } = showStatus;
  return (
    <div className="hack-form-container">
      <h1>Apply</h1>
      {/* <div className="hack-disclaimer">
        Applications are due January 30th 2022 @ 11:59 PM PST{" "}
      </div> */}
      <Form className="hack-form">
        <PersonalInfo
          values={values}
          errors={errors}
          handleChange={handleChange}
          handleChecked={handleChecked}
        />
        <EducationalInfo
          values={values}
          errors={errors}
          handleChange={handleChange}
        />
        <ProfileInfo
          values={values}
          errors={errors}
          handleChange={handleChange}
        />
        <Form.Group controlId="formBasicChecbox">
          <Form.Label>
            <label className="font-weight-normal">
              Because of limitations imposed by the University of California,
              Irvine, we are not legally allowed to host minors (those under 18)
              for HackUCI 2022. Checking the box below affirms that you are and
              will be 18 years or older by February 24th, 2022.
            </label>
            <br />
            {/* <br />
            <b>
              We will be checking ID. If you are a minor, you will be turned
              away at the door.
            </b> */}
          </Form.Label>
          <Form.Check
            name="adult"
            type="checkbox"
            onChange={handleChecked}
            values={values.adult ? values.adult.toString() : "false"}
            label="I am 18 or older"
            className="inline-block"
          />
          <span className="field-required">*</span>
          <div>
            <p className="red">{errors.adult}</p>
          </div>
        </Form.Group>
        <Form.Group>
          <p className="red">
            All submissions are final and cannot be changed. Make sure all your
            information is correct before proceeding.
          </p>
        </Form.Group>
        <Button type="button" onClick={handleSubmit} variant="hack">
          Submit
        </Button>
      </Form>
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
        onConfirm={() => {
          setshowStatus({
            showError: false
          });
        }}
      />
      {showLoading && (
        <div>
          <SweetAlert
            show={true}
            title="Submitting"
            html
            text={renderToStaticMarkup(<Spinner animation="grow" />)}
            showConfirmButton={false}
          />
        </div>
      )}
    </div>
  );
}
