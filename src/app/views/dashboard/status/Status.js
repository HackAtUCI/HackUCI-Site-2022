import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./status.scss";
import Button from "react-bootstrap/Button";

function Status() {
  // Constants for all the statuses (the text descriptions are temporary. status cases were taken from quill)
  // the status titles were modified to fit the design document
  const statuses = {
    unverified: {
      status: "UNVERIFIED",
      text: "users have not verified the email address they registered with"
    },
    incompleteRegistrationOpen: {
      status: "INCOMPLETE",
      text:
        "the user has not submitted their application, but the registration deadline has not passed"
    },
    incompleteRegistrationClosed: {
      status: "INCOMPLETE",
      text:
        "the user has not submitted, but the registration deadline has passed"
    },
    submittedRegistrationOpen: {
      status: "UNDER REVIEW",
      text: "submitted registration open"
    },
    submittedRegistrationClosed: {
      status: "UNDER REVIEW",
      text: "submitted registration closed"
    },
    admittedUnconfirmed: {
      status: "ADMITTED",
      text:
        "the user has been admitted to the event, but has not confirmed their attendance and submitted their confirmation form"
    },
    admittedCofirmationDeadlinePassed: {
      status: "EXPIRED ADMISSION",
      text:
        "the user has been admitted, but did not confirm their attendance before the deadline"
    },
    waitlisted: {
      status: "WAITLISTED",
      text: "the user was not admitted to the event"
    },
    confirmed: {
      status: "CONFIRMED",
      text:
        "We have recieved your confirmation. Please make sure to sign both waivers when they arrive in your inbox."
    },
    declined: {
      status: "DECLINED ADMISSION",
      text: "the user has been admitted, but will not be attending the event"
    }
  };

  // current status temporarily initialized to "confirmed" for testing purposes
  // declared and initialized below "statuses" const until useEffect is completed
  const [currentStatus, setCurrentStatus] = useState(statuses.confirmed);

  useEffect(() => {
    // TODO: get the user and update current status
  });

  function declineAdmission() {
    // TODO: decline admission call
    setCurrentStatus(statuses.declined);
  }

  return (
    <div className="status-container">
      <p className="status-header">YOUR STATUS:</p>
      <div className="status-box">{currentStatus.status}</div>
      <div className="deadline-container">
        <p className="deadline">
          <b>Registration Deadline:</b>&nbsp;Friday, January 25th 2019, 11:59 pm
          (PST)
        </p>
        <p className="deadline">
          <b>Confirmation Deadline:</b>&nbsp;Saturday, January 19th 2019, 9:00
          am (PST)
        </p>
      </div>
      <p className="status-text">{currentStatus.text}</p>
      <div className="button-container">
        <Link to="/confirmation">
          <Button className="view-confirmation-button">
            View your confirmation information
          </Button>
        </Link>
        <Button className="sorry-button" onClick={declineAdmission}>
          Sorry, I can't make it
        </Button>
      </div>
    </div>
  );
}

export default Status;
