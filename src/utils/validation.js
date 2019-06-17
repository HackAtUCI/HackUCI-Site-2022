import { helper } from "./validationhelper.js"

export const validation = {
  processResetPasswordForm: fields => {
    let {password, confirmPassword} = fields
    let errors = {};

    if (!password){
      errors.password = "Password field missing";
    }
    else if(!helper.isCorrectLength(password)){
      errors.password = "Password must be greater than 8 characters";
    }
    if (!confirmPassword){
      errors.confirmPassword = "Confirm password field missing";
    }
    else if(!helper.isCorrectLength(confirmPassword)){
      errors.confirmPassword = "Confirm password must be greater than 8 characters";
    }
    if(!helper.isStringEqual(password, confirmPassword)){
      errors.passwordEquality = "Passwords must be equal";
    }

    return errors;
  },

  processSendResetEmailForm: fields => {
    let {email} = fields
    let errors = {};

    if (!email){
      errors.email = "Email field missing";
    }
    else if(!helper.isEmail(email)){
      errors.email = "Must be Email";
    }

    return errors;
  },
};
