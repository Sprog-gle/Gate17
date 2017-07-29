import { combineReducers } from "redux";

import { formState } from "./states/form";

export default combineReducers({
  [formState.constants.NAME]: formState.reducer
});
