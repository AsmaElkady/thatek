import { combineReducers } from "redux";
import GetYearsReducer from "./GetYearsReducer";
import GetCountriesReducer from "./GetCountriesReducer";
import GetReligionReducer from "./GetReligionReducer";
import SelectReducer from "./SelectReducer";

export default combineReducers({
  yearsRed: GetYearsReducer,
  countriesRed: GetCountriesReducer,
  religionRed: GetReligionReducer,
  selectRed: SelectReducer
});
