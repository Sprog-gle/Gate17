import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";

import Gate17Logo from "./logo.png";

import "./header.css";

const Logo = <img src={Gate17Logo} width={174} height={64} alt="Logo" />;

export default class Header extends Component {
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
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />
    ];

    return <AppBar iconElementLeft={Logo} className="header" />;
  }
}
