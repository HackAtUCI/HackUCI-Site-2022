import { helper } from "./validation-helper.js";

export const validation = {
  processApplicationForm: fields => {
    let errors = {};
    let {
      firstname,
      lastname,
      email,
      gender,
      ethnicity,
      pronouns,
      country,
      firstTime,
      password,
      confirmPassword,
      school,
      major,
      graduationYear,
      linkedin,
      portfolio,
      essay,
      essay2,
      adult,
      file
    } = fields;

    // const minEssayChar = 100;
    // const maxEssayChar = 1500;
    const allowMinors = false;
    const maxFileSize = 512000;

    if (!firstname) {
      errors.firstname = "First name field missing";
    }
    if (!lastname) {
      errors.lastname = "Last name field missing";
    }
    if (!email) {
      errors.email = "Email field missing";
    } else if (!helper.isEmail(email)) {
      errors.email = "Must be valid Email";
    }
    if (!ethnicity || ethnicity === "Race / Ethnicity") {
      errors.ethnicity = "Select a race/ethnicity";
    }
    if (!gender || gender === "gender") {
      errors.gender = "Select a gender identity";
    }
    if (!country) {
      errors.country = "Enter a country";
    }
    if (!pronouns || pronouns === "pronouns") {
      errors.pronouns = "Select a set of pronouns";
    }
    if (!password) {
      errors.password = "Password field missing";
    } else if (!helper.isCorrectLength(password, 8)) {
      errors.password = "Password must be greater than 8 characters";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "Confirm password field missing";
    } else if (!helper.isCorrectLength(confirmPassword, 8)) {
      errors.confirmPassword =
        "Confirm password must be greater than 8 characters";
    }
    if (!helper.isStringEqual(password, confirmPassword)) {
      errors.passwordEquality = "Passwords must be equal";
    }
    if (!school) {
      errors.school = "Select a school";
    }
    if (!major) {
      errors.major = "Select a major";
    }
    if (!graduationYear) {
      errors.graduationYear = "Select a graduation year";
    }
    // Uncomment if including essay question in application
    if (essay && !helper.isEssayValid(essay, 0, 1500)) {
      errors.essay =
        "Essay must be within " + 0 + " and " + 1500 + " characters";
    }
    // Uncomment if including essay question in application
    if (essay2 && !helper.isEssayValid(essay2, 0, 1500)) {
      errors.essay2 =
        "Essay must be within " + 0 + " and " + 1500 + " characters";
    }
    if (portfolio) {
      if (!helper.isURLValid(portfolio)) {
        errors.portfolio = "Must be a valid URL";
      }
    }
    if (linkedin) {
      if (!helper.isURLValid(linkedin)) {
        errors.linkedin = "Must be a valid URL";
      } else if (!linkedin.includes("linkedin")) {
        errors.linkedin = "Must be a valid LinkedIn URL";
      }
    }
    if (!allowMinors && (!adult || adult === "false")) {
      errors.adult = "Must be 18 or older";
    }
    if (!file) {
      errors.file = "Resume missing";
    } else if (file.type !== "application/pdf") {
      errors.file = "Reupload in pdf format";
    } else if (file.size > maxFileSize) {
      errors.file = "File max size is " + Math.round(maxFileSize / 1000) + "kb";
    }
    return errors;
  },

  processResetPasswordForm: fields => {
    let { password, confirmPassword } = fields;
    let errors = {};

    if (!password) {
      errors.password = "Password field missing";
    } else if (!helper.isCorrectLength(password, 8)) {
      errors.password = "Password must be greater than 8 characters";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "Confirm password field missing";
    } else if (!helper.isCorrectLength(confirmPassword, 8)) {
      errors.confirmPassword =
        "Confirm password must be greater than 8 characters";
    }
    if (!helper.isStringEqual(password, confirmPassword)) {
      errors.confirmPassword = "Passwords must be equal";
    }

    return errors;
  },

  processSendResetEmailForm: fields => {
    let { email } = fields;
    let errors = {};

    if (!email) {
      errors.email = "Email field missing";
    } else if (!helper.isEmail(email)) {
      errors.email = "Must be Email";
    }

    return errors;
  },

  processLoginForm: fields => {
    let { email, password } = fields;
    let errors = {};
    if (!email) {
      errors.email = "Email field missing";
    } else if (!helper.isEmail(email)) {
      errors.email = "Invalid Email";
    }

    if (!password) {
      errors.password = "Password field missing";
    }

    return errors;
  }
};
