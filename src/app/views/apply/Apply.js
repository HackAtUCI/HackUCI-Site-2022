import React, { useState, useEffect } from "react";

import UserService from "../../../services/UserService";
import useForm from "../../../hooks/useForm";
import useAuth from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";

import { validation } from "../../../utils/validation";
import PersonalInfo from "../../components/form-components/PersonalInfo.js";
import EducationalInfo from "../../components/form-components/EducationalInfo.js";
import ProfileInfo from "../../components/form-components/ProfileInfo.js";
import * as session from "../../../utils/session";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SweetAlert from "sweetalert-react";
import "../../../../node_modules/sweetalert/dist/sweetalert.css";

export default function Apply(props) {
  const {
    values,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
    handleChecked
  } = useForm(applyCall, validation.processApplicationForm);

  const { isLoggedIn, user, register } = useAuth();
  const { updateProfile, uploadResume } = useUser();
  const [showConfirm, setshowConfirm] = useState(false);
  const [showError, setshowError] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");

  useEffect(() => {
    if (isLoggedIn && user) {
      props.history.push("/application");
    }
  }, [isLoggedIn, props.history, user]);

  function applyCall() {
    const { email, password } = values;

    register(email, password)
      .then(response => {
        session.setSession(response.data.token, response.data.user);
        return response;
      })
      .then(response => {
        const profile = values;

        updateProfile(response.data.user.id, profile)
          .then(response => {
            const formData = new FormData();
            formData.append("file", values.file, values.file.name);

            uploadResume(formData).then(res => {
              setshowConfirm(true);
              setTimeout(() => {
                setshowConfirm(false);
                props.history.push("/dashboard");
              }, 1500);
            });
          })
          .catch(err => {
            setshowError(true);
            seterrorMessage("Something went wrong.");
          });
      })
      .catch(err => {
        const errMsg = err.response ? err.response.data.message : err.message;
        if (errMsg === "An account for this email already exists.") {
          seterrorMessage(
            "Looks like an account for this email already exists. \
            Please log in to edit your application."
          );
        } else {
          seterrorMessage("Something went wrong.");
        }
        setshowError(true);
      });
  }

  return (
    <div>
      <h1>Apply</h1>
      <Form>
        <PersonalInfo
          values={values}
          errors={errors}
          handleChange={handleChange}
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
          <Form.Check
            name="adult"
            type="checkbox"
            onChange={handleChecked}
            values={values.adult ? values.adult.toString() : "false"}
            label="I am 18 or older"
          />
          <div>
            <p className="red">{errors.adult}</p>
          </div>
        </Form.Group>
        <Button onClick={handleSubmit} variant="primary">
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
          setshowError(false);
        }}
      />
    </div>
  );
}
