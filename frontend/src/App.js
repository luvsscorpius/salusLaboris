import React, { useState } from "react";
import Header from "./Components/Header/Header";
import GlobalStyle from "./GlobalStyle";
import { Home } from "./Pages/Home/Home";

function App() {

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Home/>
    </>
  );
}

export default App;
