import styled, {css} from "styled-components";

export const Section = styled.section`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-rows: 20% 80%;
    position: relative;
    ${props => props.isOpenModal && css`
        background-color: #343a40;
        opacity: 60%;
    `}
`
export const DivContainer = styled.div`
    width: 100%;
    height: 100%;
`
export const DivUp = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 50px;
    align-items: center;
`
export const DivBotton = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 10px 50px;
`
export const DivFavorites = styled.div`
    width: 430px;
    height: 60px;
    align-items: center;
    display: flex;
    justify-content: space-between;
`
export const DivSingleFavorite = styled.div`
    width: 340px;
    height: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: 20% 80%;
    gap: 10px;
`
export const P = styled.p`
    font-size: 17px;
    color: #495057;
    font-weight: 500;
`
export const DivGroupFavorites = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 5px;
    align-items: center;
`
export const TitleCreateTodo = styled.h2`
    font-size: 25px;
    color: #495057;
`