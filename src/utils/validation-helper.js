const minorsAllowed = false;

export const helper = {
  _regex: {
    email: /^\S+@\S+\.\S+$/
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

  isEssayValid: (value, min, max) => {
    return value.length > min && value.length < max;
  }
};
