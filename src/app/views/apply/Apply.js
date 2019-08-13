import React from "react";

import AuthService from "../../../services/AuthService";
import UserService from "../../../services/UserService";
import useForm from "../../../hooks/useForm";
import { validation } from "../../../utils/validation";
import PersonalInfo from "../../components/form-components/PersonalInfo.js";
import EducationalInfo from "../../components/form-components/EducationalInfo.js";
import ProfileInfo from "../../components/form-components/ProfileInfo.js";
import * as session from "../../../utils/session";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Apply(props) {
  const {
    values,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
    handleChecked
  } = useForm(applyCall, validation.processApplicationForm);

  function applyCall() {
    const { email, password } = values;

    AuthService.register(email, password)
      .then(response => {
        session.setSession(response.data.token, response.data.user);
        return response;
      })
      .then(response => {
        const profile = values;

        UserService.updateProfile(response["data"]["user"]["id"], profile)
          .then(response => {
            const formData = new FormData();
            formData.append("file", values.file, values.file.name);
            UserService.uploadResume(formData)
              .then(res => {
                props.history.push("/dashboard");

                // TODO: modal saying sweet you saved, redirect to dashboard
              })
              .catch(err => {
                setErrors({ networkError: err.message });
              });
          })
          .catch(err => {
            setErrors({ networkError: err.message });
          });
      })
      .catch(err => {
        setErrors({ networkError: err.message });
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
        <div>
          <p className="red">{errors.networkError}</p>
        </div>
        <Button onClick={handleSubmit} variant="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
}
