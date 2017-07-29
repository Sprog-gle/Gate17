import * as actionTypes from "./actionTypes";

const initialState = {
  severity: "Mild"
};

const reducer = (state = initialState, payload) => {
  switch (payload.type) {
    case actionTypes.UPDATE_SEVERITY: {
      return {
        ...state,
        severity: payload.severity
      };
    }
    default:
      return state;
  }
};

export default reducer;
