import React from 'react'
import * as S from './Styles'
import WorksafetyIcon from '../../assets/work-safety.png'
import hiegieneOcupacionalIcon from '../../assets/hiegieneOcupacionalIcon.png'
import auditoriaIcon from '../../assets/auditoriaIcon.png'
import Blob from '../../assets/blob-scene-haikei.svg'

export const Servicos = () => {
    return (
        <S.main>
            <S.TitleContainer>
                <h3>SOLUÇÕES EM DESTAQUE</h3>
                <h2>NOSSOS SERVIÇOS</h2>
            </S.TitleContainer>

            <S.cardContainer>
                <S.card>
                    <img src={Blob} className='background' alt="" />
                    <img src={WorksafetyIcon} className='icon' alt="Icone de segurança do trabalho no card 1" />
                    <h3>Segurança do Trabalho</h3>
                    <p>Serviços de prevenção de acidentes por meio de programas conforme normas legais – NR, análise de risco e acompanhamento técnico.</p>
                </S.card>

                <S.card>
                    <img src={Blob} className='background' alt="" />
                    <img src={hiegieneOcupacionalIcon} className='icon' alt="Icone de hiegiene ocupacional no card 2" />
                    <h3>Higiene Ocupacional</h3>
                    <p>Identificação e controle de agentes de risco (químicos, físicos, biológicos) no ambiente de trabalho.</p>
                </S.card>

                <S.card>
                    <img src={Blob} className='background' alt="" />
                    <img src={auditoriaIcon} className='icon' alt="Icone de auditoria no card 3" />
                    <h3>Auditoria e Treinamento</h3>
                    <p>Inclui exames médicos periódicos, programas preventivos e monitoramento da saúde dos colaboradores.</p>
                </S.card>
            </S.cardContainer>
        </S.main>
    )
}
