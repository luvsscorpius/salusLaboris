import React from 'react'
import * as H from './Styles'
import fundoImage from '../../assets/occupational-health.webp'

export const Hero = () => {
  return (
    <H.hero>
      <img src={fundoImage} alt="Imagem de fundo" type="image/webp" fetchpriority="high"/>

      <span>
        <H.bar />
        <H.titleContainer>
          <h1>
            Ambientes de trabalho mais seguros e saudáveis começam aqui na <span>Salus Laboris</span>
          </h1>

          <p>
            Cuidamos da sua empresa com responsabilidade, atenção e soluções personalizadas.
          </p>
        </H.titleContainer>

        <H.buttonContainer>
          <button onClick={() => window.open("https://wa.link/i82shq", "_blank")}>Quero agendar um atendimento </button>
        </H.buttonContainer>
        <H.bar />
      </span>
    </H.hero>
  )
}
