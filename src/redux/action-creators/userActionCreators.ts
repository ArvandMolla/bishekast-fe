import { userActionTypes, UserActoinInterface } from "../../interfaces";
import { Dispatch } from "redux";

export const loginActionCreator = () => {
  return (dispatch: Dispatch<UserActoinInterface>) => {
    dispatch({
      type: userActionTypes.LOGIN,
    });
  };
};
export const logoutActionCreator = () => {
  return (dispatch: Dispatch<UserActoinInterface>) => {
    dispatch({
      type: userActionTypes.LOGOUT,
    });
  };
};
