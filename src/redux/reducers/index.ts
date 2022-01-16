import { initialState } from "../store";
import { PayloadAction } from "@reduxjs/toolkit";
import { stateInterface } from "../../interfaces/index";

interface loginActionInterface {
  type: "LOGIN";
}

interface logoutActionInterface {
  type: "LOGOUT";
}

type ActoinType = loginActionInterface | logoutActionInterface;

const mainReducer: any = (state = initialState, action: ActoinType) => {
  switch (action.type) {
    case "LOGIN":
      return {};

    case "LOGOUT":
      return {};

    default:
      return state;
  }
};

export default mainReducer;
