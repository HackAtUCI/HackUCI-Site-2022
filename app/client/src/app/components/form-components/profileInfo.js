import React, { useState } from "react";

import useUser from "hooks/useUser";

import * as session from "utils/session";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Dropzone from "react-dropzone";
import FileSaver from "file-saver";

import dragDrop from "assets/images/drag_and_drop.svg";

import InputControl from "./inputControl";

export default function ProfileInfo(props) {
  const { values, errors, handleChange } = props;
  const [fileName, setFileName] = useState("");
  const { getResumeToken, getResume } = useUser();

  function addFile(file) {
    values.file = file[0];
    setFileName(values.file.name);
  }

  function downloadFile() {
    getResumeToken(session.getSessionUserId()).then(tokenResponse => {
      const resumeAccessToken = tokenResponse["data"]["token"];
      getResume(resumeAccessToken).then(resumeResponse => {
        FileSaver.saveAs(
          new Blob([resumeResponse.data], { type: "application/pdf" }),
          `resume.pdf`
        );
      });
    });
  }

  return (
    <div>
      <h4> Profile Information </h4>
      <Form.Group controlId="application.profileInfo">
        <Form.Row>
          <Col>
            <Form.Label>LinkedIn </Form.Label>
            <Form.Control
              disabled={!errors}
              name="linkedin"
              className="form-control"
              onChange={handleChange}
              value={values.linkedin || ""}
              type="text"
              placeholder={errors ? "http://" : ""}
            />
            <div>
              <p className="red">{errors && errors.linkedin}</p>
            </div>
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
              placeholder={errors ? "http://" : ""}
            />
            <div>
              <p className="red">{errors && errors.portfolio}</p>
            </div>
          </Col>
        </Form.Row>
        <br />
        <Form.Row>
          <Col>
            <Form.Label>
              I would describe myself as a...
              <span className="field-required">*</span>
            </Form.Label>
            <InputControl
              name="description"
              error={errors && errors.description}
              value={values.description}
              placeholder="Designer, Data Scientist, iOS Wizard, Hacker Extraordinaire"
              handleChange={handleChange}
              type="text"
            />
          </Col>
        </Form.Row>
        {/* <Row>
          <Col>
            <Form.Label>
              What would you like to learn or get out of HackUCI?
              <span className="field-required">*</span>
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
                        values.essay && values.essay.length > 1500
                          ? "red float-right"
                          : "float-right"
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
        </Row> */}
        <Form.Row>
          <Col>
            <Form.Label>
              Resume (PDF, 0.5 MB max)
              <span className="field-required">*</span>
            </Form.Label>
            {errors ? (
              <div className="pointer hack-form-resume-section">
                <Dropzone onDrop={addFile}>
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()}>
                        <img
                          className="hack-form-apply-drag-and-drop-svg"
                          src={dragDrop}
                          alt="drag and drop resume"
                        />
                        <input {...getInputProps()} />
                        <p>Drag & Drop</p>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </div>
            ) : (
              <div
                className="pointer hack-form-resume-section"
                onClick={downloadFile}
              >
                <img
                  className="hack-form-apply-drag-and-drop-svg"
                  src={dragDrop}
                  alt="drag and drop resume"
                />
                Download Resume
              </div>
            )}
            <p className="hack-form-resume-preview">{fileName || ""}</p>
            <div className="red">{(errors && errors.file) || ""}</div>
          </Col>
        </Form.Row>
      </Form.Group>
    </div>
  );
}
