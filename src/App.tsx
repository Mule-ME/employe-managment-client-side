import React from "react";
import "./App.css";
import AddEmployeeForm from "./components/modal/addEmployee/addEmployee";
import IconButton from "./components/button/iconButton";
import Card from "./components/card/card";
import CardContainer from "./components/cardContainer/cardContainer";
import Home from "./pages/home";
import LoginPage from "./pages/loginPage";

function App() {
  return (
    <div>
      <Home />
      {/* <LoginPage /> */}
      {/* <CardContainer/> */}
    </div>
  );
}

export default App;
