import React from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import InputControl from "./inputControl";

export default function PersonalInfo(props) {
  const { values, errors, handleChange, handleChecked } = props;

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
              placeholder="hacker@mail.edu"
              error={errors && errors.email}
              value={values.email || ""}
              handleChange={handleChange}
              type="email"
            />
          </Col>
          <Col sm={4}>
            <Form.Label>
              Race / Ethnicity
              <span className="field-required">*</span>
            </Form.Label>
            <Form.Control
              disabled={!errors}
              as="select"
              name="ethnicity"
              className={
                "form-control dropdown" +
                (errors && errors.ethnicity ? " error" : "") +
                (values.ethnicity !== undefined
                  ? " hack-form-conditional-select-color"
                  : "")
              }
              onChange={handleChange}
              value={values.ethnicity || ""}
            >
              <option value="" disabled>
                Race / Ethnicity
              </option>
              <option value="AIA">American Indian or Alaskan</option>
              <option value="API">Asian or Pacific Islander</option>
              <option value="BAA">Black or African American</option>
              <option value="H">Hispanic</option>
              <option value="WC">White or Caucasian</option>
              <option value="TOM">Two or more races/ethnicities</option>
              <option value="N">Prefer not to answer</option>
              <option value="O">Other</option>
            </Form.Control>
            <div>
              <p className="field-required">{errors && errors.ethnicity}</p>
            </div>
          </Col>
        </Form.Row>
        <Form.Row style={{ paddingBottom: "10px" }}>
          <Col>
            <Form.Label>
              Gender Identity
              <span className="field-required">*</span>
            </Form.Label>
            <Form.Control
              disabled={!errors}
              as="select"
              name="gender"
              className={
                "form-control dropdown" +
                (errors && errors.gender ? " error" : "") +
                (values.gender !== undefined
                  ? " hack-form-conditional-select-color"
                  : "")
              }
              onChange={handleChange}
              value={values.gender || ""}
            >
              <option value="" disabled>
                Gender
              </option>
              <option value="F">Female</option>
              <option value="M">Male</option>
              <option value="T">Non-Binary</option>
              <option value="O">Other</option>
              <option value="N">Prefer not to answer</option>
            </Form.Control>
            <div>
              <p className="field-required">{errors && errors.gender}</p>
            </div>
          </Col>
          <Col>
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
              <option value="F">She/Her/Hers</option>
              <option value="M">He/Him/His</option>
              <option value="T">They/Them/Theirs</option>
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
        <Form.Row>
          <Col>
            <Form.Label>
              Country of Residence
              <span className="field-required">*</span>
            </Form.Label>
            <InputControl
              name="country"
              error={errors && errors.country}
              value={values.country}
              handleChange={handleChange}
              type="text"
            />
          </Col>
        </Form.Row>
        <Form.Row style={{ justifyContent: "center" }}>
          <Form.Check
            name="firstTime"
            type="checkbox"
            onChange={handleChecked}
            checked={values.firstTime}
            label="This is my first Hackathon!"
            className="inline-block"
          />
        </Form.Row>
      </Form.Group>
    </div>
  );
}
