import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import registerServiceWorker from "./registerServiceWorker";

import Question1 from "./routes/question1";
import "./index.css";

injectTapEventPlugin();

const App = () =>
  <MuiThemeProvider>
    <Question1 />
  </MuiThemeProvider>;

const AfterMap = () =>
  <MuiThemeProvider>
    <div>Test</div>
  </MuiThemeProvider>;

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<AfterMap />, document.getElementById("after"));
registerServiceWorker();
