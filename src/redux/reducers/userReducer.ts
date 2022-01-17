import {
  userActionTypes,
  UserActoinInterface,
  userStateInterface,
} from "../../interfaces/index";

export const initialState: userStateInterface = {
  isLogedIn: false,
  role: "",
};

const userReducer = (state = initialState, action: UserActoinInterface) => {
  switch (action.type) {
    case userActionTypes.LOGIN:
      return state;

    case userActionTypes.LOGOUT:
      return state;

    default:
      return state;
  }
};

export default userReducer;
