import {
  GET_RELIGION,
  GET_RELIGION_SUCCESS,
  GET_RELIGION_FAILED
} from "../Actions/types";

const INITIAL_STATE = {
  errorReligion: null,
  loadingReligion: true,
  dataReligion: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_RELIGION:
      return {
        ...state,
        loadingReligion: true,
        errorReligion: null,
        dataReligion: null
      };
    case GET_RELIGION_SUCCESS:
      return {
        ...state,
        dataReligion: action.payload,
        loadingReligion: false,
        errorReligion: null
      };
    case GET_RELIGION_FAILED:
      return {
        ...state,
        errorReligion: action.payload,
        loadingReligion: false
      };

    default:
      return state;
  }
};
