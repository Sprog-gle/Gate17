import React from "react";

import { Modal, Form, TextInput } from "../../components";
import "./form.css";

const Form = ({ children }) =>
  <form>
    {children}
  </form>;

export default Form;
