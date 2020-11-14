angular
  .module("reg")
  .constant("EVENT_INFO", {
    NAME: "HackUCI 2020",
    START_DATE: "Jan 31, 2020",
    START_TIME: "22:00",
    END_DATE: "Feb 2, 2020",
    END_TIME: "10:00",
    EXPO_START_DATE: "Feb 2, 2020",
    EXPO_START_TIME: "12:30",
    EXPO_END_DATE: "Feb 2, 2020",
    EXPO_END_TIME: "14:30"
  })
  .constant("DASHBOARD", {
    UNVERIFIED:
      "You should have received an email asking you verify your email. Click the link in the email and you can start your application!",
    INCOMPLETE_TITLE: "You still need to complete your application!",
    INCOMPLETE:
      "If you do not complete your application before the [APP_DEADLINE], you will not be considered for admissions!",
    SUBMITTED_TITLE: "Your application has been submitted!",
    SUBMITTED:
      "Feel free to edit it at any time. However, once registration is closed, you will not be able to edit it any further.\nPlease make sure your information is accurate before registration is closed!",
    CLOSED_AND_INCOMPLETE_TITLE:
      "Unfortunately, registration has closed, and the admissions process has begun.",
    CLOSED_AND_INCOMPLETE: "",
    ADMITTED_AND_CAN_CONFIRM_TITLE: "You must confirm by [CONFIRM_DEADLINE].",
    ADMITTED_AND_CANNOT_CONFIRM_TITLE:
      "Your confirmation deadline of [CONFIRM_DEADLINE] has passed.",
    ADMITTED_AND_CANNOT_CONFIRM:
      "Although you were accepted, you did not complete your confirmation in time.\nUnfortunately, this means that you will not be able to attend the event, as we must begin to accept other applicants on the waitlist.\nWe hope to see you again next year!",
    CONFIRMED_NOT_PAST_TITLE:
      "You can edit your confirmation information until [CONFIRM_DEADLINE]",
    DECLINED:
      "We're sorry to hear that you won't be able to make it to HackUCI 2020! :(\nMaybe next year! We hope to see you again soon."
  });
