import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";

import "./modal.css";

export default class Modal extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { title, actions, children } = this.props;

    return (
      <div>
        <RaisedButton label="Questionnaire" onClick={this.handleOpen} />
        <Dialog
          title={title}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {children}
        </Dialog>
      </div>
    );
  }
}
