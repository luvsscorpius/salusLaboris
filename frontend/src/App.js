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
import { Usuarios } from "./Pages/Usuarios/Usuarios";
import { GerenciarPosts } from "./Pages/GerenciarPosts/GerenciarPosts";
import { AdicionarPost } from "./Pages/AdicionarPost/AdicionarPost";
import { EditarPost } from './Pages/EditarPost/EditarPost'
import SalusProvider from "./Context/Context";
import { ProtectedRoute } from "./Routes/ProtectedRoute";

function App() {

  return (
    <>
    <SalusProvider>
      <GlobalStyle/>
      <Router>
              <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/login/esqueceuasenha" element={<EsqueceuSenha/>}/>
          <Route path="/login/recuperarasenha" element={<RecuperarSenha/>}/>
          <Route path="/adm/blog" element={<ProtectedRoute><Blog/></ProtectedRoute>}/>
          <Route path="/adm/gerenciarposts" element={<GerenciarPosts/>}/>
          <Route path="/adm/usuarios" element={<Usuarios/>}/>
          <Route path="/adm/criarpost" element={<AdicionarPost/>}/>
          <Route path="/adm/editarpost" element={<EditarPost/>}/>
        </Routes>
      </Router>
      <Footer/>
      </SalusProvider>
    </>
  );
}

export default App;
