import {
  userActionTypes,
  UserActoinInterface,
  userStateInterface,
} from "../../interfaces/index";

export const userInitialState: userStateInterface = {
  isLogedIn: "No",
  role: "",
  //cources must be added
};

const userReducer = (state = userInitialState, action: UserActoinInterface) => {
  switch (action.type) {
    case userActionTypes.LOGIN:
      return {
        ...state,
        isLogedIn: "Yes",
      };

    case userActionTypes.LOGOUT:
      return {
        ...state,
        isLogedIn: "No",
      };

    default:
      return state;
  }
};

export default userReducer;
