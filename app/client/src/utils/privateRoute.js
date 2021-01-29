import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";

import useUser from "hooks/useUser";
import useAuth from "hooks/useAuth";

const LOGIN_PATH = "/login";

// wrapper for React Router <Route> which requires user to be logged in
// specify children instead of component property
function PrivateRoute({ children, checkWaiver }) {
  const { isLoggedIn } = useAuth();
  const { getCurrentUser } = useUser();
  const [authenticated, setAuthenticated] = useState(isLoggedIn);

  useEffect(() => {
    if (checkWaiver) {
      getCurrentUser()
        .then(response => {
          let waiverSigned =
            response.data.confirmation.signatureLiability !== "";

          if (!waiverSigned) {
            setAuthenticated(false);
          }
        })
        .catch(err => {
          console.log("could not resolve user:", err);
        });
    }
  }, []);

  useEffect(() => {
    console.log("Authenticated", authenticated);
  }, [authenticated]);

  return (
    <Route
      render={({ location }) => (
        <>
          {children}
          {!authenticated ? (
            <Redirect
              to={{
                pathname: LOGIN_PATH,
                state: { referrer: location }
              }}
            />
          ) : null}
        </>
      )}
    />
  );
}

export default PrivateRoute;
