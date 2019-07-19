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
      console.log(response["data"]["profile"]);

      // setValues(data[""])
    });
  }, []);

  return (
    <div>
      <h1>Application</h1>
      <Form>
        <PersonalInfo values={values} />
        <EducationalInfo values={values} />
        <ProfileInfo values={values} />
        <Form.Group controlId="formBasicChecbox">
          <Form.Check
            name="adult"
            type="checkbox"
            values={values.adult || false}
            label="I am 18 or older"
          />
        </Form.Group>
      </Form>
    </div>
  );
}
