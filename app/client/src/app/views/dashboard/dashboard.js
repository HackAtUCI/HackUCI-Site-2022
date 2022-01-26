import React, { useEffect, useState } from "react";

import useUser from "hooks/useUser";
import useAuth from "hooks/useAuth";
import useDashboardUser from "hooks/useDashboardUser";
import useSettings from "hooks/useSettings";

import Status from "./status/status.js";

import "./dashboard.scss";
import SweetAlert from "sweetalert-react";

function Dashboard(props) {
  // default values
  const { getCurrentUser, declineAdmission } = useUser();
  const { resendVerificationEmail } = useAuth();
  const { dashboardUser, updateDashboardUser } = useDashboardUser();
  const { getPublicSettings } = useSettings();
  const [showConfirm, setShowConfirm] = useState(false);

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
        setShowConfirm(true);
        console.log("done resending");
      })
      .catch(err => {
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
        text="Successfully sent the email."
        showConfirmButton={false}
      />
    </div>
  );
}

export default Dashboard;
