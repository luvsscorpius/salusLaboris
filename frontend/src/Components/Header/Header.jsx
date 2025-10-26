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

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <H.header>
      <img src={logo} alt="Logo da header" />

      <H.navLinks open={open}>
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
              <a href='#contato' rel="noreferrer">Contato</a>
            </span>
          </li>

          <li>
            <span>
              <BiSolidLogInCircle />
              <span><a href="/login" rel="noreferrer">Login</a></span>
            </span>
          </li>
        </ul>

      </H.navLinks>

      <IoMenuSharp onClick={() => setOpen(!open)} />
    </H.header>
  )
}
