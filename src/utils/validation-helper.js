export const helper = {
  _regex: {
    email: /^\S+@\S+\.\S+$/,
    phoneNumber: /^[2-9]\d{2}-\d{3}-\d{4}$/
  },

  isCorrectLength: (value, maxLength) => {
    return value.length >= maxLength;
  },

  isStringEqual: (value, value2) => {
    return value === value2;
  },

  isEmail: value => {
    return value.match(helper._regex.email);
  },

  isEssayValid: (value, minLength, maxLength) => {
    return value.length >= minLength && value.length <= maxLength;
  },

  isPhoneNumber: value => {
    return value.match(helper._regex.phoneNumber);
  }
};
