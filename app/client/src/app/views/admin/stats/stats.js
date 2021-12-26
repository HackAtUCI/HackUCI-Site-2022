import React, { useState, useEffect } from "react";
import moment from "moment";
import useUser from "hooks/useUser";

import AdminNavbar from "../adminNavbar/adminNavbar";

import "../admin.scss";

export default function Stats(props) {
  const [stats, setStats] = useState({});
  const { getStats } = useUser();

  useEffect(() => {
    getStats()
      .then(response => {
        console.log(response);
        setStats(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const fromNow = function(date) {
    return moment(date).fromNow();
  };

  const sortByCount = function(obj) {
    obj.sort(function(a, b) {
      return b.count - a.count;
    });
    return obj;
  };

  return (
    <div>
      <AdminNavbar />
      {Object.keys(stats).length > 0 ? (
        <div id="stats">
          <div class="ui green segment" ng-class="{'loading': loading}">
            <h1>Stats</h1>
            <div class="content">
              <em> Last updated: {fromNow(stats.lastUpdated)}</em>
              <div class="ui list">
                <div class="item">
                  <i class="green circle check icon"></i>
                  <div class="content">
                    <strong>Total Users </strong> :{stats.total}
                  </div>
                </div>
                <div class="item">
                  <i class="green circle check icon"></i>
                  <div class="content">
                    <strong>Verified Users </strong> :{stats.verified} (
                    {((stats.verified / stats.total) * 100).toFixed(1)}%)
                  </div>
                </div>
                <div class="item">
                  <i class="green circle check icon"></i>
                  <div class="content">
                    <strong>Submitted Users </strong> :{stats.submitted} (
                    {((stats.submitted / stats.total) * 100).toFixed(1)}%)
                  </div>
                </div>
                <div class="ui divider"></div>
                <div class="item">
                  <i class="green circle check icon"></i>
                  <div class="content">
                    <strong>Admitted </strong> :{stats.admitted}
                  </div>
                </div>
                <div class="item">
                  <i class="green circle check icon"></i>
                  <div class="content">
                    <strong>Confirmed (Total) </strong> :{stats.confirmed}
                  </div>
                </div>
                <div class="item">
                  <i class="green circle check icon"></i>
                  <div class="content">
                    <strong>Confirmed (UCI) </strong> :{stats.confirmedUCI}
                  </div>
                </div>
                <div class="item">
                  <i class="circle red icon"></i>
                  <div class="content">
                    <strong>Declined </strong> :{stats.declined}
                  </div>
                </div>

                <div class="item">
                  <i class="green flag icon"></i>
                  <div class="content">
                    <strong>Checked In </strong> :{stats.checkedIn}
                  </div>
                </div>

                <div class="ui divider"></div>

                <div class="item">
                  <i class="child icon"></i>
                  <div class="content">
                    <strong>Unisex shirt sizes: </strong> : XS (
                    {stats.shirtSizes["XS"]}) S ({stats.shirtSizes["S"]}) M (
                    {stats.shirtSizes["M"]}) L ({stats.shirtSizes["L"]}) XL (
                    {stats.shirtSizes["XL"]}) XXL ({stats.shirtSizes["XXL"]})
                  </div>
                </div>

                <div class="ui divider"></div>

                <div class="item">
                  <i class="food icon"></i>
                  <div class="content">
                    <strong>Dietary Restrictions: </strong>
                    {sortByCount(stats.dietaryRestrictions).map(
                      (restriction, _) => {
                        return (
                          <span>
                            {restriction.name} ({restriction.count})
                          </span>
                        );
                      }
                    )}
                  </div>
                </div>
                <div class="ui divider"></div>

                <div class="item">
                  <i class="money icon"></i>
                  <div class="content">
                    <strong>Require Transportation </strong> :
                    {stats.requireTransportation}
                  </div>
                </div>

                <div class="item">
                  <i class="fa-pencil-square-o icon"></i>
                  <div class="content">
                    <strong>Signed Waiver </strong> :{stats.signedWaiver} (
                    {((stats.signedWaiver / stats.confirmed) * 100).toFixed(1)}
                    %)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="ui pink segment" ng-class="{'loading': loading}">
            <h2>Demographics</h2>
            <div class="ui list">
              <div class="item">
                <i class="users icon"></i>
                <div class="content">
                  <strong>Total users</strong>: {stats.total}
                </div>
              </div>
              <div class="item">
                <i class="female icon"></i>
                <div class="content">
                  <strong>She, Her, Hers</strong>: {stats.demo.pronouns["F"]} (
                  {((stats.demo.pronouns["F"] / stats.total) * 100).toFixed(1)}
                  %)
                </div>
              </div>
              <div class="item">
                <i class="male icon"></i>
                <div class="content">
                  <strong>He, Him, His</strong>: {stats.demo.pronouns["M"]} (
                  {((stats.demo.pronouns["M"] / stats.total) * 100).toFixed(1)}
                  %)
                </div>
              </div>
              <div class="item">
                <i class="other gender icon"></i>
                <div class="content">
                  <strong>They, Them, Theirs</strong>:{" "}
                  {stats.demo.pronouns["T"]} (
                  {((stats.demo.pronouns["T"] / stats.total) * 100).toFixed(1)}
                  %)
                </div>
              </div>
              <div class="item">
                <i class="other gender icon"></i>
                <div class="content">
                  <strong>Ze, Zir, Zirs</strong>: {stats.demo.pronouns["X"]} (
                  {((stats.demo.pronouns["X"] / stats.total) * 100).toFixed(1)}
                  %)
                </div>
              </div>
              <div class="item">
                <i class="other gender icon"></i>
                <div class="content">
                  <strong>Other</strong>: {stats.demo.pronouns["O"]} (
                  {((stats.demo.pronouns["O"] / stats.total) * 100).toFixed(1)}
                  %)
                </div>
              </div>
              <div class="item">
                <i class="question icon"></i>
                <div class="content">
                  <strong>Did not respond</strong>: {stats.demo.pronouns["N"]} (
                  {((stats.demo.pronouns["N"] / stats.total) * 100).toFixed(1)}
                  %)
                </div>
              </div>
            </div>
            <div class="ui divider"></div>
            <h1>Graduation Year</h1>
            <div class="ui list">
              {Object.keys(stats.demo.year).map((key, _) => {
                return (
                  <div class="item">
                    <strong>{key}:</strong> {stats.demo.year[key]} (
                    {((stats.demo.year[key] / stats.total) * 100).toFixed(1)}%)
                  </div>
                );
              })}
            </div>
            <div class="ui divider"></div>
            <div class="ui list">
              {sortByCount(stats.demo.schools).map((school, _) => {
                return (
                  <div class="content">
                    <strong>{school.email}</strong> : {school.count} (
                    {((school.count / stats.total) * 100).toFixed(1)}%)
                    <p>
                      <div class="ui purple mini label">
                        Submitted: {school.stats.submitted}
                      </div>
                      <div class="ui pink mini label">
                        Admitted: {school.stats.admitted}
                      </div>
                      <div class="ui green mini label">
                        Confirmed: {school.stats.confirmed}
                      </div>
                      <div class="ui red mini label">
                        Declined: {school.stats.declined}
                      </div>
                    </p>
                    <div class="ui divider"></div>
                  </div>
                );
              })}
            </div>
          </div>

          <div class="ui purple segment" ng-class="{'loading': loading}">
            <h1>Majors</h1>
            <div class="ui list">
              {sortByCount(stats.demo.majors).map((major, _) => {
                return (
                  <div class="content">
                    <strong>{major.name}</strong> : {major.count} (
                    {((major.count / stats.total) * 100).toFixed(1)}%)
                    <p>
                      <div class="ui purple mini label">
                        Submitted: {major.stats.submitted}
                      </div>
                      <div class="ui pink mini label">
                        Admitted: {major.stats.admitted}
                      </div>
                      <div class="ui green mini label">
                        Confirmed: {major.stats.confirmed}
                      </div>
                      <div class="ui red mini label">
                        Declined: {major.stats.declined}
                      </div>
                    </p>
                    <div class="ui divider"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
