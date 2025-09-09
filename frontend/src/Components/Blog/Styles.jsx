import styled from 'styled-components'

export const main = styled.main` 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #233D4D;
    font-family: "Poppins", sans-serif;
    padding: 50px 0 50px 0;
    gap: 50px;
`

export const titleContainer = styled.div`
    width: 90%;

    h2 {
        text-align: center;
        color: #4A7C59;
        font-size: 34px;
        font-weight: 800;
    }

    h3 {
        text-align: center;
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 800;
        opacity: 0.90;
    }
`

export const cardsContainer = styled.div` 
    width: 90%;
    padding: 0 10px 0 10px;
`

export const card = styled.div`
    border: 1px solid red;
`

export const cardHeader = styled.div`
    border: 1px solid red;
    height: 100px;
    
    p {
        padding: 10px 0px 0 10px;
    }
`