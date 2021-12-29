import React, { useState, useEffect } from "react";
import useUser from "hooks/useUser";

import AdminNavbar from "../adminNavbar/adminNavbar";
import { generateSections } from "./users_helpers.js";

export default function Users(props) {
  const { getPage } = useUser();
  const {
    sendConfirmedEmail,
    sendAdmittedEmail,
    sendWaiverEmail,
    queueUnadmitted
  } = useUser;
  // const [size, setSize] = useState();
  const [page, setPage] = useState();
  const [users, setUsers] = useState();
  const [query, setQuery] = useState();

  const [selectedUser, setSelectedUser] = useState();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setPage(params.get("page"));
    getPage(params.get("page"), params.get("size"), "").then(response => {
      setUsers(response.data.users);
    });
  }, []);

  const selectUser = user => {
    user.sections = generateSections(user);
    setSelectedUser(user);
    console.log(user);
  };

  const updateTable = e => {
    setQuery(e.target.value);
    const params = new URLSearchParams(window.location.search);
    getPage(page, params.get("size"), e.target.value).then(response => {
      setUsers(response.data.users);
    });
  };

  return (
    <div>
      <AdminNavbar />
      {users ? (
        <div class="ui segment">
          <div class="ui stackable grid">
            <div class="three wide column">
              <div class="ui header">Search</div>
              <div class="ui form">
                <div class="field">
                  <div class="ui icon fluid input">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={query}
                      onChange={updateTable}
                    />
                    <i class="search icon"></i>
                  </div>
                </div>
              </div>

              <div class="ui divider"></div>

              <button
                ng-repeat="page in pages"
                ng-class="page == currentPage ? 'active pink' : ''"
                ng-click="goToPage(page)"
                class="ui icon basic page button"
              >
                {page}
              </button>
            </div>
            <div id="table-container" class="thirteen wide column">
              <div class="ui header">Users</div>
              {users.length > 0 && (
                <div>
                  <button
                    class="ui violet button"
                    onClick={e => sendConfirmedEmail(e)}
                  >
                    Email All Confirmed Users
                  </button>
                  <button
                    class="ui violet button"
                    onClick={e => sendAdmittedEmail(e)}
                  >
                    Email All Admitted Users
                  </button>
                  <button
                    class="ui violet button"
                    onClick={e => queueUnadmitted(e)}
                  >
                    Queue All Unadmitted Users
                  </button>
                </div>
              )}
              {selectedUser ? (
                <div class="ui long user modal">
                  <i class="close icon"></i>
                  <div class="header">
                    {selectedUser.profile.name
                      ? selectedUser.profile.name
                      : selectedUser.email}
                    <span ng-show="selectedUser.admin">(Admin)</span>
                  </div>
                  <div class="content">
                    <div>
                      <div class="ui header">
                        Status:
                        <div class="ui label">
                          {selectedUser.status.name.toUpperCase()}
                        </div>
                      </div>
                      <p>
                        <strong> Admitted by: </strong>{" "}
                        {selectedUser.status.admittedBy
                          ? selectedUser.status.admittedBy
                          : "N/A"}
                      </p>
                    </div>
                    {Object.values(selectedUser.sections).map((section, _) => {
                      return (
                        <div>
                          <div class="ui divider"></div>

                          <h3>{section.title}</h3>

                          {Object.values(section.fields).map((field, _) => {
                            return (
                              <p>
                                <strong> {field.name}: </strong>
                                {field.type === "boolean" && (
                                  <span>
                                    {field.value ? (
                                      <i class="green circle check icon" />
                                    ) : (
                                      <i class="red circle remove icon" />
                                    )}
                                  </span>
                                )}

                                {field.type === "link" && (
                                  <a href={field.value} target="_blank">
                                    {field.text}
                                  </a>
                                )}

                                {field.type === "click" &&
                                  // <a href="#" onClick={resolveClick(field.value)}>
                                  field.text
                                // </a>
                                }

                                {field.type === null && (
                                  <span>{field.value}</span>
                                )}
                              </p>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>

                  <div class="actions">
                    <div class="ui positive right labeled icon button">
                      Nothing
                      <i class="checkmark icon"></i>
                    </div>
                  </div>
                </div>
              ) : (
                <div />
              )}

              <table class="ui celled selectable compact users table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>E-mail address</th>
                    <th>School</th>
                    <th>Grad</th>
                    <th>V/S/Q/A/C</th>
                    <th>W</th>
                    <th>R</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => {
                    return (
                      <tr
                        onClick={() => selectUser(user)}
                        ng-class="rowClass(user)"
                      >
                        <td>
                          <strong>{user.profile.name} &nbsp;</strong>
                        </td>
                        <td>{user.email}</td>
                        <td>{user.profile.school}</td>
                        <td class="collapsing">
                          {user.profile.graduationYear}
                        </td>
                        <td class="collapsing">
                          <i
                            ng-if="user.verified"
                            class="green check circle icon"
                          >
                            {" "}
                          </i>
                          <i
                            ng-if="!user.verified"
                            class="red remove circle icon"
                          >
                            {" "}
                          </i>

                          <i
                            ng-if="user.status.completedProfile"
                            class="green check circle icon"
                          ></i>
                          <i
                            ng-if="!user.status.completedProfile"
                            class="red remove circle icon"
                          ></i>

                          <i
                            ng-if="user.status.queued"
                            class="green check circle icon"
                          ></i>
                          <i
                            ng-if="!user.status.queued"
                            class="thin circle icon"
                          >
                            {" "}
                          </i>

                          <i
                            ng-if="user.status.admitted"
                            class="green check circle icon"
                          ></i>
                          <i
                            ng-if="!user.status.admitted"
                            class="thin circle icon"
                          >
                            {" "}
                          </i>

                          <i
                            ng-if="!user.status.admitted"
                            class="circle thin icon"
                          >
                            {" "}
                          </i>
                          <i
                            ng-if="user.status.admitted and user.status.confirmed"
                            class="green check circle icon"
                          ></i>
                          <i
                            ng-if="user.status.admitted and !user.status.confirmed and !user.status.declined"
                            class="question icon"
                          ></i>
                          <i
                            ng-if="user.status.admitted and user.status.declined"
                            class="red remove circle icon"
                          ></i>
                        </td>

                        <td class="collapsing">
                          <span ng-if="user.status.confirmed">
                            <i
                              ng-if="user.confirmation.signatureLiability"
                              class="green check circle icon"
                            ></i>
                            <i
                              ng-if="!user.confirmation.signatureLiability"
                              class="red remove circle icon"
                            ></i>
                          </span>
                        </td>

                        <td class="collapsing">
                          <span ng-if="user.status.confirmed">
                            <i
                              ng-if="user.confirmation.needsReimbursement"
                              class="green check circle icon"
                            ></i>
                            <i
                              ng-if="!user.confirmation.needsReimbursement"
                              class="red remove circle icon"
                            ></i>
                          </span>
                        </td>

                        <td class="collapsing">
                          <button
                            ng-click="goUser($event, user)"
                            class="ui circular mini basic icon button"
                          >
                            <i class="linkify icon"></i>
                          </button>
                        </td>

                        <td class="right aligned collapsing">
                          <button
                            class="accept ui circular mini basic icon button"
                            ng-click="toggleQueue($event, user, $index)"
                            ng-if="!user.status.admitted"
                          >
                            <i
                              ng-if="user.status.queued"
                              class="red thumbs down icon"
                            ></i>

                            <i
                              ng-if="!user.status.queued"
                              class="thumbs up icon"
                            ></i>
                          </button>

                          <button
                            class="accept ui circular mini basic green icon button"
                            ng-click="acceptUser($event, user, $index)"
                          >
                            <i class="add user icon"></i>
                          </button>

                          <button
                            ng-click="toggleCheckIn($event, user, $index)"
                            class="ui circular mini basic green icon button"
                          >
                            <i
                              ng-if="!user.status.checkedIn"
                              class="flag outline icon"
                            ></i>

                            <i
                              ng-if="user.status.checkedIn"
                              class="green flag icon"
                            ></i>
                          </button>

                          <button
                            class="ui circular mini basic green icon button"
                            onClick={e => sendWaiverEmail(e, index)}
                          >
                            <i class="envelope outline icon"></i>
                          </button>

                          <button
                            class="ui circular mini basic green icon button"
                            ng-click="markWaiverAsSigned($event, user, $index)"
                            ng-if="!user.confirmation.signatureLiability"
                          >
                            <i class="edit outline icon"></i>
                          </button>

                          <button
                            class="ui circular mini basic green icon disabled button"
                            ng-if="user.confirmation.signatureLiability"
                          >
                            <i class="edit outline icon"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                  ;
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
