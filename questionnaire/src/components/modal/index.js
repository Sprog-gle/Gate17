import React, { Component } from "react";
import { connect } from "react-redux";
import AppBar from "material-ui/AppBar";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";

import Selection from "../selection";
import store from "../../store";
import states from "../../states";
import "./modal.css";

const { TOGGLE_MODAL } = states.actions;

class Modal extends Component {
  render() {
    const { title, actions, modalOpen, children } = this.props;

    return (
      <Dialog
        title={title}
        actions={actions}
        modal={false}
        open={modalOpen}
        onRequestClose={() => store.dispatch(TOGGLE_MODAL(false))}
      >
        {children}
      </Dialog>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    modalOpen: state.app.modalOpen
  };
}

export default connect(mapStateToProps)(Modal);
