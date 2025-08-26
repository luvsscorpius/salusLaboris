import React, { useState } from 'react'
import * as H from './Styles'
import { IoMenuSharp } from "react-icons/io5";
import logo from '../../assets/logo.webp'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <H.header>
        <img src={logo} alt="Logo da header" />

        <H.navLinks open={open}>
          <ul>
            <li href="">Home</li>
            <li href="">Serviços</li>
            <li href="">Sobre</li>
            <li href="">Blog</li>
            <li href="">Contato</li>
            <li href="">Login</li>
          </ul>
        </H.navLinks>

        <IoMenuSharp onClick={() => setOpen(!open)} />
    </H.header>
  )
}
