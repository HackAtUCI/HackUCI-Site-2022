import { useState, useEffect } from "react";

import { isAfterConfirmationDate } from "../utils/date";
import { determineStatus } from "../utils/status";
import errorMessages from "../globals/errors";
import statuses from "../globals/statuses";

const useConfirmationUser = () => {
  const [confirmationUser, setConfirmationUser] = useState({
    id: "",
    editable: true
  });

  const validateConfirmationUser = (user, settingsData) => {
    const newConfirmationUser = {};
    newConfirmationUser.id = user.id;
    if (
      determineStatus(user, settingsData) == statuses.admittedUnconfirmed ||
      determineStatus(user, settingsData) == statuses.confirmed
    ) {
      newConfirmationUser.editable = !isAfterConfirmationDate(
        user.status.confirmBy
      );
      setConfirmationUser(newConfirmationUser);
    } else {
      throw errorMessages.denyPermission;
    }
  };

  return {
    confirmationUser,
    validateConfirmationUser
  };
};

export default useConfirmationUser;
