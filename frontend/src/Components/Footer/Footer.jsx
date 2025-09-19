import React from 'react'
import * as F from './Styles'
import Blob from '../../assets/blob-scene-haikei.svg'

export const Footer = () => {
  return (
    <F.footer>
      <F.titleContainer>
        <h3>CUIDAR DE QUEM TRABALHA É CONSTRUIR UM FUTURO MAIS SAUDÁVEL PARA TODOS</h3>
        <h2>SEGURANÇA NÃO É CUSTO. <br /> É VALOR.</h2>
      </F.titleContainer>

      <F.atendimentoContainer>
        <h4>ATENDIMENTO</h4>

        <p>SEGUNDA – SEXTA: 09h30 – 17h30 <br />SÁBADO – DOMINGO: FECHADO</p>
      </F.atendimentoContainer>

      <F.mailingContainer>
        <F.mailingCard>

          <F.mainlingHeader>
            <h3>MAILING LIST</h3>
          </F.mainlingHeader>

          <F.mainlingBody>
            <img src={Blob} alt="Fundo do card" />

            <p>Cadastre seu e-mail e faça parte da nossa comunidade comprometida com ambientes de trabalho mais seguros e saudáveis.</p>

            <span className="inputContainer">
              <label>Email:</label>
              <input type="email" name="email" />
            </span>

            <button>QUERO RECEBER</button>
          </F.mainlingBody>

        </F.mailingCard>
      </F.mailingContainer>
    </F.footer>
  )
}
