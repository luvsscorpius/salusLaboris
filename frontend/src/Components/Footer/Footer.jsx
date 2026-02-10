import React, { useContext, useState } from 'react'
import * as F from './Styles'
import Blob from '../../assets/blob-scene-haikei.svg'
import { toast } from 'react-toastify'
import { SalusContext } from '../../Context/Context'

export const Footer = () => {

  const {addEmailNewsLetter} = useContext(SalusContext)

  const [newsLetterEmail, setNewsLetterEmail] = useState({
    email: "", 
    created_at: new Date().toISOString().split('T')[0]
  })

  const check = () => { 
    if (newsLetterEmail.email === "") {
      toast.warn("Por favor informe um e-mail para cadastro")
      return
    } 

    addEmailNewsLetter(newsLetterEmail)
  }

  return (
    <F.footer id='contato'>
      <F.titleContainer>
        <h3>CUIDAR DE QUEM TRABALHA É CONSTRUIR UM FUTURO MAIS SAUDÁVEL PARA TODOS</h3>
        <h2>SEGURANÇA NÃO É CUSTO. <br /> É VALOR.</h2>
      </F.titleContainer>

      <div className="footerContent">

        <F.mailingContainer className='mailingContainer'>
          <F.mailingCard>

            <F.mainlingHeader>
              <h3>MAILING LIST</h3>
            </F.mainlingHeader>

            <F.mainlingBody>
              <img src={Blob} alt="Fundo do card" />

              <p>Cadastre seu e-mail e faça parte da nossa comunidade comprometida com ambientes de trabalho mais seguros e saudáveis.</p>

              <span className="inputContainer">
                <label>Email:</label>
                <input type="email" name="email" value={newsLetterEmail.email} onChange={(e) => setNewsLetterEmail({...newsLetterEmail, email: e.target.value})}/>
              </span>

              <button onClick={() => check()}>QUERO RECEBER</button>
            </F.mainlingBody>

          </F.mailingCard>
        </F.mailingContainer>

        <div className="div">
          <F.atendimentoContainer className='atendimentoContainer'>
            <h4>ATENDIMENTO</h4>

            <p>SEGUNDA – SEXTA: 09h30 – 17h30 <br />SÁBADO – DOMINGO: FECHADO</p>
          </F.atendimentoContainer>

          <div className="linksBox">
            <F.linksContainer className='linksContainer'>
              <h4>REDES SOCIAIS</h4>

              <ul>
                <li><a href="https://www.linkedin.com/company/salus-laboris-instituto-de-saude-ocupacional" target='_blank' rel="noreferrer">LINKEDIN</a></li>
                <li><a href="https://www.instagram.com/saluslaboris.instituto/" target='_blank' rel="noreferrer">INSTAGRAM</a></li>
                <li><a href="https://www.youtube.com/channel/UCPweEbFrPqQjpwM_AwFwY7g" target='_blank' rel="noreferrer">YOUTUBE</a></li>
                <li><a href="#" rel="noreferrer">FACEBOOK</a></li>
              </ul>
            </F.linksContainer>

            <F.linksContainer className='acesso'>
              <h4>ACESSO RÁPIDO</h4>

              <ul>
                <li><a href="https://outlook.office365.com/book/AgendamentoSalusLaboris@saluslaboris.com.br/?ismsaljsauthenabled=true" target='_blank' rel="noreferrer">AGENDAMENTO</a></li>
                <li><a href="#" rel="noreferrer">ESTATUTO</a></li>
                <li><a href="#" rel="noreferrer">TERMOS DE USO</a></li>
                <li><a href="#" rel="noreferrer">POLÍTICAS DE PRIVACIDADE</a></li>
              </ul>
            </F.linksContainer>
          </div>
        </div>

      </div>

      <F.developedContainer>
        <p>© 2025 Salus Laboris – Instituto de Saúde Ocupacional</p>
        <a href='https://www.linkedin.com/in/andersonvitor1801/' target='__blank'>Desenvolvido por Anderson Vitor</a>
      </F.developedContainer>
    </F.footer>
  )
}
