import styled from "styled-components";


export const Div = styled.div`
    background: white;
    width: 90%;
    height: 200px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin-top: 30px;
    justify-content: space-around;
    border-radius: 20px;
    position: relative;
`
export const DivColor = styled.div`
    width: 140px;
    border-radius: 20px;
    height: 6px;
    background: #4cc9f0;
`
export const Task = styled.h3`
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 6px;
`

export const Name = styled.p`
    background: #ced4da;
    width: 185px;
    padding: 5px;
    height: 25px;
    color: white;
    border-radius: 10px;
`
export const Comentarios = styled.p`
    font-size: 16px;
    color: #adb5bd;
`
export const DivBottom = styled.div`
    display: flex;
    width: 96%;
    align-items: center;
    justify-content: space-between;
`
export const DivIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
        color: green;
    }
`
export const DivCheck = styled.div`
    display: flex;
    width: 95%;
    align-items: center;
    justify-content: space-between;
`
export const DivProgress = styled.div`
    width: 140px;
    border-radius: 20px;
    height: 6px;
    background: #f77f00;
`
export const DivDelete = styled.div`
    position: absolute;
    top: -10px;
    right: -10px;
    cursor: pointer;
    &:hover{
        color: red;
    }
`