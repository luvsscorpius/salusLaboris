import React, { useContext, useState } from 'react'
import * as L from '../Login/Styles'
import logo from '../../assets/logo.webp'
import { HiOutlineMail } from "react-icons/hi";
import { FaClockRotateLeft } from "react-icons/fa6";
import { SalusContext } from '../../Context/Context';
import { toast } from 'react-toastify';

export const EsqueceuSenha = () => {

  const { changePassword } = useContext(SalusContext)

  const [changePasswordEmail, setChangePasswordEmail] = useState("")

  // função para checar se o input do email esta vazio
  const checkEmailInput = () => {
    if (changePasswordEmail === "") {
      toast.warning("Informe um e-mail antes de prosseguir")
    } else {
      changePassword(changePasswordEmail)
    }
  }

  return (
    <L.login>
      <L.loginContainer>
        <L.loginHeader>
          <FaClockRotateLeft size={28} />
          <p>Esqueceu a senha</p>
        </L.loginHeader>

        <div className="containers">
          <L.loginBody className='firstLogin'>
            <img src={logo} alt="Logo da empresa" />

            <p>Conectando cuidado, segurança e inovação no ambiente de trabalho.</p>
          </L.loginBody>

          <L.loginBody>

            <p>Informe o e-mail cadastrado da conta que enviaremos um link para recuperação da conta.</p>

            <L.inputContainer>

              <label htmlFor="email">Email</label>

              <span>
                <HiOutlineMail size={45} />
                <input type="email" name="email" value={changePasswordEmail} onChange={(e) => setChangePasswordEmail(e.target.value)} placeholder='Digite seu e-mail' required />
              </span>
            </L.inputContainer>

            <L.inputContainer>

              <div className="buttonContainer">
                <button onClick={checkEmailInput} id='entrar'>ENVIAR LINK</button>
              </div>

              <a href="/login">Entrar</a>
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
