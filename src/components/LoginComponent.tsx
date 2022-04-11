import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/action-creators";
import { rootStateType } from "../redux/reducers/index";

export default function LoginComponent() {
  const dispatch = useDispatch();
  const { loginActionCreator, logoutActionCreator } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const userState = useSelector((state: rootStateType) => state.user);

  return (
    <div>
      <h1>the user is: {userState.isLogedIn} </h1>
      <button onClick={() => loginActionCreator()}>Login</button>
      <button onClick={() => logoutActionCreator()}>Logout</button>
    </div>
  );
}
