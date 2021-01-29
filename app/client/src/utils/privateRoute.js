import React from "react";
import { Redirect, Route } from "react-router-dom";

import useUser from "hooks/useUser";
import useAuth from "hooks/useAuth";

const LOGIN_PATH = "/login";

// wrapper for React Router <Route> which requires user to be logged in
// specify children instead of component property
function PrivateRoute({ children, checkWaiver }) {
  const { isLoggedIn } = useAuth();
  const { getCurrentUser } = useUser();

  let waiverSigned = false;

  getCurrentUser()
    .then(response => {
      waiverSigned = response.data.confirmation.signatureLiability !== "";
    })
    .catch(err => {
      console.log("could not resolve user:", err);
    });

  const authorized = isLoggedIn && (!checkWaiver || waiverSigned);

  return (
    <Route
      render={({ location }) =>
        authorized ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: LOGIN_PATH,
              state: { referrer: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
