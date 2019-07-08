import React from "react";

import Status from "./status/Status.js";

import "./dashboard.scss";

function Dashboard(props) {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-header">DASHBOARD</h1>
        <Status />
      </div>
    </div>
  );
}

export default Dashboard;
