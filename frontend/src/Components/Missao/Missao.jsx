import React from 'react'
import * as M from './Styles'
import missaoImage from '../../assets/missaoImage.webp'

export const Missao = () => {
  return (
    <M.main >
        <img src={missaoImage} alt="Imagem de background do componente missão, visão e valores" type="image/webp" />

        <M.titleContainer>
          <h1>COMO FAZEMOS?</h1>
        </M.titleContainer>

        <M.infoContainer>
          <M.infoContent>

            <h2>MISSÃO</h2>
            <p>Promover saúde e segurança no trabalho com soluções integradas e humanizadas, através de uma equipe multidisciplinar qualificada, garantindo o bem-estar dos colaboradores e a sustentabilidade das empresas em todo o Brasil.</p>

          </M.infoContent>

          <M.infoContent>

            <h2>VISÃO</h2>
            <p>Ser referência nacional em saúde ocupacional, reconhecida pelo compromisso com ambientes de trabalho mais seguros, saudáveis e socialmente responsáveis.</p>

          </M.infoContent>

          <M.infoContent>

            <h2>VALORES</h2>
            <p>Ética, responsabilidade social, excelência técnica, humanização, acessibilidade e colaboração.</p>

          </M.infoContent>
        </M.infoContainer>
    </M.main  >
  )
}
