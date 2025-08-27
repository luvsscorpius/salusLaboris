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
          <span>
            <TiHome />
            <li href="">Home</li>
          </span>
          <span>
            <MdOutlineMedicalServices />
            <li href="">Serviços</li>
          </span>
          <span>
            <IoIosPeople />
            <li href="">Sobre</li>
          </span>

          <span>
            <FaBloggerB />
            <li href="">Blog</li>
          </span>

          <span>
            <IoCall />
            <li href="">Contato</li>
          </span>

          <span>
            <BiSolidLogInCircle />
            <li href="">Login</li>
          </span>

        </ul>
      </H.navLinks>

      <IoMenuSharp onClick={() => setOpen(!open)} />
    </H.header>
  )
}
