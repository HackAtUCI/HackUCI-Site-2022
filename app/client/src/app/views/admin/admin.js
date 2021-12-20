import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

export default function Admin(props) {
  return (
    <div>
      <h1>GOD MODE</h1>

      <div>
        <Link to="/admin/stats">Stats</Link>
        <Link to="/admin/users">Users</Link>
        <Link to="/admin/settings">Settings</Link>
        <Link to="/admin/queue">Queue</Link>
      </div>
    </div>
  );
}
