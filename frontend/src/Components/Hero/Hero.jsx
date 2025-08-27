import React from 'react'
import * as H from './Styles'
import background from '../../assets/occupational-health.webp'

export const Hero = () => {
  return (
    <H.hero>
        <img src={background} alt="Imagem de fundo" />
    </H.hero>
  )
}
