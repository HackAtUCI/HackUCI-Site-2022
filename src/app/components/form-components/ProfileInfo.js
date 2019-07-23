import React from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import InputControl from "./InputControl";

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
              disabled={!errors}
              name="linkedin"
              className="form-control"
              onChange={handleChange}
              value={values.linkedin || ""}
              type="text"
              placeholder="http://"
            />
          </Col>
          <Col>
            <Form.Label>Portfolio (GitHub, website, etc.)</Form.Label>
            <Form.Control
              disabled={!errors}
              name="portfolio"
              className="form-control"
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
            <InputControl
              name="description"
              error={errors && errors.description}
              value={values.description}
              handleChange={handleChange}
              type="text"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>
              What would you like to learn or get out of HackUCI?
            </Form.Label>
            {errors ? (
              <div>
                <Form.Control
                  as="textarea"
                  rows="7"
                  name="essay"
                  className={"form-control" + (errors.essay ? " error" : "")}
                  placeholder="Please enter your response here (100 chars min, 1500 max)"
                  onChange={handleChange}
                  value={values.essay || ""}
                />
                <div>
                  <p className="red">{errors.essay}</p>
                </div>
                <div>
                  <span>
                    <p
                      className={
                        values.essay && values.essay.length > 1500 && "red"
                      }
                    >
                      {values.essay ? values.essay.length : "0"}/1500
                    </p>
                  </span>
                </div>
              </div>
            ) : (
              <Form.Control
                disabled={!errors}
                as="textarea"
                rows="7"
                name="essay"
                value={values.essay || ""}
              />
            )}
          </Col>
        </Row>
      </Form.Group>
    </div>
  );
}
