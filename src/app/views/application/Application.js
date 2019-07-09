import React, { useState } from "react";

import AuthService from "../../../services/AuthService";
import UserService from "../../../services/UserService";
import useForm from "../../../hooks/useForm";
import { validation } from "../../../utils/validation";
import * as session from "../../../utils/session.js";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Application(props) {
  const {
    values,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
    handleChecked
  } = useForm(applyCall, validation.processApplicationForm);

  function applyCall() {
    console.log(values);
    AuthService.register(values.email, values.password)
      .then(response => {
        const profile = values;
        const headers = { "x-access-token": response.data.token };

        delete profile["email"];
        delete profile["password"];
        delete profile["confirmPassword"];

        UserService.updateProfile(session.getSessionUserId(), profile)
          .then(response => {
            console.log(response);
            // TODO: modal saying sweet you saved or something
          })
          .catch(err => {
            setErrors({ networkError: err.message });
          });
      })
      .catch(err => {
        setErrors({ networkError: err.message });
      });
    // write this later, make a call to backend
  }

  return (
    <div>
      <h1>Application</h1>
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
        <h4> School Information </h4>
        <Form.Group controlId="application.schoolInfo">
          <Row>
            <Col>
              <Form.Label>School</Form.Label>
              <Form.Control
                as="select"
                name="school"
                class={"form-control" + (errors.school ? " error" : "")}
                onChange={handleChange}
                value={values.school || ""}
              >
                <option value="">same</option>
                <option value="a">same2</option>
              </Form.Control>
              <div>
                <p class="red">{errors.school}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Major </Form.Label>
              <Form.Control
                as="select"
                name="major"
                class={"form-control" + (errors.major ? " error" : "")}
                value={values.major || ""}
                onChange={handleChange}
              >
                <option value="">Major</option>
                <option value="AE">Aerospace Engineering</option>
                <option value="AP">Applied Physics</option>
                <option value="BE">Biomedical Engineering</option>
                <option value="BIM">Business Information Management</option>
                <option value="CME">Chemical Engineering</option>
                <option value="CH">Chemistry</option>
                <option value="CVE">Civil Engineering</option>
                <option value="CE">Computer Engineering</option>
                <option value="CGS">Computer Game Science</option>
                <option value="CS">Computer Science</option>
                <option value="CSE">Computer Science and Engineering</option>
                <option value="DS">Data Science</option>
                <option value="ESS">Earth System Science</option>
                <option value="EE">Electrical Engineering</option>
                <option value="ENG">Engineering</option>
                <option value="ENE">Environmental Engineering</option>
                <option value="ENS">Environmental Science</option>
                <option value="INF">Informatics</option>
                <option value="MSE">Materials Science Engineering</option>
                <option value="MAT">Mathematics</option>
                <option value="MCE">Mechanical Engineering</option>
                <option value="PHY">Physics</option>
                <option value="SE">Software Engineering</option>
                <option value="other">Other</option>
              </Form.Control>
              <div>
                <p class="red">{errors.major}</p>
              </div>
            </Col>
            <Col>
              <Form.Label>Graduation Year</Form.Label>
              <Form.Control
                as="select"
                name="graduationYear"
                class={"form-control" + (errors.graduationYear ? " error" : "")}
                onChange={handleChange}
                value={values.graduationYear || ""}
              >
                <option value="">Graduation Year</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="later">Later than 2023</option>
              </Form.Control>
              <div>
                <p class="red">{errors.graduationYear}</p>
              </div>
            </Col>
          </Row>
        </Form.Group>
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
                  <p
                    class={values.essay && values.essay.length > 1500 && "red"}
                  >
                    {values.essay ? values.essay.length : "0"}/1500
                  </p>
                </span>
              </div>
            </Col>
          </Row>
        </Form.Group>
        <div>
          Because of limitations imposed by UCI, we are not legally allowed to
          host minors (those under 18) for HackUCI 2019. Checking the box below
          affirms that you are or will be 18 years or older by Feburary 15th,
          2019.
          <span>
            <b>
              We will be checking ID. If you are a minor, you will be turned
              away at the door.
            </b>
          </span>
        </div>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check
            name="adult"
            type="checkbox"
            onChange={handleChecked}
            values={values.adult || false}
            label="I am 18 or older"
          />
        </Form.Group>
        <div>
          <p class="red">{errors.networkError}</p>
        </div>
        <Button onClick={handleSubmit} variant="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
}
