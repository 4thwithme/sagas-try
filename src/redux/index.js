import { combineReducers } from "redux";

import apod from "./ducks/apod";
import rovers from "./ducks/rovers";

export default combineReducers({
  apod,
  rovers
});
