import moment from "moment";

export const convertUnixTimestampToDateTime = unixTimestamp => {
  return unixTimestamp
    ? moment(unixTimestamp).format("dddd, MMMM Do YYYY, h:mm a") + " (PST)"
    : "";
};

export const isRegistrationOpen = registrationDeadline => {
  return registrationDeadline ? moment.now() < registrationDeadline : false;
};

export const isAfterConfirmationDate = confirmationDeadline => {
  return confirmationDeadline ? moment.now() > confirmationDeadline : false;
};
