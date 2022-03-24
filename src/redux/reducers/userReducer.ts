import {
  userActionTypes,
  UserActoinInterface,
  userStateInterface,
} from "../../interfaces/index";

export const initialState: userStateInterface = {
  isLogedIn: false,
  role: "",
  //cources must be added
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
