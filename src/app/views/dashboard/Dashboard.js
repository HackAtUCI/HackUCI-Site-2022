import React from "react";

import Status from "./status/Status.js";

import "./dashboard.scss";

function Dashboard(props) {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1 className="dashboard-header">DASHBOARD</h1>
        <Status />
      </div>
    </div>
  );
}

export default Dashboard;
