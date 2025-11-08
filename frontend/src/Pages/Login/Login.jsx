import React, { useContext, useState } from 'react'
import * as L from './Styles'
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import logo from '../../assets/logo.webp'
import { MdOutlineLock } from "react-icons/md";
import { LuEyeClosed } from "react-icons/lu";
import { SalusContext } from '../../Context/Context';
import { TbEye } from "react-icons/tb";
import { toast } from 'react-toastify';

export const Login = () => {

  const { users, setIsUserLogged, navigate } = useContext(SalusContext)

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const checkUsers = (e) => {
    const userFound = users.find(
      (user) => user.email === data.email
    )

    if (data.email === "" || data.password === "") {
      toast.warning("Necessário preencher os campos de e-mail e senha")
    } else if (!userFound) {
      setIsUserLogged(false)
      sessionStorage.setItem("isUserLogged", false)
      toast.warning("Usuário não encontrado") 
    } else if (userFound.email === data.email && userFound.password !== data.password) {
      toast.error("Senha incorreta, tente novamente")
    } else if (userFound.email === data.email && userFound.password === data.password) {
      setIsUserLogged(true)
      sessionStorage.setItem("isUserLogged", true)
      navigate('/adm/blog')
      toast.success("Login realizado com sucesso")
    }
  }

  // função para mostrar a senha
  const [type, setType] = useState("password")
  const showPassword = (e) => {
    console.log("Oi")
    if (type === "password") {
      setType("text")
    } else {
      setType("password")
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
                  <input type="email" name="email" placeholder='Digite seu e-mail' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} autoComplete='on' required />
                </span>
              </L.inputContainer>

              <L.inputContainer>
                <label htmlFor="senha">Senha</label>

                <span>
                  <MdOutlineLock size={45} />
                  <input type={type} name="senha" placeholder='Digite sua senha' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} autoComplete='on' required />
                  <button onClick={(e) => showPassword(e)}>{type === "password" ? <LuEyeClosed size={45} /> : <TbEye size={45} />}</button>
                </span>

                <div className="buttonContainer">
                  <button id='entrar' type='submit' onClick={((e) => checkUsers())}>ENTRAR</button>
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
