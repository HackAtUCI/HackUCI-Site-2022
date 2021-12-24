import React, { useState, useEffect } from "react";
import useUser from "hooks/useUser";

import Button from "react-bootstrap/Button";

import AdminNavbar from "../adminNavbar/adminNavbar";

export default function Queue(props) {
  const { getQueue, acceptQueue, removeQueue } = useUser();
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({});

  useEffect(() => {
    getQueue()
      .then(response => {
        console.log(response);
        setUsers(response.data.users);
        setStats(response.data.stats);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <AdminNavbar />
      {Object.keys(stats).length > 0 ? (
        <div>
          <h1>Queue</h1>

          <div id="queue">
            <div class="ui segment">
              <div class="ui header">Pronouns</div>
              <div class="ui list">
                <div class="item">
                  <i class="users icon"></i>
                  <div class="content">
                    <strong>Total users</strong>: {users.length}
                  </div>
                </div>
                <div class="item">
                  <i class="female icon"></i>
                  <div class="content">
                    <strong>She, Her, Hers</strong>: {stats.pronouns["F"]} (
                    {users.length &&
                      ((stats.pronouns["F"] / users.length) * 100).toFixed(1)}
                    %)
                  </div>
                </div>
                <div class="item">
                  <i class="male icon"></i>
                  <div class="content">
                    <strong>He, Him, His</strong>: {stats.pronouns["M"]} (
                    {users.length &&
                      ((stats.pronouns["M"] / users.length) * 100).toFixed(1)}
                    %)
                  </div>
                </div>
                <div class="item">
                  <i class="other gender icon"></i>
                  <div class="content">
                    <strong>They, Them, Theirs</strong>: {stats.pronouns["T"]} (
                    {((stats.pronouns["T"] / users.length) * 100).toFixed(1)}%)
                  </div>
                </div>
                <div class="item">
                  <i class="other gender icon"></i>
                  <div class="content">
                    <strong>Ze, Zir, Zirs</strong>: {stats.pronouns["X"]} (
                    {users.length &&
                      ((stats.pronouns["X"] / users.length) * 100).toFixed(1)}
                    %)
                  </div>
                </div>
                <div class="item">
                  <i class="other gender icon"></i>
                  <div class="content">
                    <strong>Other</strong>: {stats.pronouns["O"]} (
                    {users.length &&
                      ((stats.pronouns["O"] / users.length) * 100).toFixed(1)}
                    %)
                  </div>
                </div>
                <div class="item">
                  <i class="question icon"></i>
                  <div class="content">
                    <strong>Did not respond</strong>: {stats.pronouns["N"]}{" "}
                    {users.length &&
                      ((stats.pronouns["N"] / users.length) * 100).toFixed(1)}
                    %)
                  </div>
                </div>
              </div>
              <div class="ui divider"></div>
              <div class="ui header">Graduation Year</div>
              <div class="ui list">
                <div class="item" ng-repeat="(key, value) in stats.year">
                  {Object.keys(stats.year).map((key, value) => (
                    <div>
                      <strong>{key}:</strong>
                      {value} ({((value / users.length) * 100).toFixed(1)}%)
                    </div>
                  ))}
                </div>
              </div>
              <div class="ui divider"></div>
              <div class="ui header">School</div>
              <div class="ui list">
                <div class="item" ng-repeat="(key, value) in stats.school">
                  {Object.keys(stats.school).map((key, value) => (
                    <div class="content">
                      <strong>{key}:</strong>
                      {value} ({((value / users.length) * 100).toFixed(1)}%)
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div class="ui segment">
              <div id="table-container" class="thirteen wide column">
                <div class="ui header">Users in Queue</div>
                <Button
                  class="ui violet button"
                  onClick={() => acceptQueue()}
                  active={users.length > 0}
                >
                  Accept Queue
                </Button>

                <div class="ui form">
                  <div class="field">
                    <div class="ui icon fluid input">
                      <input
                        type="text"
                        placeholder="Search..."
                        ng-model="queryText"
                        ng-model-options="{debounce: 300}"
                      />
                      <i class="search icon"></i>
                    </div>
                  </div>
                </div>
                <table class="ui celled selectable compact users table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Pronouns</th>
                      <th>School</th>
                      <th>Grad</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  {/* <tbody>
                <tr
                  ng-repeat="user in displayedUsers track by $index"
                  ng-if="user.status.queued"
                  ng-class="rowClass(user)"
                  ng-click="goUser($event, user)"
                >
                  <td>
                    <strong>
                      {user.profile.name}
                      &nbsp;
                    </strong>
                  </td>
                  <td>{user.profile.pronouns}</td>
                  <td>{user.profile.school}</td>
                  <td class="collapsing">{user.profile.graduationYear}</td>
                  <td class="collapsing">
                    <Button
                      class="accept ui circular mini basic red icon button center"
                      onClick={() => removeQueue(user._id)}
                    >
                      <i class="trash alternate icon"></i>
                    </Button>
                  </td>
                </tr>
              </tbody> */}
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
