import React from 'react'
import * as H from './Styles'
import background from '../../assets/occupational-health.webp'

export const Hero = () => {
  return (
    <H.hero>
      <img src={background} alt="Imagem de fundo" />

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
