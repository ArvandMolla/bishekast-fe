import {
  userActionTypes,
  UserActoinInterface,
  userStateInterface,
} from "../../interfaces/index";

export const userInitialState: userStateInterface = {
  isLogedIn: false,
  role: "",
  id: "",
  name: "",
};

const userReducer = (state = userInitialState, action: UserActoinInterface) => {
  switch (action.type) {
    case userActionTypes.LOGIN:
      const { name, id, role } = action.payload;
      return {
        ...state,
        isLogedIn: true,
        name,
        id,
        role,
      };

    case userActionTypes.LOGOUT:
      return {
        ...state,
        isLogedIn: false,
      };

    default:
      return state;
  }
};

export default userReducer;
