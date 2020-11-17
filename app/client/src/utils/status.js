import statuses from "../globals/statuses";
import { isRegistrationOpen, isAfterConfirmationDate } from "../utils/date";

export const determineStatus = (user, settingsData) => {
  const isRegOpen = isRegistrationOpen(settingsData.timeClose);
  const isPastConfirmation = isAfterConfirmationDate(user.status.confirmBy);

  if (!user.verified) {
    return statuses.unverified;
  } else if (isRegOpen && user.verified && !user.status.completedProfile) {
    return statuses.incompleteRegistrationOpen;
  } else if (
    isRegOpen &&
    user.status.completedProfile &&
    !user.status.admitted
  ) {
    return statuses.submittedRegistrationOpen;
  } else if (
    !isRegOpen &&
    !user.status.completedProfile &&
    !user.status.admitted
  ) {
    return statuses.incompleteRegistrationClosed;
  } else if (
    !isRegOpen &&
    user.status.completedProfile &&
    !user.status.admitted
  ) {
    return statuses.submittedRegistrationClosed;
  } else if (
    !isPastConfirmation &&
    user.status.admitted &&
    !user.status.confirmed &&
    !user.status.declined
  ) {
    return statuses.admittedUnconfirmed;
  } else if (
    isPastConfirmation &&
    user.status.admitted &&
    !user.status.confirmed &&
    !user.status.declined
  ) {
    return statuses.admittedConfirmationDeadlinePassed;
  } else if (
    user.status.admitted &&
    user.status.confirmed &&
    !user.status.declined
  ) {
    return statuses.confirmed;
  } else if (user.status.declined) {
    return statuses.declined;
  } else {
    return statuses.waitlisted;
  }
};
