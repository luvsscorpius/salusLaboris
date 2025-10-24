import React from 'react'
import * as L from './Styles'
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import logo from '../../assets/logo.webp'
import { MdOutlineLock } from "react-icons/md";
import { LuEyeClosed } from "react-icons/lu";

export const Login = () => {
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
            <L.inputContainer>
              <label htmlFor="email">Email</label>

              <span>
                <HiOutlineMail size={45} />
                <input type="email" name="email" placeholder='Digite seu e-mail' />
              </span>
            </L.inputContainer>

            <L.inputContainer>
              <label htmlFor="senha">Senha</label>

              <span>
                <MdOutlineLock size={45} />
                <input type="password" name="senha" placeholder='Digite sua senha' />
                <button><LuEyeClosed size={45} /></button>
              </span>

              <div className="buttonContainer">
                <button id='entrar'>ENTRAR</button>
              </div>

              <a href="#">Esqueceu a senha?</a>
            </L.inputContainer>

          </L.loginBody>
        </div>

        <L.loginFooter>
          <img src={logo} alt="Logo da empresa" />
        </L.loginFooter>
      </L.loginContainer>
    </L.login>
  )
}
