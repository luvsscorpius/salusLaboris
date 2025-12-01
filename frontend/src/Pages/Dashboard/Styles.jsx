import styled from "styled-components";

export const dashBoardContainer = styled.div`
    width: 100%;
    font-family: "Poppins", sans-serif;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const metricsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`

export const card = styled.div`
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);  
    display: flex;
    flex-direction: column;
    height: 80px;
    border-radius: 5px;
    align-items: center;
    width: 100%;
    justify-content: center;
    gap: 15px;
`

export const cardHeader = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-items: center;
    color: #4A7C59;

    p {
        font-weight: 800;
            font-family: "Poppins", sans-serif;
    }
`

export const cardBody = styled.div`
    p {
        font-weight: 600;
        color: #1d1d1d;
        opacity: 0.80;
    }
`

export const chartsContainer = styled.div`
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);  
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    gap: 30px;

    @media (min-width: 1024px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`

export const chatCard = styled.div`
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);  
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    align-items: center;
    width: 95%;
    justify-content: center;

    h3 {
        margin-top: 10px;
        color: #4A7C59;
    }

    @media (min-width: 1024px) {
        width: 550px;
    }
`