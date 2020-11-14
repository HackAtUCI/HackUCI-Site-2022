import React from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import InputControl from "./inputControl";

export default function PersonalInfo(props) {
  const { values, errors, handleChange } = props;

  return (
    <div>
      <h4> Basic Information </h4>
      <Row>
        <Col>
          <Form.Group controlId="application.firstName">
            <Form.Label>
              First Name
              <span class="red">*</span>
            </Form.Label>
            <InputControl
              name="firstname"
              error={errors && errors.firstname}
              value={values.firstname}
              handleChange={handleChange}
              type="text"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="application.lastName">
            <Form.Label>
              Last Name
              <span class="red">*</span>
            </Form.Label>
            <InputControl
              name="lastname"
              error={errors && errors.lastname}
              value={values.lastname || ""}
              handleChange={handleChange}
              type="text"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col sm={8}>
          <Form.Group controlId="application.email">
            <Form.Label>
              Email
              <span class="red">*</span>
            </Form.Label>
            <InputControl
              name="email"
              error={errors && errors.email}
              value={values.email || ""}
              handleChange={handleChange}
              type="email"
            />
          </Form.Group>
        </Col>
        <Col sm={4}>
          <Form.Group controlId="application.gender">
            <Form.Label>
              Gender
              <span class="red">*</span>
            </Form.Label>
            <Form.Control
              disabled={!errors}
              as="select"
              name="gender"
              className={
                "form-control" + (errors && errors.gender ? " error" : "")
              }
              onChange={handleChange}
              value={values.gender || ""}
            >
              <option value="">Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Other</option>
              <option value="N">I prefer not to answer</option>
            </Form.Control>
            <div>
              <p className="red">{errors && errors.gender}</p>
            </div>
          </Form.Group>
        </Col>
      </Row>
      {errors && (
        <Row>
          <Col>
            <Form.Group controlId="application.password">
              <Form.Label>
                Password
                <span class="red">*</span>
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
                <p className="red">{errors.password}</p>
              </div>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="application.confirmPassword">
              <Form.Label>
                Confirm Password
                <span class="red">*</span>
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
                <p className="red">{errors.confirmPassword}</p>
              </div>
            </Form.Group>
          </Col>
        </Row>
      )}
    </div>
  );
}
