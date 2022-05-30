import styled from "styled-components";

export const Section = styled.section`
    height: 100vh;
    background: white;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    display: grid;
    grid-template-rows: 15% 70% 15%;
`
export const DivIcons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const DivIconsUp = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 0 auto;
`
export const Title = styled.h3`
    margin-bottom: 20px;
    letter-spacing: 0.8px;
    color: #060606;
`
export const DivFooter = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    margin: 0 auto;
`
export const DivIconFooter = styled.div`
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border:  2px solid #060606;
    cursor: pointer;
`

export const DivInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`