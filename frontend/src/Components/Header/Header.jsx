import React, { useState } from 'react'
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

export default function Header() {
  const [open, setOpen] = useState(false)

  const location = useLocation()
  const isAdmRoute = location.pathname.startsWith("/adm");

  return (
    <H.header>
      <img src={logo} alt="Logo da header" />

      <H.navLinks open={open}>
        {isAdmRoute ? (
          <ul>
            <li>
              <span>
                <TiHome />
                <a href="/adm/dashboard" rel="noreferrer">Dashboard</a>
              </span>
            </li>
            <li>
              <span>
                <FaBloggerB />
                <a href="/adm/blog" rel="noreferrer">Posts</a>
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
                <a href="/" rel="noreferrer">Sair</a>
              </span>
            </li>
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
