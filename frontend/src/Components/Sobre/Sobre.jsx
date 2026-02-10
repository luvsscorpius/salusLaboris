import React from 'react'
import * as S from './Styles'
import KarinStela from '../../assets/KarinStela.webp'
import sobreImage from '../../assets/sobreImage.webp'

export const Sobre = () => {

    const cards = [
        {
            nome: "KARIN STELA",
            cargo: "PRESIDENTE",
            altImage: "Foto da presidente Karin Stela",
            image: KarinStela,
            desc: "Educadora física, ergonomista e técnica em segurança do trabalho com mais de 15 anos de experiência em prevenção de riscos, ergonomia aplicada a promoção da qualidade de vida ocupacional."
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


                <img src={sobreImage} alt="Ilustração segurança do trabalho" type="image/webp"   fetchpriority="high" loading='lazy' />

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
                        <img src={card.image} alt={card.altImage} type="image/webp" loading='lazy' fetchpriority="high" />
                        <h3>{card.nome}</h3>
                        <h2>{card.cargo}</h2>
                        <p>{card.desc}</p>
                    </S.card>
                ))}

                <S.descContainer>
                    <h1>Palavra da Presidente</h1>

                    <p>É com grande satisfação que, como presidente do Instituto Salus Laboris, reafirmo nosso compromisso com a promoção da saúde, da segurança e do bem-estar no trabalho.</p>
                    <p>O Salus Laboris nasceu com o propósito de transformar realidades, oferecendo conhecimento técnico e humano para que empresas e profissionais possam construir ambientes laborais mais seguros, saudáveis e sustentáveis.</p>
                    <p>Acreditamos que cuidar das pessoas é o primeiro passo para o verdadeiro desenvolvimento. Por isso, cada ação do Instituto é guiada por valores de responsabilidade, ética e respeito à vida — pilares que sustentam nossa missão.
                    </p>
                    <p>Seguimos trabalhando com dedicação para fortalecer uma cultura de prevenção, apoiando organizações e comunidades na construção de um futuro mais equilibrado, produtivo e humano.</p>
                </S.descContainer>
            </S.cardContainer>
        </S.main>
    )
}
