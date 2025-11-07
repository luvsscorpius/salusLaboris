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
import { useLocation } from 'react-router-dom';
import { SalusContext } from '../../Context/Context';

export default function Header() {
  const [open, setOpen] = useState(false)

  const { logout } = useContext(SalusContext)

  const location = useLocation()
  const isAdmRoute = location.pathname.startsWith("/adm");

  return (
    <H.header>
      <img src={logo} alt="Logo da header" />

      <H.navLinks open={open}>
        {isAdmRoute ? (
          <ul>
            <div>
              <h4>PRINCIPAL</h4>
              <li>
                <span>
                  <TiHome />
                  <a href="/adm/dashboard" rel="noreferrer">Dashboard</a>
                </span>
              </li>
              <li>
                <span>
                  <TiHome />
                  <a href="/adm/blog" rel="noreferrer">Posts recentes</a>
                </span>
              </li>
            </div>

            <div>
              <h4>GERENCIAMENTO</h4>
              <li>
                <span>
                  <TiHome />
                  <a href="/adm/gerenciarposts" rel="noreferrer">Posts</a>
                </span>
              </li>
              <li>
                <span>
                  <IoIosPeople />
                  <a href="/adm/usuarios" rel="noreferrer">Usuários</a>
                </span>
              </li>
              <li>
                <span>
                  <IoIosPeople />
                  <a href="/adm/categorias" rel="noreferrer">Categorias</a>
                </span>
              </li>
              <li>
                <span>
                  <BiSolidLogInCircle />
                  <button onClick={logout}><a rel="noreferrer">Sair</a></button>
                </span>
              </li>
            </div>

          </ul>
        ) : (
          <ul>
            <li>
              <span>
                <TiHome />
                <a href="/" rel="noreferrer">Home</a>
              </span>
            </li>
            <li>
              <span>
                <MdOutlineMedicalServices />
                <a href="#servicos" rel="noreferrer">Serviços</a>
              </span>
            </li>
            <li>
              <span>
                <IoIosPeople />
                <a href="#sobre" rel="noreferrer">Sobre</a>
              </span>
            </li>
            <li>
              <span>
                <FaBloggerB />
                <a href="#blog" rel="noreferrer">Blog</a>
              </span>
            </li>
            <li>
              <span>
                <IoCall />
                <a href="#contato" rel="noreferrer">Contato</a>
              </span>
            </li>
            <li>
              <span>
                <BiSolidLogInCircle />
                <a href="/login" rel="noreferrer">Login</a>
              </span>
            </li>
          </ul>
        )}
      </H.navLinks>

      <IoMenuSharp onClick={() => setOpen(!open)} />
    </H.header>
  )
}
