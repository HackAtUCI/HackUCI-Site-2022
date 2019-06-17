export const helper = {
  _regex:{
    email:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  },

  isCorrectLength: value => {
    return value.length >= 8;
  },

  isStringEqual: (value, value2) => {
    return value === value2;
  },

  isEmail: (value) => {
    return value.match(helper._regex.email)
  }
}