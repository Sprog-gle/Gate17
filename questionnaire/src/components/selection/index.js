import React, { Component } from "react";

import "./selection.css";

export default class Selection extends Component {
  render() {
    const { title, onClick } = this.props;
    return (
      <div className="selection" onClick={onClick}>
        <div className="title">
          <h1>
            {title}
          </h1>
        </div>
      </div>
    );
  }
}
