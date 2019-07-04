import {
  SELECT_COUNTRY,
  SELECT_GENDER,
  SELECT_YEAR,
  SELECT_RELIGION
} from "../Actions/types";

const INITIAL_STATE = {
  country: null,
  gender: null,
  year: null,
  religion: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_COUNTRY:
      return {
        ...state,
        country: action.payload
      };
    case SELECT_GENDER:
      return {
        ...state,
        gender: action.payload
      };
    case SELECT_YEAR:
      return {
        ...state,
        year: action.payload
      };
    case SELECT_RELIGION:
      return {
        ...state,
        religion: action.payload
      };

    default:
      return state;
  }
};
