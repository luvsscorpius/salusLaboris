import styled from 'styled-components'

export const footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0 50px 0;
    font-family: "Poppins", sans-serif;
    background-color: #233D4D;
    gap: 50px;
`

export const titleContainer = styled.div` 
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    h3 {
        text-align: center;
        font-weight: 800;
        color: #fff;
        opacity: 0.85;
        font-size: 18px;
    }

    h2 {
        text-align: center;
        font-weight: 800;
        color: #4A7C59;
        opacity: 0.85;
        font-size: 30px;
    }
`

export const atendimentoContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #fff;
    opacity: 0.85;

    h4 {
        font-weight: 800;
        font-size: 18px;
    }

    p {
        text-align: center;
        font-weight: 400;
        font-size: 16px;
    }
`