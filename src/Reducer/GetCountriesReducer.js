import {
  GET_COUNTRIES,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAILED
} from "../Actions/types";

const INITIAL_STATE = {
  errorCountries: null,
  loadingCountries: true,
  dataCountries: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        loadingCountries: true,
        errorCountries: null,
        dataCountries: null
      };
    case GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        dataCountries: action.payload,
        loadingCountries: false,
        errorCountries: null
      };
    case GET_COUNTRIES_FAILED:
      return {
        ...state,
        errorCountries: action.payload,
        loadingCountries: false
      };

    default:
      return state;
  }
};
