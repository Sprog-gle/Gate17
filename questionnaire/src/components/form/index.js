import React from "react";

import "./form.css";

const Form = ({ question, children }) =>
  <div className="form">
    <div className="question">
      <h2>
        {question}
      </h2>
    </div>
    <div className="input">
      {children}
    </div>
  </div>;

export default Form;
