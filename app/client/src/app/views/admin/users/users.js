import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import AdminNavbar from "../adminNavbar/adminNavbar";

export default function Users(props) {
  return (
    <div>
      <AdminNavbar />

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
