import React, { useState, useEffect } from "react";

import useAuth from "../../../hooks/useAuth";

import { Link } from "react-router-dom";

export default function Admin(props) {
  const { isLoggedIn, user, register } = useAuth();

  useEffect(() => {
    if (!isLoggedIn && user) {
      props.history.push("/login");
    }
  }, [isLoggedIn, props.history, user]);

  return (
    <div className="hack-form-container">
      <div class="divided title">GOD MODE</div>

      <div class="ui three item menu">
        <Link to="/admin/stats">Stats</Link>
        <Link to="/admin/users">Users</Link>
        <Link to="/admin/settings">Settings</Link>
        <Link to="admin/queue">Queue</Link>
      </div>
    </div>
  );
}
