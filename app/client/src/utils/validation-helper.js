export const helper = {
  _regex: {
    email: /^[a-zA-Z0-9.!#$%&’*/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    url: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
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

  isURLValid: value => {
    return value.match(helper._regex.url);
  }
};
