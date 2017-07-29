import { combineReducers } from "redux";

import appState from "./states";

export default combineReducers({
  app: appState.reducer
});
