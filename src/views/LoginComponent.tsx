import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/action-creators";
import { rootStateType } from "../redux/reducers/index";
import { useEffect } from "react";

export default function LoginComponent() {
  useEffect(() => {
    console.log("heloooo");
  }, []);
  const dispatch = useDispatch();
  const { loginActionCreator, logoutActionCreator } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const userState = useSelector((state: rootStateType) => state.user);

  return (
    <div>
      <h1>the user is: </h1>
      <button>Login</button>
      <button>Logout</button>
    </div>
  );
}
