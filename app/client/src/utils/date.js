import moment from "moment";

export const convertUnixTimestampToDateTime = unixTimestamp => {
  return unixTimestamp
    ? moment(unixTimestamp).format("dddd, MMMM Do YYYY, h:mm a") + " (PST)"
    : "";
};

export const adminUsersFormatTime = time => {
  return moment(time).format("MMMM Do YYYY, h:mm:ss a");
};

export const convertUnixTimestampToRFC3339 = unixTimestamp => {
  return unixTimestamp ? moment(unixTimestamp).format("YYYY-MM-DDTHH:mm") : "";
};

export const convertRFC3339ToUnixTimestamp = datetimeStr => {
  return datetimeStr ? moment(datetimeStr).valueOf() : "";
};

export const isRegistrationOpen = registrationDeadline => {
  return registrationDeadline ? moment.now() < registrationDeadline : false;
};

export const isAfterConfirmationDate = confirmationDeadline => {
  return confirmationDeadline ? moment.now() > confirmationDeadline : false;
};
