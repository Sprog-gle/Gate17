import React from "react";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";

import "./dropdown.css";

const Dropdown = ({ value = 0, onChange, menuItems }) =>
  <div className="dropdownComponent">
    <DropDownMenu
      value={value}
      onChange={onChange}
      autoWidth={false}
      className="dropdown"
    >
      {menuItems.map((menuItem, key) =>
        <MenuItem key={key} value={key} primaryText={menuItem} />
      )}
    </DropDownMenu>
  </div>;

export default Dropdown;
