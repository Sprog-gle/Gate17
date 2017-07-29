import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import store from "./store";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import registerServiceWorker from "./registerServiceWorker";

import { Header } from "./components";
import Questions from "./routes/question";

import states from "./states";
import "./index.css";

import Main from "./routes/main";

injectTapEventPlugin();

class App extends Component {
  render() {
    const { formCompleted } = this.props;
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <div>
            <Header />
            <Main />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

const AfterMap = () => <div>Test</div>;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
