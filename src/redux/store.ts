import { createStore, compose, applyMiddleware } from "redux";
import mainReducer from "./reducers/index";
import { stateInterface } from "../interfaces/index";
import thunk from "redux-thunk";

export const initialState: stateInterface = {
  user: {
    isLogedIn: false,
    role: "",
  },
};
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

export const store = createStore(
  mainReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const configureStore = () =>
//   createStore(
//     mainReducer,
//     initialState,
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//   );

export default store;
