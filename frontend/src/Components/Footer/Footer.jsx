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

      <div className="linksBox">
        <F.linksContainer>
          <h4>REDES SOCIAIS</h4>

          <ul>
            <li><a href="#">LINKEDIN</a></li>
            <li><a href="#">INSTAGRAM</a></li>
            <li><a href="#">YOUTUBE</a></li>
            <li><a href="#">FACEBOOK</a></li>
          </ul>
        </F.linksContainer>

        <F.linksContainer className='acesso'>
          <h4>ACESSO RÁPIDO</h4>

          <ul>
            <li><a href="#">AGENDAMENTO</a></li>
            <li><a href="#">ESTATUTO</a></li>
            <li><a href="#">TERMOS DE USO</a></li>
            <li><a href="#">POLÍTICAS DE PRIVACIDADE</a></li>
          </ul>
        </F.linksContainer>
      </div>

      <F.developedContainer>
        <p>© 2025 Salus Laboris – Instituto de Saúde Ocupacional</p>
        <a href='#'>Desenvolvido por Anderson Vitor</a>
      </F.developedContainer>
    </F.footer>
  )
}
