import React, { useEffect } from "react";

import useUser from "../../../hooks/useUser";
import useAuth from "../../../hooks/useAuth";
import useDashboardUser from "../../../hooks/useDashboardUser";
import useSettings from "../../../hooks/useSettings";

import Status from "./status/status.js";

import "./dashboard.scss";

function Dashboard(props) {
  // default values
  const { getCurrentUser, declineAdmission } = useUser();
  const { isLoggedIn, resendVerificationEmail } = useAuth();
  const { dashboardUser, updateDashboardUser } = useDashboardUser();
  const { getPublicSettings } = useSettings();

  useEffect(() => {
    // if (!isLoggedIn) {
    //   props.history.push("/login");
    // }

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
        <h1 className="dashboard-header" />
        <Status
          dashboardUser={dashboardUser}
          handleResendVerifyEmail={handleResendVerifyEmail}
          handleDeclineAdmission={handleDeclineAdmission}
        />
      </div>
    </div>
  );
}

export default Dashboard;
