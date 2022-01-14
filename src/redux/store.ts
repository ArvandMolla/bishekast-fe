import { createStore, compose } from "redux";
import mainReducer from "./reducers/index";

export const initialState = {
  companies: {
    favorites: [],
  },
};
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const configureStore = () =>
  createStore(
    mainReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  );

export default configureStore;
