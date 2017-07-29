import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../../store";

import { Modal, Selection, Map } from "../../components";
import Questions from "../question";

import states from "../../states";
import "./main.css";

const { TOGGLE_MODAL } = states.actions;

const Main = ({ formCompleted }) =>
  <div>
    {!formCompleted &&
      <div className="home">
        <Selection title="You lost?" />
        <Selection
          title={"Found someone?"}
          onClick={() => store.dispatch(TOGGLE_MODAL(true))}
        />
        <Modal>
          <Questions />
        </Modal>
      </div>}

    {formCompleted && <Map />}
  </div>;

function mapStateToProps(state, ownProps) {
  return {
    formCompleted: state.app.completed
  };
}

export default connect(mapStateToProps)(Main);
