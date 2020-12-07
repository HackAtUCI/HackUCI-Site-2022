import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import statuses from "../../../../globals/statuses";

import Button from "react-bootstrap/Button";

import "./status.scss";

function Status(props) {
  const {
    dashboardUser,
    handleResendVerifyEmail,
    handleDeclineAdmission
  } = props;
  return (
    <div className="status-container">
      <p className="status-header">Your Current Status</p>
      <div className="status-box">{dashboardUser.status.status}</div>
      <p className="status-text">{dashboardUser.status.text}</p>
      <p className="status-header">TODOs</p>
      {/*TODO: TODO*/}
      <div className="deadline-container">
        <p className="deadline">
          <b> Deadline:</b>&nbsp;
          {dashboardUser.registrationDeadline}
        </p>
        <p className="deadline">
          <b>Confirmation Deadline:</b>&nbsp;
          {dashboardUser.confirmationDeadline}
        </p>
      </div>

      {dashboardUser.status.status === statuses.unverified.status && (
        <div className="button-container">
          <Button
            className="view-confirmation-button"
            onClick={handleResendVerifyEmail}
          >
            Resend verification email
          </Button>
        </div>
      )}

      {dashboardUser.status.status ===
        statuses.incompleteRegistrationOpen.status && (
        <div className="button-container">
          <Link to="/application">
            <Button className="view-confirmation-button">
              Complete your application
            </Button>
          </Link>
        </div>
      )}

      {dashboardUser.status.status ===
        statuses.submittedRegistrationOpen.status && (
        <div className="button-container">
          <Link to="/application">
            <Button className="view-confirmation-button">
              Edit your application
            </Button>
          </Link>
        </div>
      )}

      {dashboardUser.status.status === statuses.submittedRegistrationClosed && (
        <div className="button-container">
          <Link to="/application">
            <Button className="view-confirmation-button">
              View your application
            </Button>
          </Link>
        </div>
      )}

      {dashboardUser.status.status === statuses.admittedUnconfirmed.status && (
        <div className="button-container">
          <Link to="/confirmation">
            <Button className="view-confirmation-button">
              Confirm Your Registration
            </Button>
          </Link>
          <Button
            className="sorry-button"
            onClick={() => handleDeclineAdmission(dashboardUser.id)}
          >
            Sorry, I can't make it
          </Button>
        </div>
      )}

      {dashboardUser.status.status === statuses.confirmed.status && (
        <div className="button-container">
          <p className="deadline">
            <b> You're all set!</b>
          </p>
        </div>
      )}
    </div>
  );
}

export default Status;
