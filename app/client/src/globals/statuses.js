// Constants for all the statuses
const statuses = {
  unverified: {
    status: "UNVERIFIED",
    text: "The email address you registered with has not been verified."
  },
  incompleteRegistrationOpen: {
    status: "INCOMPLETE",
    text:
      "Your application has not been submitted, but the registration deadline has not passed."
  },
  incompleteRegistrationClosed: {
    status: "INCOMPLETE",
    text:
      "Your application has not been submitted, but the registration deadline has passed."
  },
  submittedRegistrationOpen: {
    status: "UNDER REVIEW",
    text: "You have submitted your application and it is now under review."
  },
  submittedRegistrationClosed: {
    status: "UNDER REVIEW",
    text: "You have submitted your application and it is now under review."
  },
  admittedUnconfirmed: {
    status: "ADMITTED",
    text:
      "You have been admitted to the event, but have not confirmed your attendance and submitted your confirmation form."
  },
  admittedConfirmationDeadlinePassed: {
    status: "EXPIRED ADMISSION",
    text:
      "You had been admitted, but did not confirm your attendance before the deadline."
  },
  waitlisted: {
    status: "WAITLISTED",
    text:
      "You have been placed on the waitlist and will be admitted if there is room available."
  },
  confirmed: {
    status: "CONFIRMED",
    text:
      'Thank you for confirming! Please make sure to sign the waiver to officially confirm your attendance by clicking the "Sign Waiver" button below and use the email you applied with. Disclaimer: the website may take a few moments to register the e-signature.'
  },
  declined: {
    status: "DECLINED ADMISSION",
    text: "You had been admitted, but will not be attending the event."
  }
};

export default statuses;
