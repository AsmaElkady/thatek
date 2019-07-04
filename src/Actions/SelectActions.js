import {
  SELECT_COUNTRY,
  SELECT_GENDER,
  SELECT_YEAR,
  SELECT_RELIGION
} from "./types";

export const selectCountry = text => {
  return {
    type: SELECT_COUNTRY,
    payload: text
  };
};

export const selectGender = text => {
  console.warn(text);
  return {
    type: SELECT_GENDER,
    payload: text
  };
};

export const selectYear = text => {
  return {
    type: SELECT_YEAR,
    payload: text
  };
};

export const selectReligion = text => {
  return {
    type: SELECT_RELIGION,
    payload: text
  };
};
