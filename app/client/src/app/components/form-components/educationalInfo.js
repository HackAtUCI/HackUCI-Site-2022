import React, { useState, useEffect } from "react";

import * as api from "../../../utils/api";

import AutoCompleteWrapper from "./autoCompleteWrapper";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function EducationalInfo(props) {
  let [schools, setSchools] = useState([]);
  let [schoolLoadingError, setschoolLoadingError] = useState("");
  const { values, errors, handleChange } = props;
  const majors = {
    "": "Major",
    AE: "Aerospace Engineering",
    AP: "Applied Physics",
    BE: "Biomedical Engineering",
    BIM: "Business Information Management",
    CME: "Chemical Engineering",
    CH: "Chemistry",
    CVE: "Civil Engineering",
    CE: "Computer Engineering",
    CGS: "Computer Game Science",
    CS: "Computer Science",
    CSE: "Computer Science and Engineering",
    DS: "Data Science",
    ESS: "Earth System Science",
    EE: "Electrical Engineering",
    ENG: "Engineering",
    ENE: "Environmental Engineering",
    ENS: "Environmental Science",
    INF: "Informatics",
    MSE: "Materials Science Engineering",
    MAT: "Mathematics",
    MCE: "Mechanical Engineering",
    PHY: "Physics",
    SE: "Software Engineering",
    other: "Other"
  };

  useEffect(() => {
    api
      .getRoute("/schools.csv")
      .then(response => {
        setSchools(response.data.split("\n"));
      })
      .catch(err => {
        setschoolLoadingError(
          "Couldn't load schools list. Please reload the page"
        );
        return Promise.reject(err);
      });
  }, []);

  function autoCompleteSelect(selectedItem) {
    values.school = selectedItem;
  }

  return (
    <div>
      <h4> School Information </h4>
      <Form.Group controlId="application.schoolInfo">
        <Row>
          <Col>
            <Form.Label>
              School
              <span className="field-required">*</span>
            </Form.Label>
            <AutoCompleteWrapper
              name="school"
              placeholder="School"
              value={values.school || ""}
              onChange={handleChange}
              suggestions={schools}
              autoCompleteSelect={autoCompleteSelect}
              disabled={!errors}
              className={
                "form-control" + (errors && errors.school ? " error" : "")
              }
            />
            <div>
              <p className="red">{errors && errors.school}</p>
            </div>
            <div>
              <p className="red">{schoolLoadingError}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>
              Major
              <span className="field-required">*</span>
            </Form.Label>
            <Form.Control
              disabled={!errors}
              as="select"
              name="major"
              className={
                "form-control" + (errors && errors.major ? " error" : "")
              }
              value={values.major || ""}
              onChange={handleChange}
            >
              {Object.keys(majors).map((majorValue, _) => (
                <option
                  value={majorValue}
                  key={majorValue}
                  disabled={majorValue === ""}
                >
                  {majors[majorValue]}
                </option>
              ))}
            </Form.Control>
            <div>
              <p className="red">{errors && errors.major}</p>
            </div>
          </Col>
          <Col>
            <Form.Label>
              Graduation Year
              <span className="field-required">*</span>
            </Form.Label>
            <Form.Control
              disabled={!errors}
              as="select"
              name="graduationYear"
              className={
                "form-control" +
                (errors && errors.graduationYear ? " error" : "")
              }
              onChange={handleChange}
              value={values.graduationYear || ""}
            >
              <option disabled value="">
                Graduation Year
              </option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="later">Later than 2023</option>
            </Form.Control>
            <div>
              <p className="red">{errors && errors.graduationYear}</p>
            </div>
          </Col>
        </Row>
      </Form.Group>
    </div>
  );
}
