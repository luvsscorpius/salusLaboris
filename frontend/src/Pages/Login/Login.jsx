import React, { useContext, useState } from 'react'
import * as L from './Styles'
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import logo from '../../assets/logo.webp'
import { MdOutlineLock } from "react-icons/md";
import { LuEyeClosed } from "react-icons/lu";
import { SalusContext } from '../../Context/Context';

export const Login = () => {

  const {users} = useContext(SalusContext)

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const checkUsers = (e) => {
    if (data.email === users.email && data.password === users.password) {
      console.log("achei")
    } else {
      console.log("Dados não encontrados")
    }
  }

  return (
    <L.login>
      <L.loginContainer>

        <L.loginHeader>
          <FaRegCircleUser size={32} />
          <p>Login</p>
        </L.loginHeader>

        <div className="containers">
          <L.loginBody className='firstLogin'>
            <img src={logo} alt="Logo da empresa" />

            <p>Conectando cuidado, segurança e inovação no ambiente de trabalho.</p>
          </L.loginBody>

          <L.loginBody>
            <form onSubmit={(e) => e.preventDefault()}>
              <L.inputContainer>
                <label htmlFor="email">Email</label>

                <span>
                  <HiOutlineMail size={45} />
                  <input type="email" name="email" placeholder='Digite seu e-mail' value={data.email} onChange={(e) => setData({email: e.target.value})} required />
                </span>
              </L.inputContainer>

              <L.inputContainer>
                <label htmlFor="senha">Senha</label>

                <span>
                  <MdOutlineLock size={45} />
                  <input type="password" name="senha" placeholder='Digite sua senha' value={data.password} onChange={(e) => setData({password: e.target.value})} required />
                  <button><LuEyeClosed size={45} /></button>
                </span>

                <div className="buttonContainer">
                  <button id='entrar' type='submit'>ENTRAR</button>
                </div>

                <a href="/login/esqueceuasenha">Esqueceu a senha?</a>
              </L.inputContainer>
            </form>
          </L.loginBody>
        </div>

        <L.loginFooter>
          <img src={logo} alt="Logo da empresa" />
        </L.loginFooter>
      </L.loginContainer>
    </L.login>
  )
}
