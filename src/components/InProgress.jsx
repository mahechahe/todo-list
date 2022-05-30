import React, {useContext} from 'react'
import { Div, DivProgress, Task, Name, Comentarios, DivBottom, DivIcon, DivCheck, DivDelete } from '../styles/ToStart';
import { AiOutlineHeart, AiFillHeart, AiOutlineFileDone, AiOutlineDelete } from "react-icons/ai";
import Context from '../context/Context'
import { useDone } from '../hooks/useDone';

export const InProgress = ({progress}) => {
  const {nameGlobal, favorites, setFavorites, deleteInProgress} = useContext(Context);
  const {AddDone} = useDone()
  

  return (
    <Div>
      <DivDelete onClick={() => deleteInProgress(progress)}><AiOutlineDelete size={'25px'}/></DivDelete>
      <DivCheck>
        <DivProgress></DivProgress> 
        <DivIcon onClick={() => AddDone(progress)}>
          <AiOutlineFileDone size={'25px'}></AiOutlineFileDone>
        </DivIcon>
      </DivCheck>
      <div>
        <Task>{progress}</Task>
        <Name>{nameGlobal}</Name>
      </div>
      <DivBottom>
        <Comentarios>8 comments</Comentarios>
        <DivIcon onClick={() => setFavorites(!favorites)}>{favorites ? <AiOutlineHeart size={'25px'}></AiOutlineHeart> : <AiFillHeart size={'25px'}></AiFillHeart>}</DivIcon>
      </DivBottom>
    </Div>
  )
}
