export const helper = {
  _regex: {
    email: /^[a-zA-Z0-9.!#$%&’*/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.edu$)/
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
  }
};
