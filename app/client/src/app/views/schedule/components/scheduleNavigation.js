import React from "react";
import ScrollspyNav from "utils/scrollspyNav";
import Nav from "react-bootstrap/Nav";

import "./scheduleNavigation.scss";

function ScheduleNavigation() {
  return (
    <div className="schedule-navigation" style={{ zIndex: "10" }}>
      <div className="navigation-container">
        <span className="navigation-title">HackUCI Schedule </span>
        <Nav justify className="schedule-navbar">
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
              <Nav.Link href="#friday" aria-label="Friday">
                FRI
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#saturday" aria-label="Saturday">
                SAT
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#sunday" aria-label="Sunday">
                SUN
              </Nav.Link>
            </Nav.Item>
          </ScrollspyNav>
        </Nav>
      </div>
    </div>
  );
}

export default ScheduleNavigation;
