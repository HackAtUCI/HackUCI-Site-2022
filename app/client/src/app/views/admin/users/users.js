import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

export default function Admin(props) {
  console.log("?? got here");

  return (
    <div>
      <h1>GOD MODE</h1>

      <div>
        <div className="button-container">
          <Link to="/admin/stats">Stats</Link>
        </div>
        <div className="button-container">
          <Link to="/admin/users">Users</Link>
        </div>
        <div className="button-container">
          <Link to="/admin/user">User</Link>
        </div>
        <div className="button-container">
          <Link to="/admin/settings">Settings</Link>
        </div>
        <div className="button-container">
          <Link to="/admin/queue">Queue</Link>
        </div>
      </div>
    </div>
  );
}
