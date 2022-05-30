import React, {useContext, useState} from 'react'
import { Div, Form, Input, Title, Label, Button, ButtonClose } from '../styles/Modal'
import Context from '../context/Context.js'

export const Modal = () => {
  const [name, setName] = useState('')
  const [task, setTask] = useState('')
  const [error, setError] = useState(false)
  
  const {setIsOpenModal, addTodo, setNameGlobal, nameGlobal} = useContext(Context)

  const handleChangeName = (e) => {
    setName(e.target.value)
  }
  const handleChangeTask = (e) => {
    setTask(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(task === ''){
      setError(true)
    }else{
      addTodo(task)
      name === '' 
      ? setNameGlobal(nameGlobal)
      : setNameGlobal(name)
      setIsOpenModal(false)
    }
	} 

  return (

    <Div error={error}>
      <Title>Todo List</Title>
      <ButtonClose onClick={() => setIsOpenModal(false)} type='button'>X</ButtonClose>
      <Form>
        <Input value={name} onChange={handleChangeName} type="text" placeholder="Name" />
        <Label>Escribe tu tarea a realizar</Label>
        <Input error={error} value={task} onChange={handleChangeTask} type="text" placeholder={error ? 'Este campo es obligatorio' : 'Task'} />
        <Button onClick={handleSubmit} type="button">Add Task</Button>
      </Form>
    </Div>
  )
}
