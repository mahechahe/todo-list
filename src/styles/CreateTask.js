import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    width: 230px;
    height: 50px;
    align-items: center;
    justify-content: space-between;
`
export const Tittle = styled.h2`
    font-size: 32px;
    letter-spacing: 1px;
`

export const Button = styled.button`
    width: 37px;
    height: 37px;
    border-radius: 20px;
    border: none;
    background: black;
    color: white;
    font-size: 30px;
    transition: 1s ease-in-out;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`