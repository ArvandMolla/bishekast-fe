import "./App.css";
import LoginComponent from "./components/LoginComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route element={<Register name="arvand" />} path="/register" />
          <Route element={<LoginComponent />} path="/login" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
