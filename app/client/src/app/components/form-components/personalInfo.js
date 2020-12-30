import React from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import InputControl from "./inputControl";

export default function PersonalInfo(props) {
  const { values, errors, handleChange } = props;

  return (
    <div>
      <h4> Basic Information </h4>
      <Form.Group controlId="application.personalInfo">
        <Form.Row>
          <Col>
            <Form.Label>
              First Name
              <span className="field-required">*</span>
            </Form.Label>
            <InputControl
              name="firstname"
              error={errors && errors.firstname}
              value={values.firstname}
              handleChange={handleChange}
              type="text"
            />
          </Col>
          <Col>
            <Form.Label>
              Last Name
              <span className="field-required">*</span>
            </Form.Label>
            <InputControl
              name="lastname"
              error={errors && errors.lastname}
              value={values.lastname || ""}
              handleChange={handleChange}
              type="text"
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col sm={8}>
            <Form.Label>
              Email
              <span className="field-required">*</span>
            </Form.Label>
            <InputControl
              name="email"
              error={errors && errors.email}
              value={values.email || ""}
              handleChange={handleChange}
              type="email"
            />
          </Col>
          <Col sm={4}>
            <Form.Label>
              Pronouns
              <span className="field-required">*</span>
            </Form.Label>
            <Form.Control
              disabled={!errors}
              as="select"
              name="pronouns"
              className={
                "form-control dropdown" +
                (errors && errors.pronouns ? " error" : "") +
                (values.pronouns !== undefined
                  ? " hack-form-conditional-select-color"
                  : "")
              }
              onChange={handleChange}
              value={values.pronouns || ""}
            >
              <option value="" disabled>
                Pronouns
              </option>
              <option value="F">She, Her, Hers</option>
              <option value="M">He, Him, His</option>
              <option value="T">They, Them, Theirs</option>
              <option value="X">Ze, Zir, Zirs</option>
              <option value="O">Other</option>
              <option value="N">I prefer not to answer</option>
            </Form.Control>
            <div>
              <p className="field-required">{errors && errors.pronouns}</p>
            </div>
          </Col>
          <br />
        </Form.Row>
        {errors && (
          <Form.Row>
            <Col>
              <Form.Label>
                Password
                <span className="field-required">*</span>
              </Form.Label>
              <Form.Control
                name="password"
                className={
                  "form-control" +
                  (errors.passwordEquality || errors.password ? " error" : "")
                }
                onChange={handleChange}
                value={values.password || ""}
                type="password"
              />
              <div>
                <p className="red">{errors.passwordEquality}</p>
                <p className="red">{errors.password}</p>
              </div>
            </Col>
            <Col>
              <Form.Label>
                Confirm Password
                <span className="field-required">*</span>
              </Form.Label>
              <Form.Control
                name="confirmPassword"
                className={
                  "form-control" +
                  (errors.passwordEquality || errors.password ? " error" : "")
                }
                onChange={handleChange}
                value={values.confirmPassword || ""}
                type="password"
              />
              <div>
                <p className="red">{errors.passwordEquality}</p>
                <p className="red">{errors.confirmPassword}</p>
              </div>
            </Col>
          </Form.Row>
        )}
      </Form.Group>
    </div>
  );
}
