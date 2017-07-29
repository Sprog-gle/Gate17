import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Dialog from "material-ui/Dialog";
import RaisedButton from "material-ui/RaisedButton";

import Gate17Logo from "./gate-17logo1.png";

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
    console.log(this.state.open);
    return (
      <AppBar
        iconElementLeft={Logo}
        iconElementRight={
          <div>
            <RaisedButton label="Questionnaire" onTouchTap={this.handleOpen} />
            <Dialog
              title="Dialog With Actions"
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              Test
            </Dialog>
          </div>
        }
        className="header"
      />
    );
  }
}
