import styled from "styled-components";

export const main = styled.main`
    font-family: "Poppins", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: auto;

    .header {
        width: 90%;
        padding: 20px 20px;
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: start;
        height: 100%;
    }
`