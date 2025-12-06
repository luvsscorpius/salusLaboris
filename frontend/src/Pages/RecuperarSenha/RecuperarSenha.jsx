import React from 'react'
import * as L from '../Login/Styles'
import logo from '../../assets/logo.webp'
import { MdOutlineLock } from "react-icons/md";
import { LuEyeClosed } from "react-icons/lu";
import { FaClockRotateLeft } from "react-icons/fa6";

export const RecuperarSenha = () => {
    return (
        <L.login>
            <L.loginContainer>

                <L.loginHeader>
                    <FaClockRotateLeft size={28}/>
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
                                <input type="password" name="novasenha" placeholder='Digite sua nova senha' />
                                <button><LuEyeClosed size={45} /></button>
                            </span>

                        </L.inputContainer>


                        <L.inputContainer>
                            <label htmlFor="senha">Senha</label>

                            <span>
                                <MdOutlineLock size={45} />
                                <input type="password" name="senha" placeholder='Confirma nova senha' />
                                <button><LuEyeClosed size={45} /></button>
                            </span>

                            <div className="buttonContainer">
                                <button id='entrar'>REDEFINIR SENHA</button>
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
