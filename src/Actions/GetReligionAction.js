import axios from "axios";
import {
  GET_RELIGION,
  GET_RELIGION_SUCCESS,
  GET_RELIGION_FAILED
} from "./types";

export const getReligion = () => {
  return dispatch => {
    dispatch({ type: GET_RELIGION });

    axios
      .get("https://opentdb.com/api.php?amount=4")
      .then(response => getReligionSuccess(dispatch, response))
      .catch(error => getReligionFail(dispatch, error.response));
  };
};

const getReligionFail = (dispatch, response) => {
  console.log("getReligionFail ", response);
  dispatch({
    type: GET_RELIGION_FAILED,
    payload: response.data
  });
};

const getReligionSuccess = (dispatch, response) => {
  console.log("getReligionSuccess ", response);

  dispatch({
    type: GET_RELIGION_SUCCESS,
    payload: response.data.results
  });
};
