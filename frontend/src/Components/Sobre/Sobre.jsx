import React from 'react'
import * as S from './Styles'
import sobreImage from '../../assets/sobreImage.webp'
import KarinStela from '../../assets/KarinStela.webp'
import EvertonDuarte from '../../assets/EvertonDuarte.webp'
import WanderDelgado from '../../assets/WanderDelgado.webp'

export const Sobre = () => {

    const cards = [
        {
            nome: "KARIN STELA",
            cargo: "PRESIDENTE",
            altImage: "Foto da presidente Karin Stela",
            image: KarinStela
        },
        {
            nome: "EVERTON DUARTE",
            cargo: "VICE-PRESIDENTE",
            altImage: "Foto do vice-presidente Everton Duarte",
            image: EvertonDuarte
        },
        {
            nome: "WANDER DELGADO",
            cargo: "DIRETOR FINANCEIRO",
            altImage: "Foto do diretor financeiro",
            image: WanderDelgado
        },
    ]


    return (
        <S.main id="sobre">
            <S.quemSomosContainer>
                <span className='spanContainer'>
                    <S.titleContainer className='quemSomosTitle'>
                        <h1>QUEM SOMOS?</h1>
                    </S.titleContainer>

                    <S.cardInfo>
                        <p>A <span>Salus Laboris</span> é uma associação privada dedicada à promoção da saúde ocupacional e à segurança do trabalho, com sede em Santa Rita do Sapucaí, MG. Desde nossa fundação em 2025, oferecemos serviços personalizados de laudos técnicos (LTCAT, PCMSO, PGR), análise de riscos e consultoria conforme as normas regulamentadoras brasileiras e diretrizes da ABNT.</p>
                    </S.cardInfo>
                </span>


                <img src={sobreImage} alt="Ilustração segurança do trabalho" />

            </S.quemSomosContainer>

            <S.titleContainer>
                <h1>NOSSA EQUIPE</h1>
            </S.titleContainer>

            <S.cardInfo className='cardInfoEquipe'>
                <p>Na <span>Salus Laboris</span>, acreditamos que pessoas são o maior patrimônio. Nossa equipe é formada por profissionais qualificados em medicina e segurança do trabalho, comprometidos em oferecer soluções que promovem ambientes de trabalho mais seguros e saudáveis.</p>
            </S.cardInfo>


            <S.cardContainer>
                {cards.map((card) => (
                    <S.card>
                        <img src={card.image} alt={card.altImage} />
                        <h3>{card.nome}</h3>
                        <h2>{card.cargo}</h2>
                    </S.card>
                ))}
            </S.cardContainer>
        </S.main>
    )
}
