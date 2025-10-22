import React, { useState } from "react";
import Header from "./Components/Header/Header";
import GlobalStyle from "./GlobalStyle";
import "leaflet/dist/leaflet.css";
import { Home } from "./Pages/Home/Home";
import { Footer } from "./Components/Footer/Footer";

function App() {

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
