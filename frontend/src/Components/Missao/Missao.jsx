import React from 'react'
import * as M from './Styles'
import missaoImage from '../../assets/missaoImage.webp'

export const Missao = () => {
  return (
    <M.main >
        <img src={missaoImage} alt="Imagem de background do componente missão, visão e valores" />
    </M.main  >
  )
}
