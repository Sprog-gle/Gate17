import React from "react";
import AutoComplete from "material-ui/AutoComplete";

import "./textInput.css";

const TextInput = ({ dataSource }) =>
  <AutoComplete
    hintText="Type anything"
    dataSource={dataSource}
    floatingLabelText="Full width"
    fullWidth={true}
    className="textInput"
  />;

export default TextInput;
