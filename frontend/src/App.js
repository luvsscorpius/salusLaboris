import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./Components/Header/Header";
import GlobalStyle from "./GlobalStyle";
import "leaflet/dist/leaflet.css";
import { Home } from "./Pages/Home/Home";
import { Footer } from "./Components/Footer/Footer";
import { Login } from "./Pages/Login/Login";
import { EsqueceuSenha } from "./Pages/EsqueceuSenha/EsqueceuSenha";
import { RecuperarSenha } from "./Pages/RecuperarSenha/RecuperarSenha";
import { Blog } from "./Pages/Blog/Blog";

function App() {

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/login/esqueceuasenha" element={<EsqueceuSenha/>}/>
          <Route path="/login/recuperarasenha" element={<RecuperarSenha/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
