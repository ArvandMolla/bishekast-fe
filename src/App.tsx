import "./App.css";
import "antd/dist/antd.variable.min.css";
import LoginComponent from "./views/LoginComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./views/register/Register";
import UsersLogin from "./views/usersLogin/UsersLogin";
import Header from "./components/header/Header";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./redux/action-creators";
import Welcome from "./views/welcome/Welcome";

function App() {
  const dispatch = useDispatch();
  const { checkLoginActionCreator } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    checkLoginActionCreator();
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route element={<Register />} path="/register" />
          <Route element={<Welcome />} path="/welcome" />
          <Route element={<LoginComponent />} path="/login2" />
          <Route element={<UsersLogin />} path="/login" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
