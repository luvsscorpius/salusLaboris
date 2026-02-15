import React, { useContext, useState } from 'react'
import * as H from './Styles'
import { IoMenuSharp } from "react-icons/io5";
import logo from '../../assets/logo.webp'
import { TiHome } from "react-icons/ti";
import { MdOutlineMedicalServices } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaBloggerB } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { BiSolidLogInCircle } from "react-icons/bi";
import { useLocation, Link } from 'react-router-dom';
import { SalusContext } from '../../Context/Context';

export default function Header() {
  const [open, setOpen] = useState(false)

  const { logout, navigate } = useContext(SalusContext)

  const location = useLocation()
  const isAdmRoute = location.pathname.startsWith("/adm")

  const [active, setActive] = useState("active")

  const scrollToSection = (id) => {
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }

    setOpen(false)
  }

  return (
    <H.header>
      <img src={logo} alt="Logo da header" onClick={(e) => navigate("/")} type="image/webp" />

      <H.navLinks open={open}>
        {isAdmRoute ? (
          <ul>
            <div>
              <h4>PRINCIPAL</h4>
              <li>
                <span className={location.pathname === "/adm/dashboard" ? active : ""}>
                  <TiHome />
                  <Link to="/adm/dashboard">Dashboard</Link>
                </span>
              </li>
              <li>
                <span className={location.pathname === "/adm/blog" ? active : ""}>
                  <TiHome />
                  <Link to="/adm/blog">Posts recentes</Link>
                </span>
              </li>
            </div>

            <div>
              <h4>GERENCIAMENTO</h4>
              <li>
                <span className={
                  location.pathname === "/adm/gerenciarposts" ||
                    location.pathname === "/adm/criarpost" ||
                    location.pathname === "/adm/editarpost"
                    ? active
                    : ""
                }>
                  <TiHome />
                  <Link to="/adm/gerenciarposts">Posts</Link>
                </span>
              </li>

              <li>
                <span className={
                  location.pathname === "/adm/usuarios" ||
                    location.pathname === "/adm/criarusuario" ||
                    location.pathname === "/adm/editarusuario"
                    ? active
                    : ""
                }>
                  <IoIosPeople />
                  <Link to="/adm/usuarios">Usuários</Link>
                </span>
              </li>

              <li>
                <span className={
                  location.pathname === "/adm/categorias" ||
                    location.pathname === "/adm/adicionarcategoria" ||
                    location.pathname === "/adm/editarcategoria"
                    ? active
                    : ""
                }>
                  <IoIosPeople />
                  <Link to="/adm/categorias">Categorias</Link>
                </span>
              </li>

              <li>
                <span>
                  <BiSolidLogInCircle />
                  <button onClick={logout}>
                    <span>Sair</span>
                  </button>
                </span>
              </li>
            </div>
          </ul>
        ) : (
          <ul>
            <li>
              <span>
                <TiHome />
                <Link to="/" className='button'>Home</Link>
              </span>
            </li>

            <li>
              <span>
                <MdOutlineMedicalServices />
                <Link onClick={() => scrollToSection("servicos")} className='button' to='/'>
                  Serviços
                </Link>
              </span>
            </li>

            <li>
              <span>
                <IoIosPeople />
                <Link onClick={() => scrollToSection("sobre")} className='button' to='/'>
                  Sobre
                </Link>
              </span>
            </li>

            <li>
              <span>
                <FaBloggerB />
                <Link onClick={() => scrollToSection("blog")} className='button' to='/'>
                  Blog
                </Link>
              </span>
            </li>

            <li>
              <span>
                <IoCall />
                <Link onClick={() => scrollToSection("contato")} className='button' to='/'>
                  Contato
                </Link>
              </span>
            </li>
            
            <li>
              <span>
                <BiSolidLogInCircle />
                <Link to="/login" className='button'>Login</Link>
              </span>
            </li>
          </ul>
        )}
      </H.navLinks>

      <IoMenuSharp onClick={() => setOpen(!open)} />
    </H.header>
  )
}
