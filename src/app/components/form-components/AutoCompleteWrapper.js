import React, { useState } from "react";

import Autosuggest from "react-autosuggest";

import "./style.scss";

export default function AutoCompleteWrapper(props) {
  let [suggestions, setSuggestions] = useState([]);
  const inputProps = {
    name: props.name,
    placeholder: props.placeholder,
    value: props.value,
    onChange: props.onChange,
    className: props.className,
    disabled: props.disabled
  };

  function getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    const startIdx = 0;
    const endIdx = 7;

    return inputLength === 0
      ? []
      : props.suggestions
          .filter(
            school => school.toLowerCase().slice(0, inputLength) === inputValue
          )
          .slice(startIdx, endIdx);
  }

  function getSuggestionValue(suggestion) {
    props.autoCompleteSelect(suggestion);
  }

  function onSuggestionsFetchRequested() {
    return setSuggestions(getSuggestions(props.value));
  }

  function onSuggestionsClearRequested() {
    return setSuggestions([]);
  }

  function renderSuggestion(suggestion) {
    return <div> {suggestion}</div>;
  }

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
}
