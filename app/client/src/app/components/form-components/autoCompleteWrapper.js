import React, { useState } from "react";

import Autosuggest from "react-autosuggest";

import alternativeSchoolNames from "./alternativeSchoolNames.json";
import "./hackForm.scss";

export default function AutoCompleteWrapper(props) {
  let [suggestions, setSuggestions] = useState([]);
  const inputProps = {
    id: props.id,
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

    // Return no suggestions if the input is empty
    if (inputLength == 0) {
      return [];
    }

    // Construct an array of potential school suggestions.
    // First check the input against alternative school names,
    // then, concat that list with the suggestions from the full list of schools.
    var potentialSchools = Object.keys(alternativeSchoolNames)
      .filter(school => school.includes(inputValue))
      .map(alternativeName => alternativeSchoolNames[alternativeName])
      .concat(
        // List of all official school names that contact the input value
        props.suggestions.filter(school =>
          school.toLowerCase().includes(inputValue)
        )
      );

    // Remove duplicates from the potential schools array
    // and slice the array down to a smaller size
    potentialSchools = potentialSchools
      .filter((school, idx) => idx == potentialSchools.indexOf(school))
      .slice(startIdx, endIdx);

    return potentialSchools;
  }

  function getSuggestionValue(suggestion) {
    props.autoCompleteSelect(suggestion);
  }

  function onSuggestionsFetchRequested({ value }) {
    return setSuggestions(getSuggestions(value));
  }

  function onSuggestionsClearRequested() {
    return setSuggestions([]);
  }

  function renderSuggestion(suggestion) {
    return <div> {suggestion}</div>;
  }

  function onSuggestionSelected(
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) {
    // extremely cheese code this is probably not very reusable xd
    if (method === "enter") {
      let school = document.getElementById("schoolInput");
      if (school !== undefined) {
        school.value = suggestion;
      }
    }
  }

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      onSuggestionSelected={onSuggestionSelected}
    />
  );
}
