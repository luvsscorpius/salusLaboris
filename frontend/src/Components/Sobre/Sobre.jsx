import React from 'react'
import * as S from './Styles'
import sobreImage from '../../assets/sobreImage.webp'

export const Sobre = () => {
  return (
    <S.main>
        <S.titleContainer>
            <h1>QUEM SOMOS?</h1>
        </S.titleContainer>

        <S.cardContainer>
            <p>A <span>Salus Laboris</span> é uma associação privada dedicada à promoção da saúde ocupacional e à segurança do trabalho, com sede em Santa Rita do Sapucaí, MG. Desde nossa fundação em 2025, oferecemos serviços personalizados de laudos técnicos (LTCAT, PCMSO, PGR), análise de riscos e consultoria conforme as normas regulamentadoras brasileiras e diretrizes da ABNT.</p>
        </S.cardContainer>

        <img src={sobreImage} alt="Ilustração segurança do trabalho" />

        <S.titleContainer>
            <h1>NOSSA EQUIPE</h1>
        </S.titleContainer>

        <S.cardContainer>
            <p>Na <span>Salus Laboris</span>, acreditamos que pessoas são o maior patrimônio. Nossa equipe é formada por profissionais qualificados em medicina e segurança do trabalho, comprometidos em oferecer soluções que promovem ambientes de trabalho mais seguros e saudáveis.</p>
        </S.cardContainer>
    </S.main>
  )
}
