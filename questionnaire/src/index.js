import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import registerServiceWorker from "./registerServiceWorker";

import Question1 from "./routes/question1";
import "./index.css";

const App = () =>
  <MuiThemeProvider>
    <Question1 />
  </MuiThemeProvider>;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
