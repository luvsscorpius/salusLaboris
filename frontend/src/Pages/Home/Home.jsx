import React from 'react'
import * as H from './Styles'
import { Hero } from '../../Components/Hero/Hero'
import { Sobre } from '../../Components/Sobre/Sobre'

export const Home = () => {
  return (
    <H.home>
        <Hero/>
        <Sobre/>
    </H.home>
  )
}
