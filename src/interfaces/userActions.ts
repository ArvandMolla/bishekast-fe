export enum userActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

interface userPayloadInterface {
  name: string;
  id: string;
  role: string;
}

interface loginActionInterface {
  type: userActionTypes.LOGIN;
  payload: userPayloadInterface;
}

interface logoutActionInterface {
  type: userActionTypes.LOGOUT;
}

export type UserActoinInterface = loginActionInterface | logoutActionInterface;
