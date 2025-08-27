import styled from 'styled-components'

export const header = styled.header`
    background-color: #EEEEEE;
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

    @media (min-width: 1024px) {
        svg {
            display: none;
        }
    }
`

export const navLinks = styled.nav`
    position: absolute;
    top: 60px;
    right: 20px;
    width: 40%;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    overflow: hidden;
  
    max-height: ${({ open }) => (open ? "500px" : "0")};
    opacity: ${({ open }) => (open ? "1" : "0.7")};
    transition: all 0.5s ease;

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
        width: 90%;
        max-height: 100%;
        height: 100%;
        opacity: 1;
        top: 0;
        position: relative;
        background-color: #eee;
        box-shadow: none;

        ul {
            font-weight: 600;
            flex-direction: row;
            justify-content: flex-end; 
            align-items: center;
            height: 100%;
            font-size: 17px;
            gap: 20px;
            font-weight: 800;
        }
            
    }
`