import React, { useState, useEffect } from "react";

import useUser from "../../../hooks/useUser";

import * as session from "../../../utils/session";

import Form from "react-bootstrap/Form";

import PersonalInfo from "../../components/form-components/personalInfo.js";
import EducationalInfo from "../../components/form-components/educationalInfo.js";
import ProfileInfo from "../../components/form-components/profileInfo.js";

export default function Application(props) {
  let [values, setValues] = useState({});
  const { get } = useUser();

  useEffect(() => {
    get(session.getSessionUserId()).then(function(response) {
      let profile = response.data.profile;
      profile.email = response.data.email;
      setValues(profile);
    });
  }, []);

  // TODO make everything actually work with testing and all
  // prevent form.check from being changed
  return (
    <div className="hack-form-container">
      <h1>Application</h1>
      <Form className="hack-form">
        <PersonalInfo values={values} />
        <EducationalInfo values={values} />
        <ProfileInfo values={values} />
        <Form.Group controlId="formBasicChecbox">
          <Form.Label>
            <label className="font-weight-normal">
              Because of limitations imposed by UCI, we are not legally allowed
              to host minors (those under 18) for HackUCI 2021. Checking the box
              below affirms that you are and will be 18 years or older by
              January 2021.
            </label>
            <br />
            <br />
            <b>
              You must be 18 by the day of the event in order to attend. If you
              are a minor, you will not be accepted.
            </b>
          </Form.Label>
          <Form.Check
            disabled
            name="adult"
            type="checkbox"
            checked={values.adult || false}
            label="I am 18 or older"
            className="inline-block"
          />
          <span className="field-required">*</span>
        </Form.Group>
      </Form>
    </div>
  );
}
