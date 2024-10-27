import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./pages/Header";
import "./App.css";
import Home from "./pages/Home";

function App() {

  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
