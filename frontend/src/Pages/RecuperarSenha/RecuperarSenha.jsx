import React, { useContext, useState } from 'react'
import * as L from '../Login/Styles'
import logo from '../../assets/logo.webp'
import { MdOutlineLock } from "react-icons/md";
import { LuEyeClosed } from "react-icons/lu";
import { FaClockRotateLeft } from "react-icons/fa6";
import { toast } from 'react-toastify';
import { TbEye } from "react-icons/tb";
import { SalusContext } from '../../Context/Context';

export const RecuperarSenha = () => {

    const {resetPassword} = useContext(SalusContext)

    const [novaSenha, setNovaSenha] = useState({
        senha: "",
        confirmacaoSenha: "",
        email: localStorage.getItem("emailChangePass")
    })

    const checkPasswords = () => {
        if (novaSenha.senha !== novaSenha.confirmacaoSenha) {
            toast.error("Senhas não são iguais, por favor tente novamente.")
            return
        }

        resetPassword(novaSenha)
    }

    // função para mostrar a senha
    const [type, setType] = useState("password")
    const showPassword = (e) => {
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
                    <FaClockRotateLeft size={28} />
                    <p>Redefinir senha</p>
                </L.loginHeader>

                <div className="containers">
                    <L.loginBody className='firstLogin'>
                        <img src={logo} alt="Logo da empresa" />

                        <p>Conectando cuidado, segurança e inovação no ambiente de trabalho.</p>
                    </L.loginBody>

                    <L.loginBody>
                        <L.inputContainer>
                            <label htmlFor="novasenha">Nova Senha</label>

                            <span>
                                <MdOutlineLock size={45} />
                                <input type={type} name="novasenha" placeholder='Digite sua nova senha' value={novaSenha.senha} onChange={(e) => setNovaSenha({ ...novaSenha, senha: e.target.value })} />
                                <button onClick={(e) => showPassword(e)}>{type === "password" ? <LuEyeClosed size={45} /> : <TbEye size={45} />}</button>
                            </span>

                        </L.inputContainer>


                        <L.inputContainer>
                            <label htmlFor="senha">Senha</label>

                            <span>
                                <MdOutlineLock size={45} />
                                <input type={type} name="senha" placeholder='Confirma nova senha' value={novaSenha.confirmacaoSenha} onChange={(e) => setNovaSenha({ ...novaSenha, confirmacaoSenha: e.target.value })} />
                                <button onClick={(e) => showPassword(e)}>{type === "password" ? <LuEyeClosed size={45} /> : <TbEye size={45} />}</button>
                            </span>

                            <div className="buttonContainer">
                                <button id='entrar' onClick={() => checkPasswords()}>REDEFINIR SENHA</button>
                            </div>

                            <a href="/login">Entrar?</a>
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
