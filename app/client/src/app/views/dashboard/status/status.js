import React from "react";
import { Link } from "react-router-dom";

import statuses from "globals/statuses";
import HackCheckboxChecked from "assets/images/site-2022/checked.svg";
import HackCheckboxUnchecked from "assets/images/site-2022/unchecked.svg";

import Button from "react-bootstrap/Button";

import "./status.scss";

function Status(props) {
  const {
    dashboardUser,
    handleResendVerifyEmail,
    handleDeclineAdmission
  } = props;

  console.log(dashboardUser);
  console.log(dashboardUser.status.status);
  console.log(statuses.confirmed);
  console.log(dashboardUser.status === statuses.confirmed);

  return (
    <div className="status-container">
      <p className="status-header">Your Current Status</p>
      <div className="status-box">{dashboardUser.status.status}</div>
      <p className="status-text">{dashboardUser.status.text}</p>
      <p className="status-todo">TODOs</p>
      <div className="hack-dashboard-todo-container">
        {/*would like to insert waiver stuff here but need data from HelloSign or something*/}
        {/*baseline set-up for TODOs, there's probably a better way to do this with arrays, but I guess this is clearer to read*/}
        <ul>
          {(dashboardUser.status === undefined ||
            dashboardUser.status === statuses.incompleteRegistrationClosed ||
            dashboardUser.status === statuses.incompleteRegistrationOpen) && (
            <li>
              <img
                className="hack-dashboard-checkbox"
                src={HackCheckboxUnchecked}
                alt="apply to hackUCI unchecked"
              />
              Apply to HackUCI
            </li>
          )}
          {dashboardUser.status === statuses.unverified && (
            <li>
              <img
                className="hack-dashboard-checkbox"
                src={HackCheckboxUnchecked}
                alt="verify email"
              />
              Verify Email
            </li>
          )}
          {(dashboardUser.status === statuses.admittedUnconfirmed ||
            dashboardUser.status ===
              statuses.admittedConfirmationDeadlinePassed ||
            dashboardUser.status === statuses.submittedRegistrationClosed ||
            dashboardUser.status === statuses.submittedRegistrationOpen ||
            dashboardUser.status === statuses.confirmed) && (
            <li>
              <img
                className="hack-dashboard-checkbox"
                src={HackCheckboxChecked}
                alt="apply to hackUCI checked"
              />
              Apply to HackUCI
            </li>
          )}
          {dashboardUser.status === statuses.admittedUnconfirmed && (
            <li>
              <img
                className="hack-dashboard-checkbox"
                src={HackCheckboxUnchecked}
                alt="confirm registration"
              />
              Confirm your registration
            </li>
          )}
          {dashboardUser.status === statuses.confirmed && (
            <li>
              <img
                className="hack-dashboard-checkbox"
                src={HackCheckboxChecked}
                alt="confirm registration"
              />
              Confirm your registration
            </li>
          )}
          {dashboardUser.status === statuses.confirmed &&
            !dashboardUser.waiverSigned && (
              <li>
                <img
                  className="hack-dashboard-checkbox"
                  src={HackCheckboxUnchecked}
                  alt="sign the wavier"
                />
                Sign the wavier
              </li>
            )}
          {dashboardUser.status === statuses.confirmed &&
            dashboardUser.waiverSigned && (
              <li>
                <img
                  className="hack-dashboard-checkbox"
                  src={HackCheckboxChecked}
                  alt="sign the wavier"
                />
                Sign the wavier
              </li>
            )}
        </ul>
      </div>
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
              View your application
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
            onClick={() => {
              handleDeclineAdmission(dashboardUser.id);
              window.location.reload(false);
            }}
          >
            Sorry, I can't make it
          </Button>
        </div>
      )}

      {dashboardUser.status.status === statuses.confirmed.status &&
        !dashboardUser.waiverSigned && (
          <div className="button-container">
            <a href="https://bit.ly/3oYqVwy">
              <Button className="view-confirmation-button">Sign Waiver</Button>
            </a>
          </div>
        )}

      {dashboardUser.status.status === statuses.confirmed.status &&
        dashboardUser.waiverSigned && (
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
