import React, { useContext, useEffect } from 'react'
import * as H from './Styles'
import { Hero } from '../../Components/Hero/Hero'
import { Sobre } from '../../Components/Sobre/Sobre'
import { Servicos } from '../../Components/Servicos/Servicos'
import { Parceiros } from '../../Components/Parceiros/Parceiros'
import { Missao } from '../../Components/Missao/Missao'
import { Feedbacks } from '../../Components/Feedbacks/Feedbacks'
import { Blog } from '../../Components/Blog/Blog'
import { Localizacao } from '../../Components/Localizacao/Localizacao'
import { SalusContext } from '../../Context/Context'

export const Home = () => {

  const {fetchUsers, fetchCategories, fetchPosts} = useContext(SalusContext)

  useEffect(() => {
    fetchCategories()
    fetchPosts()
    fetchUsers()
  }, [])

  return (
    <H.home>
        <Hero/>
        <Sobre/>
        <Servicos />
        <Parceiros/>
        <Missao/>
        <Feedbacks/>
        <Blog/>
        <Localizacao/>
    </H.home>
  )
}
