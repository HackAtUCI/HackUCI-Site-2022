import React from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function PersonalInfo(props) {
  const values = props.values;
  const errors = props.errors;
  const handleChange = props.handleChange;

  return (
    <div>
      <Form>
        <h4> Basic Information </h4>
        <Form.Group controlId="application.basicInfo">
          <Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="firstname"
                class={"form-control" + (errors.firstname ? " error" : "")}
                onChange={handleChange}
                value={values.firstname || ""}
                type="text"
              />
              <div>
                <p class="red">{errors.firstname}</p>
              </div>
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lastname"
                class={"form-control" + (errors.lastname ? " error" : "")}
                onChange={handleChange}
                value={values.lastname || ""}
                type="text"
              />
              <div>
                <p class="red">{errors.lastname}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={8}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                class={"form-control" + (errors.email ? " error" : "")}
                onChange={handleChange}
                value={values.email || ""}
                type="email"
              />
              <div>
                <p class="red">{errors.email}</p>
              </div>
            </Col>
            <Col sm={4}>
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                class={"form-control" + (errors.gender ? " error" : "")}
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
                <p class="red">{errors.gender}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                class={
                  "form-control" +
                  (errors.passwordEquality || errors.password ? " error" : "")
                }
                onChange={handleChange}
                value={values.password || ""}
                type="password"
              />
              <div>
                <p class="red">{errors.password}</p>
              </div>
            </Col>
            <Col>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                name="confirmPassword"
                class={
                  "form-control" +
                  (errors.passwordEquality || errors.password ? " error" : "")
                }
                onChange={handleChange}
                value={values.confirmPassword || ""}
                type="password"
              />
              <div>
                <p class="red">{errors.confirmPassword}</p>
              </div>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </div>
  );
}
