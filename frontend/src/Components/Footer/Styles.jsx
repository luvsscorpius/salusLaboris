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

export const mailingContainer = styled.div` 
    width: 90%;
`

export const mailingCard = styled.div`
`

export const mainlingHeader = styled.div` 
    background-color: #4A7C59;
    padding: 10px 0;
    border-radius: 10px 10px 0 0;

    h3 {
        text-align: center;
        color: #fff;
        opacity: 0.85;
    }
`

export const mainlingBody = styled.div`
    padding: 10px 10px;
    color: #fff;
    opacity: 0.85;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
    z-index: 10;
    background-color: #233D4D;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        object-fit: cover;
        z-index: 2;
        opacity: 0.50;
    }

    .inputContainer {
        display: flex;
        flex-direction: column;
        z-index: 10;
    }

    p {
        text-align: justify;
        font-size: 18px;
        z-index: 10;
    }

    label {
        font-size: 18px;
        z-index: 10;
    }

    input {
        height: 48px;
        border-radius: 5px;
        z-index: 10;
        border: none;
        padding: 0 0px 0 10px;
        font-size: 18px;
    }

    button {
        font-size: 20px;
        height: 48px;
        background-color: #4A7C59;
        color: #fff;
        border: none;
        font-weight: 800;
        border-radius: 5px;
        z-index: 10;

        &:hover {
            cursor: pointer;
            opacity: 0.96;
            transition: 0.3s ease-in-out;
        }
    }
`