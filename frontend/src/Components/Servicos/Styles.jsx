import styled from 'styled-components'

export const main = styled.main`
    background-color: #233D4D;
`

export const TitleContainer = styled.div`
    text-align: center;
    font-family: "Poppins", sans-serif;
    padding: 50px 0 10px 0;

    h3 {
        font-size: 22px;
        color: #4A7C59;
        font-weight: 800;
        height: 22px;
    }

    h2 {
        font-size: 32px;
        font-weight: 800;
        color: #fff;
        opacity: 0.85;
    }
`

export const cardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: 20px;
`

export const card = styled.div`
    width: 90%;
    height: 355px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    color: #eee;
    opacity: 0.9;
    gap: 3px;
    position: relative;
    padding: 20px 0px 10px 0;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.5) 2px 4px 4px 2px;
    transition: transform 0.3s ease-in-out;

    .icon {
        width: 100px;
        z-index: 10;
    }

    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
        border-radius: 5px;
        opacity: 0.3;
    }

    h3 {
        font-size: 24px;
        z-index: 10;
        font-weight: 800;
        width: 100%;
        text-align: center;
        padding: 0px 20px 0px 20px;
    }

    p {
        width: 100%;
        z-index: 10;
        padding: 20px;
        text-align: justify;
        font-weight: 500;
        font-size: 20px;
    }

    &:hover {
        cursor: pointer;
        transform: scale(0.98)
    }
`