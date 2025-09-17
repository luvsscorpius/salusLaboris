import styled from 'styled-components'

export const main = styled.main` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0 50px 0;
    font-family: "Poppins", sans-serif;
`

export const locationContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`

export const titleContainer = styled.div`
    padding: 0 10px 0 10px;
    width: 100%;

    h3 {
        text-align: center;
        font-size: 22px;
        font-weight: 800;
        color: #1d1d1d;
        opacity: 0.90;
    }

    h2 {
        text-align: center;
        font-size: 30px;   
        font-weight: 800; 
        color: #4A7C59;
    }
`

export const mapContainer = styled.div`
    width: 90%;

    .leaflet-container {
        width: 100%;
        height: 400px;
    }
`

export const descContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 0 10px 0 10px;
    width: 90%;

    h3 {
        color: #1d1d1d;
        opacity: 0.85;
        font-weight: 800;
        text-align: center;
        font-size: 18px;
    }

    p {
        color: #4A7C59;
        opacity: 0.85;
        font-weight: 800;
        text-align: center;
        font-size: 14px;
    }
`

