import * as actionTypes from "./actionTypes";

const initialState = {
  severity: "Mild",
  completed: false,
  modalOpen: false
};

const reducer = (state = initialState, payload) => {
  switch (payload.type) {
    case actionTypes.UPDATE_SEVERITY: {
      return {
        ...state,
        severity: payload.severity
      };
    }
    case actionTypes.FORM_COMPLETED: {
      return {
        ...state,
        completed: payload.completed
      };
    }
    case actionTypes.TOGGLE_MODAL: {
      return {
        ...state,
        modalOpen: payload.modalOpen
      };
    }
    default:
      return state;
  }
};

export default reducer;
