import { combineReducers } from "redux";
import userReducer from "./userReducer";

const combinedReducers = combineReducers({
  user: userReducer,
});

export default combinedReducers;

export type rootStateType = ReturnType<typeof combinedReducers>;
