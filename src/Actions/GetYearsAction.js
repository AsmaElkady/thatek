import axios from "axios";
import { GET_YEARS, GET_YEARS_SUCCESS, GET_YEARS_FAILED } from "./types";

export const getYears = () => {
  return dispatch => {
    dispatch({ type: GET_YEARS });
    axios
      .get("https://opentdb.com/api.php?amount=10")
      .then(response => getYearsSuccess(dispatch, response))
      .catch(error => getYearsFail(dispatch, error.response));
  };
};

const getYearsFail = (dispatch, response) => {
  console.log("getYearsFail", response.data);
  dispatch({
    type: GET_YEARS_FAILED,
    payload: response.data
  });
};

const getYearsSuccess = (dispatch, response) => {
  console.log("getYearsSuccess", response);
  dispatch({
    type: GET_YEARS_SUCCESS,
    payload: response.data.results
  });
};
