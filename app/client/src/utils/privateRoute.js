import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";

import useUser from "hooks/useUser";
import useAuth from "hooks/useAuth";
import useDashboardUser from "hooks/useDashboardUser";
import useSettings from "hooks/useSettings";

// wrapper for React Router <Route> which requires user to be logged in
// specify children instead of component property
function PrivateRoute({ children, checkWaiver }) {
  const { isLoggedIn } = useAuth();
  const { getCurrentUser } = useUser();
  const { dashboardUser, updateDashboardUser } = useDashboardUser();
  const { getPublicSettings } = useSettings();

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
  }, [getCurrentUser, getPublicSettings, updateDashboardUser]);

  let willRedirect = false;

  if (checkWaiver) {
    willRedirect = isLoggedIn && dashboardUser.waiverSigned;
  } else {
    willRedirect = isLoggedIn;
  }

  return (
    <Route
      render={({ location }) =>
        willRedirect ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { referrer: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
