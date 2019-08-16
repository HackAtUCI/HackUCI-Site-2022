import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import UserService from "../../../../services/UserService";

import "./status.scss";
import Button from "react-bootstrap/Button";

function Status() {
  // temporarily defaulted to old strings. will be updated with new mockups.
  const [registrationDeadline, setRegistrationDeadline] = useState(
    "Friday, January 25th 2019, 11:59 pm (PST)"
  );
  const [confirmationDeadline, setConfirmationDeadline] = useState(
    "Saturday, January 19th 2019, 9:00 am (PST)"
  );
  // current status is initialized to unverified below the statuses constants

  // Constants for all the statuses (the text descriptions are temporary. status cases were taken from quill)
  // the status titles were modified to fit the design document
  const statuses = {
    unverified: {
      status: "UNVERIFIED",
      text: "Users have not verified the email address they registered with."
    },
    incompleteRegistrationOpen: {
      status: "INCOMPLETE",
      text:
        "The user has not submitted their application, but the registration deadline has not passed."
    },
    incompleteRegistrationClosed: {
      status: "INCOMPLETE",
      text:
        "The user has not submitted, but the registration deadline has passed."
    },
    submittedRegistrationOpen: {
      status: "UNDER REVIEW",
      text: "Submitted registration open."
    },
    submittedRegistrationClosed: {
      status: "UNDER REVIEW",
      text: "Submitted registration closed."
    },
    admittedUnconfirmed: {
      status: "ADMITTED",
      text:
        "The user has been admitted to the event, but has not confirmed their attendance and submitted their confirmation form."
    },
    admittedCofirmationDeadlinePassed: {
      status: "EXPIRED ADMISSION",
      text:
        "The user has been admitted, but did not confirm their attendance before the deadline."
    },
    waitlisted: {
      status: "WAITLISTED",
      text: "The user was not admitted to the event."
    },
    confirmed: {
      status: "CONFIRMED",
      text:
        "We have recieved your confirmation. Please make sure to sign both waivers when they arrive in your inbox."
    },
    declined: {
      status: "DECLINED ADMISSION",
      text: "The user has been admitted, but will not be attending the event."
    }
  };

  // default value is set to unverified (underneath the statuses declaration)
  const [currentStatus, setCurrentStatus] = useState(statuses.unverified);

  // only rerender if the currentStatus, registrationDeadline, or confirmationDeadline has changed.
  useEffect(() => {
    UserService.getCurrentUser()
      .then(response => {
        // TODO: Update currentStatus, registrationDeadline, and confirmationDeadline
        console.log(response);
      })
      .catch(err => {
        console.log("service unavailable");
      });
  }, [currentStatus, registrationDeadline, confirmationDeadline]);

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
          <b>Registration Deadline:</b>&nbsp;{registrationDeadline}
        </p>
        <p className="deadline">
          <b>Confirmation Deadline:</b>&nbsp;{confirmationDeadline}
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
