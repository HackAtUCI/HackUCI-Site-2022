export const validation = {
  hasValue: value => {
    return value !== ""
  },

  isStringEqual: (value, value2) => {
    return value === value2
  },

  processError: (errors, validField, errorMessage) => {
    if(!validField && !errors.includes(errorMessage)){
      errors = errors.concat(errorMessage)
    }
    else if(validField && errors.indexOf(errorMessage) > -1){
      errors = errors.filter(function(i) { return i !== errorMessage })
    }
    return errors
  },

  //TODO: Email, Password regex
}
