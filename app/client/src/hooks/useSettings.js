import { useState } from "react";

import { convertUnixTimestampToDateTime } from "utils/date";

import * as routes from "globals/hackEndpoints";
import * as api from "utils/api";

const useSettings = () => {
  const [settings, setSettings] = useState({
    allowMinors: false,
    timeClose: 0,
    timeConfirm: 0,
    timeOpen: 0,
    waitlistText: null,
    acceptanceText: null,
    confirmationText: null
  });

  const updateSettings = settingsData => {
    const newSettings = {};
    newSettings.timeClose = settingsData.timeClose;
    newSettings.timeConfirm = settingsData.timeConfirm;
    newSettings.timeOpen = settingsData.timeOpen;
    newSettings.waitlistText = settingsData.waitlistText;
    newSettings.allowMinors = settingsData.allowMinors;
    newSettings.acceptanceText = settingsData.acceptanceText;
    newSettings.confirmationText = settingsData.confirmationText;
    console.log(newSettings.allowMinors.toString());
    setSettings(newSettings);
  };

  const getPublicSettings = () => {
    return api
      .getRoute(routes.publicSettingsRoute)
      .catch(err => Promise.reject(err));
  };

  const updateRegistrationTimes = (open, closed) => {
    return api.putRoute(routes.timesRoute, {
      timeOpen: open,
      timeClose: closed
    });
  };

  const updateConfirmationTime = time => {
    return api.putRoute(routes.confirmByRoute, {
      time: time
    });
  };

  const getWhitelistedEmails = () => {
    return api.getRoute(routes.whiteListRoute);
  };

  const updateWhitelistedEmails = emails => {
    return api.putRoute(routes.whiteListRoute, {
      emails: emails
    });
  };

  const updateWaitlistText = text => {
    return api.putRoute(routes.waitlistRoute, {
      text: text
    });
  };

  const updateAcceptanceText = text => {
    console.log(text);
    return api.putRoute(routes.acceptanceRoute, {
      text: text
    });
  };

  const updateConfirmationText = text => {
    return api.putRoute(routes.confirmationRoute, {
      text: text
    });
  };

  const updateAllowMinors = allowMinors => {
    return api.putRoute(routes.minorsRoute, {
      allowMinors: allowMinors
    });
  };

  return {
    settings,
    updateSettings,
    getPublicSettings,
    updateRegistrationTimes,
    updateConfirmationTime,
    getWhitelistedEmails,
    updateWhitelistedEmails,
    updateWaitlistText,
    updateAcceptanceText,
    updateConfirmationText,
    updateAllowMinors
  };
};

export default useSettings;
