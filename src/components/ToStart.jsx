import React, {useContext} from 'react'
import Context from '../context/Context'
import { AiOutlineHeart, AiOutlineCheckCircle, AiOutlineDelete } from "react-icons/ai";
import { Div, DivColor, Task, Name, Comentarios, DivBottom, DivIcon, DivCheck, DivDelete } from '../styles/ToStart';

export const ToStart = ({todo}) => {
  const {nameGlobal, addInProgress, deleteTodo} = useContext(Context);

  return (
    <Div> 
      <DivDelete onClick={() => deleteTodo(todo)}><AiOutlineDelete size={'25px'}/></DivDelete>
      <DivCheck>
        <DivColor></DivColor> 
        <DivIcon onClick={() => addInProgress(todo)}>
          <AiOutlineCheckCircle size={'25px'}></AiOutlineCheckCircle>
        </DivIcon>
      </DivCheck>
      <div>
        <Task>{todo}</Task>
        <Name>{nameGlobal}</Name>
      </div>
      <DivBottom>
        <Comentarios>8 comments</Comentarios>
        <DivIcon><AiOutlineHeart size={'25px'}></AiOutlineHeart></DivIcon>
      </DivBottom>
    </Div>
  )
}