import React from "react";
import "./App.css";
import AddEmployeeForm from "./components/addEmployeeForm/addEmployeeForm";
import IconButton from "./components/button/iconButton";
import Card from "./components/card/card";
import CardContainer from "./components/cardContainer/cardContainer";
import Home from "./pages/home";
import LoginPage from "./pages/loginPage";

function App() {
  return (
    <div
    // style={{
    //   display: "flex",
    //   justifyContent: "center",
    //   marginTop: "5rem",
    // }}
    >
      <Home />
      {/* <LoginPage /> */}
      {/* <CardContainer/> */}
    </div>
  );
}

export default App;
