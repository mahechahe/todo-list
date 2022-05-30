import styled, {css} from "styled-components";

export const Div = styled.div`
    width: 600px;
    height: 350px;
    background: white;
    border:  3px solid #495057;
    position: absolute;
    left: calc(50% - 150px);
    top: calc(50% - 175px);
    border-radius: 20px;
    padding: 20px;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${props => props.error && css`
        {
            border: 3px solid red;
        }
    `}
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 200px;
    align-items: center;
    justify-content: space-around;
`
export const Input = styled.input`
    width: 80%;
    padding: 5px;
    color: black;
    height: 35px;
    font-size: 17px;
    ${props => props.error && css`
        {
            border: 2px solid red;
        }
    `}
`
export const Title = styled.h2`
    font-size: 32px;
    margin-bottom: 30px;
    font-weight: 500;
`
export const Label = styled.label`
    font-size: 16px;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 5px;
`
export const Button = styled.button`
    width: 200px;
    height: 35px;
    margin-top: 20px;
    cursor: pointer;
    &:hover{
        background: #ced4da;
    }
`
export const ButtonClose = styled.button`
    width: 40px;
    height: 40px;
    background: #ced4da;
    position: absolute;
    border-radius: 30px;
    font-size: 20px;
    border: none;
    top: 10px;
    right: 10px;
    cursor: pointer ;
    &:hover{
        background: #6c757d;
    }
`