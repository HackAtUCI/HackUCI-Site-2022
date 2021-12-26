import { useState } from "react";

import * as routes from "globals/hackEndpoints";
import * as api from "utils/api";

const useSettings = () => {
  const [settings, setSettings] = useState({});

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
