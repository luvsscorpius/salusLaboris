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
        font-size: 34px;   
        font-weight: 800; 
        color: #4A7C59;
    }
`

export const mapContainer = styled.div`
    width: 90%;
    padding: 50px 0 0 0;

    .leaflet-container {
        width: 100%;
        height: 400px;
    }
`

