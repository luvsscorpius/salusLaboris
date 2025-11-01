import styled from "styled-components";

export const logoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    img {
        width: 140px;
    }

    hr {
        background: #4A7C59;
        height: 5px;
        border-radius: 5px;
    }
`

export const linksContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    padding: 20px 20px;
    color: #4A7C59;

    div {
        display: flex;
        flex-direction: column;
        gap: 10px;

        ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 8px;

            span {
                display: flex;
                flex-direction: row;
                gap: 5px;
                padding: 5px;

                &:hover {
                    cursor: pointer;
                    opacity: 0.80;
                    transition: ease-in-out 0.7s;
                }
            }

            .active {
                background-color: #eee;
                color: #4A7C59;
                padding: 5px;
                border-radius: 3px;
            }
            
            li {
                display: flex;
                align-items: center;
            }
        }
    }
`

export const menu = styled.menu`
    display: none;
    box-shadow: 0 5px 2px rgba(0, 0, 0, 0.2);  
    width: 250px;
    height: 100%;
    padding: 20px 0;
    gap: 20px;

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        top: 0;
    }

`