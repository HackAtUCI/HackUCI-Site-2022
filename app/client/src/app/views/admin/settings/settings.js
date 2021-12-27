import React, { useState, useEffect } from "react";
import moment from "moment";
import useSettings from "hooks/useSettings";

import AdminNavbar from "../adminNavbar/adminNavbar";

import "../admin.scss";

export default function Settings(props) {
  const { settings, updateSettings } = useSettings();
  const [whitelist, setWhitelist] = useState({});

  const {
    getPublicSettings,
    updateRegistrationTimes,
    updateConfirmationTime,
    getWhitelistedEmails,
    updateWhitelistedEmails,
    updateWaitlistText,
    updateAcceptanceText,
    updateConfirmationText,
    updateAllowMinors
  } = useSettings();

  useEffect(() => {
    getPublicSettings()
      .then(settingData => {
        getWhitelistedEmails().then(whitelistData => {
          setWhitelist(whitelistData.data);
        });
        updateSettings(settingData.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const formatDate = function(date) {
    if (!date) {
      return "Invalid Date";
    }
    var d = new Date(date);

    // Hack for timezone
    return (
      moment(d).format("dddd, MMMM Do YYYY, h:mm a") +
      " " +
      d.toTimeString().split(" ")[2]
    );
  };

  return (
    <div>
      <AdminNavbar />
      {Object.keys(settings).length > 0 ? (
        <div>
          <div class="ui stackable two column grid">
            <div class="column">
              <div ng-class="{'loading': loading}" class="ui red segment">
                <div class="ui form">
                  <div class="ui header">Open/Close Registration</div>

                  <p>
                    Users will be able to register new accounts within the time
                    period specified.
                  </p>

                  <div class="field">
                    <label>Opens: {formatDate(settings.timeOpen)}</label>
                    <input type="datetime-local" value={settings.timeOpen} />
                  </div>

                  <div class="field">
                    <label>Closes: {formatDate(settings.timeClose)}</label>
                    <input type="datetime-local" value={settings.timeClose} />
                  </div>

                  <div class="ui field">
                    <button
                      class="ui green button"
                      onClick={() =>
                        updateRegistrationTimes(
                          settings.timeOpen,
                          settings.timeClose
                        )
                      }
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div ng-class="{'loading': loading}" class="ui orange segment">
                <div class="ui form">
                  <div class="ui header">Confirmation Date</div>

                  <p>
                    Any users that are accepted will have to confirm by the date
                    selected.
                  </p>

                  <div class="field">
                    <label>
                      Confirm By: {formatDate(settings.timeConfirm)}
                    </label>
                    <input type="datetime-local" value={settings.timeConfirm} />
                  </div>

                  <div class="ui field">
                    <button
                      class="ui green button"
                      onClick={() =>
                        updateConfirmationTime(settings.timeConfirm)
                      }
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ng-class="{'loading': loading}" class="ui green segment">
            <div class="ui header">Additional Options</div>

            <div class="column">
              <div class="ui form">
                <div class="grouped fields">
                  <div class="field">
                    <div class="ui toggle checkbox">
                      <input
                        type="checkbox"
                        name="allowMinors"
                        value={settings.allowMinors}
                        onClick={updateAllowMinors(settings.allowMinors)}
                      />
                      <label>Allow minors</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ng-class="{'loading': loading}" class="ui green segment">
            <div class="ui header">Whitelisted Emails</div>

            <div class="ui form">
              {Object.values(whitelist).map((email, _) => {
                return <div class="ui label">{email}</div>;
              })}
              <br />
              <br />
              <div class="field">
                <textarea
                  class="ui input"
                  type="text"
                  value={Object.values(whitelist).join()}
                ></textarea>
              </div>
              <div class="field">
                <button
                  class="ui green button"
                  onClick={() => updateWhitelistedEmails()}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
          <div class="divider" />

          <div ng-class="{'loading': loading}" class="ui blue segment">
            <div class="ui header">Waitlist Text</div>
            <div class="ui stackable two column grid">
              <div class="column">
                <div class="ui form">
                  <div class="field">
                    <textarea
                      class="ui input"
                      type="text"
                      value={settings.waitlistText}
                      onChange={e => {
                        updateSettings({
                          ...settings,
                          ...{ waitlistText: e.target.value }
                        });
                      }}
                    ></textarea>
                  </div>
                  <div class="field">
                    <button
                      class="ui green button"
                      onClick={() => updateWaitlistText(settings.waitlistText)}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
              <div class="column">
                <div
                  class="preview ui segment"
                  ng-bind-html="markdownPreview(settings.waitlistText)"
                ></div>
              </div>
            </div>
          </div>
          <div class="divider" />

          <div ng-class="{'loading': loading}" class="ui pink segment">
            <div class="ui header">Acceptance Text</div>
            <div class="ui stackable two column grid">
              <div class="column">
                <div class="ui form">
                  <div class="field">
                    <textarea
                      class="ui input"
                      type="text"
                      value={settings.acceptanceText}
                      onChange={e => {
                        updateSettings({
                          ...settings,
                          ...{ acceptanceText: e.target.value }
                        });
                      }}
                    ></textarea>
                  </div>
                  <div class="field">
                    <button
                      class="ui green button"
                      onClick={() =>
                        updateAcceptanceText(settings.acceptanceText)
                      }
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
              <div class="column">
                <div
                  class="preview ui segment"
                  ng-bind-html="markdownPreview(settings.acceptanceText)"
                ></div>
              </div>
            </div>
          </div>
          <div class="divider" />

          <div ng-class="{'loading': loading}" class="ui orange segment">
            <div class="ui header">Confirmation Text</div>
            <div class="ui stackable two column grid">
              <div class="column">
                <div class="ui form">
                  <div class="field">
                    <textarea
                      class="ui input"
                      type="text"
                      value={settings.confirmationText}
                      onChange={e => {
                        updateSettings({
                          ...settings,
                          ...{ confirmationText: e.target.value }
                        });
                      }}
                    ></textarea>
                  </div>
                  <div class="field">
                    <button
                      class="ui green button"
                      onClick={() =>
                        updateConfirmationText(settings.confirmationText)
                      }
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
              <div class="column">
                <div
                  class="preview ui segment"
                  ng-bind-html="markdownPreview(settings.confirmationText)"
                ></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
