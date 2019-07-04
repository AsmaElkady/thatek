import {
  GET_YEARS,
  GET_YEARS_SUCCESS,
  GET_YEARS_FAILED
} from "../Actions/types";

const INITIAL_STATE = {
  errorYears: null,
  loadingYears: true,
  dataYears: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_YEARS:
      return {
        ...state,
        loadingYears: true,
        errorYears: null,
        dataYears: null
      };
    case GET_YEARS_SUCCESS:
      return {
        ...state,
        dataYears: action.payload,
        loadingYears: false,
        errorYears: null
      };
    case GET_YEARS_FAILED:
      return {
        ...state,
        errorYears: action.payload,
        loadingYears: false
      };

    default:
      return state;
  }
};
