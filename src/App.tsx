import "./App.css";
import LoginComponent from "./components/LoginComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Switch } from "react-router";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Register name="arvand" />} path="/register" />
          <Route element={<LoginComponent />} path="/login" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
