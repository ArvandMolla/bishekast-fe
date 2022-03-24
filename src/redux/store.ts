import { createStore } from "redux";
import combinedReducers from "./reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

export const store = createStore(
  combinedReducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const configureStore = () =>
//   createStore(
//     mainReducer,
//     initialState,
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//   );

export default store;
