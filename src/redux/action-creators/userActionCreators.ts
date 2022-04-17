import { userActionTypes, UserActoinInterface } from "../../interfaces";
import { Dispatch } from "redux";
import axiosInstance from "../../util/axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

interface credentialsInteface {
  email: string;
  password: string;
}

// export const loginActionCreator = (credentials: credentialsInteface) => {
//   return (dispatch: Dispatch<UserActoinInterface>, getState: any) => {
//     console.log(getState());
//     dispatch({
//       type: userActionTypes.LOGIN,
//     });
//   };
// };
export const loginActionCreator = (credentials: credentialsInteface) => {
  return (dispatch: Dispatch<UserActoinInterface>) => {
    axiosInstance
      .post("/user/login", credentials)
      .then((res) => {
        localStorage.setItem("bishekastAccessToken", res.data.accessToken);
        dispatch({
          type: userActionTypes.LOGIN,
          payload: {
            name: res.data.user.name,
            role: res.data.user.role,
            id: res.data.user._id,
          },
        });
      })
      .catch((err) => {
        console.log(err.message);
        message.error({
          content: "نام کاربری یا کلمه عبور اشتباه است!",
          className: "top-message",
        });
      });
  };
};
export const checkLoginActionCreator = () => {
  return (dispatch: Dispatch<UserActoinInterface>) => {
    const token = localStorage.getItem("bishekastAccessToken");
    if (token) {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      axiosInstance.get("/user/is-loggedin", { headers }).then((res) => {
        if (res.status === 200) {
          dispatch({
            type: userActionTypes.LOGIN,
            payload: {
              name: res.data.user.name,
              role: res.data.user.role,
              id: res.data.user._id,
            },
          });
        }
      });
    }
  };
};

export const logoutActionCreator = () => {
  return (dispatch: Dispatch<UserActoinInterface>) => {
    dispatch({
      type: userActionTypes.LOGOUT,
    });
  };
};
