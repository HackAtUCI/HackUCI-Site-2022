import React from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ProfileInfo(props) {
  const values = props.values;
  const errors = props.errors;
  const handleChange = props.handleChange;

  return (
    <div>
      <h4> Profile </h4>
      <Form.Group controlId="application.profileInfo">
        <Row>
          <Col>
            <Form.Label>LinkedIn </Form.Label>
            <Form.Control
              name="linkedin"
              class="form-control"
              onChange={handleChange}
              value={values.linkedin || ""}
              type="text"
              placeholder="http://"
            />
          </Col>
          <Col>
            <Form.Label>Portfolio (GitHub, website, etc.)</Form.Label>
            <Form.Control
              name="portfolio"
              class="form-control"
              onChange={handleChange}
              value={values.portfolio || ""}
              type="text"
              placeholder="http://"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>I would describe myself as a...</Form.Label>
            <Form.Control
              name="description"
              class={"form-control" + (errors.description ? " error" : "")}
              onChange={handleChange}
              value={values.description || ""}
              type="text"
              placeholder="Designer, Data Scientist, iOS Wizard, Hacker Extraordinaire"
            />
            <div>
              <p class="red">{errors.description}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>
              What would you like to learn or get out of HackUCI?
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="7"
              name="essay"
              class={"form-control" + (errors.essay ? " error" : "")}
              placeholder="Please enter your response here (100 chars min, 1500 max)"
              onChange={handleChange}
              value={values.essay || ""}
            />
            <div>
              <p class="red">{errors.essay}</p>
            </div>
            <div>
              <span>
                <p class={values.essay && values.essay.length > 1500 && "red"}>
                  {values.essay ? values.essay.length : "0"}/1500
                </p>
              </span>
            </div>
          </Col>
        </Row>
      </Form.Group>
    </div>
  );
}
