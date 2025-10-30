import styled from "styled-components";

export const main = styled.main`
    font-family: "Poppins", sans-serif;
    display: flex;
    flex-direction: row;
`

export const gerenciarPostsBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 10px 20px;

    .header {
        width: 100%;
        padding: 10px 0;
    }

    table {
        width: 99%;
        background-color: #fff;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);  
        border-collapse: collapse; 
        border-radius: 5px;

        thead {
            background-color: #233D4D;
            color: #fff;
            height: 60px;
        }

        th {
            text-align: start;
            padding: 10px;
        }

        td {
            color: #1d1d1d;
            opacity: 0.85;
            padding: 10px;
            border-bottom: 1px solid #ccc;
        }

        .icon {
            text-align: center;
        }


        svg {
            color: #4A7C59;

            &:hover {
                cursor: pointer;
            }
        }
    }
`