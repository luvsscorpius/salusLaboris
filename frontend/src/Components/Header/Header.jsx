import React from 'react'
import * as H from './Styles'
import { IoMenuSharp } from "react-icons/io5";
import logo from '../../assets/logo.webp'

export default function Header() {
  return (
    <H.header>
        <img src={logo} alt="Logo da header" />
        <IoMenuSharp />
    </H.header>
  )
}
