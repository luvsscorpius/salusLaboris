import styled from 'styled-components'

export const header = styled.header`
    background-color: #fff;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    img {
        width: 100px;
    }

    svg {
        font-size: 40px;
        color: #4A7C59;
        transition: transform 0.8s ease;

        &:hover {
            cursor: pointer;
            opacity: 0.8;
            transform: scale(0.9);
        }
    }

    @media (min-width: 768px) {

        img {
            width: 120px;
        }

    }


    @media (min-width: 1024px) {
        padding: 50px;

        img {
            width: 150px;
        }

        svg {
            display: none;
        }
    }
`

export const navLinks = styled.nav`
    position: absolute;
    top: 60px;
    right: 20px;
    width: 50%;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    overflow: hidden;
    z-index: 10000;

    .active {
        background-color: #eee;
        color: #4A7C59;
        padding: 5px;
        border-radius: 3px;
    }
  
    max-height: ${({ open }) => (open ? "500px" : "0")};
    opacity: ${({ open }) => (open ? "1" : "0.7")};
    transition: all 0.5s ease;

    a {
        color: #4A7C59;
        list-style: none;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        gap: 5px;
        color: #4A7C59;

        h4 {
            font-weight: 800;
            font-family: "Poppins", sans-serif;
        }
    }

    button {
        border: 0;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 18px;
        padding: 10px 0 10px 0;
        background: none;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 15px;
        padding: 10px 0 10px 0;

        span {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;

            svg {
                font-size: 25px;
            }
        }
        
        li {
            color: #4A7C59;
            list-style: none;
            transition: transform 0.8s ease;
            text-align: center;

            &:hover {
                cursor: pointer;
                opacity: 0.8;
                transform: scale(0.93);
            }
        }
    }

    @media (min-width: 768px) {
        width: 25%;


        ul {
            font-weight: 600;
        }
    }

    @media (min-width: 1024px) {
        width: 80%;
        max-height: 100px;
        height: 100px;
        opacity: 1;
        top: 0;
        position: relative;
        background-color: #fff;
        box-shadow: none;
        padding: 0;

        div {
            flex-direction: row;
            gap: 15px;
            margin-top: 0;

            h4 {
                display: none;
            }
        }

        ul {
            font-weight: 600;
            flex-direction: row;
            justify-content: flex-end; 
            align-items: center;
            height: 100%;
            font-size: 17px;
            gap: 15px;
            font-weight: 800;
        }
            
    }
`