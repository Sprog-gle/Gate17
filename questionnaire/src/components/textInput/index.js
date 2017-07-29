import React from "react";
import AutoComplete from "material-ui/AutoComplete";

import "./textInput.css";

const TextInput = ({ placeholder, hintText, dataSource = [], onChange }) =>
  <AutoComplete
    hintText={hintText}
    dataSource={dataSource}
    floatingLabelText={placeholder}
    fullWidth={true}
    className="textInput"
    onUpdateInput={onChange}
  />;

export default TextInput;
