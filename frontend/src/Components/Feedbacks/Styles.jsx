import styled from 'styled-components'

export const main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    padding: 50px 0 50px 0;
    gap: 70px;
`

export const titleContainer = styled.div`
    width: 90%;

    h2 {
        text-align: center;
        color: #4A7C59;
        font-weight: 800;
        padding: 0 10px 0 10px;
        font-size: 30px;
    }
        
    h3 {
        text-align: center;
        color: #1d1d1d;
        font-weight: 700;
        padding: 0 10px 0 10px;
        font-size: 20px;
        opacity: 0.9;
    }

    @media (min-width: 1024px) {
        width: 70%;
    }
`

export const textContainer = styled.div`
    width: 90%;
    padding: 0 10px 0 10px;

    p {
        font-size: 22px;
        text-align: justify;
        font-weight: 100;
    }

    span {
        background-color: #eee;
        color: #4A7C59;
        font-weight: 800;
    }

    @media (min-width: 1024px) {
        width: 70%;
    }
`

export const cardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    width: 90%;
    padding: 0 10px 10px 10px;
    overflow: auto;
    overflow-y: hidden;
    gap: 20px;

    @media (min-width: 1024px) {
        width: 70%;
        justify-content: center;
    }
`

export const card = styled.div`
    width: 100%;
    height: 600px;

    @media (min-width: 1024px) {
        width: 340px;
    }
`

export const cardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: #eee;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 5px 0px;
    z-index: 10;
    position: relative;
    width: 300px;
    height: 150px;

    img {
        width: 250px;
        padding: 50px 10px 50px 10px;
    }

    @media (min-width: 1024px) {
        width: 100%;
    }
`

export const cardBody = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    background-color: #fff;
    padding: 50px 20px 20px 20px;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 5px 0px;
    height: 300px;
    width: 300px;

    p {
        text-align: justify;
        font-size: 20px;
        font-weight: 100;
    }
`

export const cardFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 5px 0px;
    border-radius: 0px 0px 5px 5px;
    padding: 20px 20px 20px 20px;
    position: relative;
    z-index: 0;
    width: 300px;

    h3 {
        color: #1d1d1d;
        font-size: 20px;
        opacity: 0.85;
        font-weight: 700;
        text-align: center;
    }

    h2 {
        color: #4A7C59;
        font-size: 22px;
        opacity: 0.85;
        font-weight: 700;
        text-align: center;
        flex-wrap: wrap;
    }
`