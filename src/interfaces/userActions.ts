export enum userActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

interface loginActionInterface {
  type: userActionTypes.LOGIN;
}

interface logoutActionInterface {
  type: userActionTypes.LOGOUT;
}

export type UserActoinInterface = loginActionInterface | logoutActionInterface;
