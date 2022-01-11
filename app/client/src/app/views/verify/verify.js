import React, { useState, useEffect } from "react";

import useAuth from "hooks/useAuth";

import Check from "assets/images/site/Check.svg";
import Cross from "assets/images/site/Cross.svg";

import "./verify.scss";

export default function Verify(props) {
  const [verified, setVerified] = useState(false);
  const { verify } = useAuth();
  console.log("hay");

  useEffect(() => {
    function verifyCall(token) {
      console.log(token);

      verify(token)
        .then(data => {
          if (data["data"]["email"]) {
            setVerified(true);
          }
        })
        .catch(err => {
          setVerified(false);
        });
    }
    verifyCall(props.match.params.token);
  }, [props.match.params.token]);

  return (
    <div className="verify-container">
      <div className="verify-header"> Email Verification </div>
      <div className="content">
        {verified ? (
          <div>
            <img className="icon" src={Check} alt="Check" />
            <div className="description-text">
              Your email has been verified!
            </div>
            <a href="/dashboard">Continue to Dashboard</a>
          </div>
        ) : (
          <div>
            <img className="icon" src={Cross} alt="Cross" />
            <div className="description-text">This token is invalid</div>
          </div>
        )}
      </div>
    </div>
  );
}
