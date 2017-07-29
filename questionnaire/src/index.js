import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import registerServiceWorker from "./registerServiceWorker";

import Questions from "./routes/question";
import "./index.css";

injectTapEventPlugin();

const App = () =>
  <MuiThemeProvider>
    <Questions />
  </MuiThemeProvider>;

const AfterMap = () => <div>Test</div>;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
