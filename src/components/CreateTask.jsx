import React, {useContext} from 'react'
import { Div, Tittle, Button } from '../styles/CreateTask'
import Context from '../context/Context'


export const CreateTask = () => {
  const {onClick, setIsOpenModal} = useContext(Context);
  

  return (
    <Div>
        <Tittle>Create Todo</Tittle>
        <Button onClick={() => setIsOpenModal(true)} type='button'>+</Button>
    </Div>
  )
}
