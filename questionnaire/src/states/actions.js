import * as actionTypes from "./actionTypes";

export const UPDATE_SEVERITY = severity => ({
  type: actionTypes.UPDATE_SEVERITY,
  severity
});

export const FORM_COMPLETED = completed => ({
  type: actionTypes.FORM_COMPLETED,
  completed
});

export const TOGGLE_MODAL = modalOpen => ({
  type: actionTypes.TOGGLE_MODAL,
  modalOpen
});
