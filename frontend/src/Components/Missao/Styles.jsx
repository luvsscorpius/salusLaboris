import styled from 'styled-components'

export const main = styled.main`
    background-color: #233D4D;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    font-family: "Poppins", sans-serif;
    padding: 100px 0 100px 0;
    gap: 30px;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.3;
        z-index: 0;
    }
`

export const titleContainer = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;

    h1 {
        color: #4A7C59;
        background-color: #eee;
        z-index: 10;
        padding: 2px;
        font-size: 34px;
    }
`

export const infoContainer = styled.div` 
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 20px;
` 

export const infoContent = styled.div` 
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;

    h2 {
        font-size: 28px;
        color: #4A7C59;
        background-color: #eee;
        text-align: start;
        z-index: 10;
        font-weight: 800;
        width: fit-content; 
        padding: 2px;
    }

    p {
        font-size: 20px;
        text-align: justify;
        color: #fff;
        z-index: 10;
        font-weight: 100;
    }
`
