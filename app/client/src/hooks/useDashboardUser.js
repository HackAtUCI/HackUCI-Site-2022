import { useState } from "react";

import { convertUnixTimestampToDateTime } from "utils/date";
import { determineStatus } from "utils/status";

const useDashboardUser = () => {
  const [dashboardUser, setDashboardUser] = useState({
    id: "",
    status: {},
    waiverSigned: false,
    registrationDeadline: "",
    confirmationDeadline: ""
  });

  const updateDashboardUser = (user, settingsData) => {
    const newDashboardUser = {};
    newDashboardUser.id = user.id;
    newDashboardUser.registrationDeadline = convertUnixTimestampToDateTime(
      settingsData.timeClose
    );
    newDashboardUser.confirmationDeadline = convertUnixTimestampToDateTime(
      user.status.confirmBy
    );
    newDashboardUser.status = determineStatus(user, settingsData);
    newDashboardUser.waiverSigned = user.confirmation.signatureLiability !== "";
    setDashboardUser(newDashboardUser);
  };

  return {
    dashboardUser,
    updateDashboardUser
  };
};

export default useDashboardUser;
