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

  return {
    settings,
    getPublicSettings
  };
};

export default useSettings;
