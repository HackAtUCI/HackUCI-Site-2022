import React from "react";
import ScrollspyNav from "utils/scrollspyNav";
import Nav from "react-bootstrap/Nav";

import "./scheduleNavigation.scss";

function ScheduleNavigation() {
  return (
    <div className="schedule-navigation" style={{ zIndex: "10" }}>
      <h2>All Events</h2>
      <Nav justify variant="pills" className="schedule-navbar">
        <ScrollspyNav
          scrollTargetIds={["friday", "saturday", "sunday"]}
          offset={-250}
          activeNavClass="active"
          scrollDuration="1000"
          headerBackground="true"
          className="hoist"
        >
          <ScrollspyNav scrollTargetIds={["current"]} className="hoist">
            <Nav.Item>
              <Nav.Link href="#current">Current</Nav.Link>
            </Nav.Item>
          </ScrollspyNav>

          <Nav.Item>
            <Nav.Link href="#friday">Fri</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#saturday">Sat</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#sunday">Sun</Nav.Link>
          </Nav.Item>
        </ScrollspyNav>
      </Nav>
    </div>
  );
}

export default ScheduleNavigation;
