import React, { useState, useEffect } from "react";

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
  let [values, setValues] = useState([]);

  useEffect(() => {
    UserService.get(session.getSessionUserId()).then(function(response) {
      let profile = response["data"]["profile"];
      profile["email"] = response["data"]["email"];
      setValues(profile);
    });
  }, []);

  // TODO make everything actually work with testing and all
  // prevent form.check from being changed
  return (
    <div>
      <h1>Application</h1>
      <Form>
        <PersonalInfo values={values} />
        <EducationalInfo values={values} />
        <ProfileInfo values={values} />
        <Form.Group controlId="formBasicChecbox">
          <Form.Label>
            <p>
              Because of limitations imposed by UCI, we are not legally allowed
              to host minors (those under 18) for HackUCI 2019. Checking the box
              below affirms that you are or will be 18 years or older by
              February 15th, 2019.
            </p>
            <b>
              We will be checking ID. If you are a minor, you will be turned
              away at the door.
            </b>
          </Form.Label>
          <Form.Check
            disabled
            name="adult"
            type="checkbox"
            checked={values.adult || false}
            label="I am 18 or older"
          />
        </Form.Group>
      </Form>
    </div>
  );
}
