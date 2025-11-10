import styled from "styled-components";

export const main = styled.main`
    font-family: "Poppins", sans-serif;
    display: flex;
    flex-direction: column;

    .pagination {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 0px;
        list-style-type: none;
        font-size: 15px;
        background-color: #eee;
        border: none;
        border-radius: 5px;
        margin-top: 10px;

        li a {
            border: 2px solid #4A7C59;
            padding: 5px 10px 5px 10px;
            color: #4A7C59;
            text-decoration: none;
            display: block;
            transition: 0.2s;
            margin-left: -3px;
            font-weight: 800;

            &:hover {
                cursor: pointer;
                background-color: #4A7C59;
                color: #fff;
                transition: ease-in-out 0.6s;
            }
        }

        li.active a {
            background-color: #4A7C59;
            color: #fff;
        }
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: start;
        height: 100%;
    }
`

export const gerenciarPostsBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 10px 20px;
    gap: 10px;

    .header {
        width: 100%;
        padding: 20px 0;
    }

    table { 
        display: block;
        overflow-x: auto;
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

            // para truncar a celula
            overflow: hidden;
            white-space: nowrap;
            width: 100%;
            text-overflow: ellipsis;
        }

        .data, .icon {
            width: 50px;
        }

        .autor {
            width: 70px;
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

    @media (min-width: 1024px) {

    display: flex;

    table {
        .icon {
            text-align: start;
            }
        }    

        td {
        
        }
    }

`