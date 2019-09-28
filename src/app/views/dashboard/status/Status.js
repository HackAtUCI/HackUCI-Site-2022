import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import UserService from "../../../../services/UserService";

import "./status.scss";
import Button from "react-bootstrap/Button";
import useDate from "../../../../hooks/useDate";

function Status() {
  // Constants for all the statuses
  const statuses = {
    unverified: {
      status: "UNVERIFIED",
      text: "The email address you registered with has not been verified."
    },
    incompleteRegistrationOpen: {
      status: "INCOMPLETE",
      text:
        "Your application has not been submitted, but the registration deadline has not passed."
    },
    incompleteRegistrationClosed: {
      status: "INCOMPLETE",
      text:
        "Your application has not been submitted, but the registration deadline has passed."
    },
    submittedRegistrationOpen: {
      status: "UNDER REVIEW",
      text: "You have submitted your application and it is now under review."
    },
    submittedRegistrationClosed: {
      status: "UNDER REVIEW",
      text: "You have submitted your application and it is now under review."
    },
    admittedUnconfirmed: {
      status: "ADMITTED",
      text:
        "You have been admitted to the event, but have not confirmed your attendance and submitted your confirmation form."
    },
    admittedCofirmationDeadlinePassed: {
      status: "EXPIRED ADMISSION",
      text:
        "You had been admitted, but did not confirm your attendance before the deadline."
    },
    waitlisted: {
      status: "WAITLISTED",
      text:
        "You have been placed on the waitlist and will be admitted if there is room available."
    },
    confirmed: {
      status: "CONFIRMED",
      text:
        "We have recieved your confirmation. Please make sure to sign both waivers when they arrive in your inbox."
    },
    declined: {
      status: "DECLINED ADMISSION",
      text: "You had been admitted, but will not be attending the event."
    }
  };

  // default values
  var nowTimestamp = new Date().getTime();
  const registrationDeadline = useDate(nowTimestamp);
  const confirmationDeadline = useDate(nowTimestamp);
  const [currentStatus, setCurrentStatus] = useState(statuses.unverified);
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    UserService.getCurrentUser()
      .then(response => {
        // TODO: Update currentStatus, registrationDeadline, confirmationDeadline, userId
        // see example below to convert UNIX timestamp to readable date
        // var convertedTimestamp = new Date(unixTimestamp * 1000);
        // confirmationDeadline = useDate(convertedTimestamp)
        console.log(response);
      })
      .catch(err => {
        console.log("service unavailable");
      });
  });

  function declineAdmission() {
    UserService.declineAdmission(userId)
      .then(response => {
        setCurrentStatus(statuses.declined);
      })
      .catch(err => {
        console.log("service unavailable");
      });
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
