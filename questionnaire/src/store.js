import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./rootReducer";

const initialState = {};
const middleware = applyMiddleware(thunkMiddleware);
const enhancer = compose(middleware);

const store = createStore(rootReducer, initialState, enhancer);

export default store;
