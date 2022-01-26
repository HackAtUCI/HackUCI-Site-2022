import React, { useEffect, useState } from "react";

import useUser from "hooks/useUser";
import useAuth from "hooks/useAuth";
import useDashboardUser from "hooks/useDashboardUser";
import useSettings from "hooks/useSettings";

import Status from "./status/status.js";

import "./dashboard.scss";
import SweetAlert from "sweetalert-react";
import { renderToStaticMarkup } from "react-dom/server";
import Spinner from "react-bootstrap/Spinner";

function Dashboard(props) {
  // default values
  const { getCurrentUser, declineAdmission } = useUser();
  const { resendVerificationEmail } = useAuth();
  const { dashboardUser, updateDashboardUser } = useDashboardUser();
  const { getPublicSettings } = useSettings();
  const [showStatus, setShowStatus] = useState({
    showConfirm: false,
    showError: false,
    errorMessage: ""
  });

  useEffect(() => {
    getCurrentUser()
      .then(response => {
        getPublicSettings()
          .then(settingData => {
            updateDashboardUser(response.data, settingData.data);
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  function handleResendVerifyEmail() {
    resendVerificationEmail()
      .then(res => {
        setShowStatus({
          showConfirm: true,
          showError: false,
          errorMessage: ""
        });
        console.log("done resending!");
      })
      .catch(err => {
        setShowStatus({
          showConfirm: false,
          showError: true,
          errorMessage: "Something went wrong.."
        });

        console.log(err);
      });
  }

  function handleDeclineAdmission(id) {
    declineAdmission(id)
      .then(response => {
        console.log(response);
        if (response.data) {
          updateDashboardUser(response.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  const { showConfirm, showError, errorMessage } = showStatus;
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1 className="dashboard-header">Dashboard</h1>
        <Status
          dashboardUser={dashboardUser}
          handleResendVerifyEmail={handleResendVerifyEmail}
          handleDeclineAdmission={handleDeclineAdmission}
        />
      </div>
      <SweetAlert
        show={showConfirm}
        title="Awesome!"
        type="success"
        text="We sent another email!"
        onConfirm={() => {
          setShowStatus({
            showConfirm: false,
            showError: false,
            errorMessage: ""
          });
        }}
      />
      <SweetAlert
        show={showError}
        title="Uh oh!"
        type="error"
        text={errorMessage}
        onConfirm={() => {
          setShowStatus({
            showConfirm: false,
            showError: false,
            errorMessage: ""
          });
        }}
      />
    </div>
  );
}

export default Dashboard;
