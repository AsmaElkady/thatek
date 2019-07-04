import axios from "axios";
import {
  GET_COUNTRIES,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAILED
} from "./types";

export const getCountries = () => {
  return dispatch => {
    dispatch({ type: GET_COUNTRIES });
    axios
      .get("https://opentdb.com/api.php?amount=7")
      .then(response => getCountriesSuccess(dispatch, response))
      .catch(error => getCountriesFail(dispatch, error.response));
  };
};

const getCountriesFail = (dispatch, response) => {
  console.log("getCountriesFail", response.data);
  dispatch({
    type: GET_COUNTRIES_FAILED,
    payload: response.data
  });
};

const getCountriesSuccess = (dispatch, response) => {
  console.log("getCountriesSuccess", response.data.results);
  dispatch({
    type: GET_COUNTRIES_SUCCESS,
    payload: response.data.results
  });
};
