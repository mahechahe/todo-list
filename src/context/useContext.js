import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import useLocalProgress from "../hooks/useLocalProgress";

const useContext = () => {

  const [isOpenModal, setIsOpenModal]= useState(false);
  const [favorites, setFavorites] = useState(false)
  const [nameGlobal, setNameGlobal] = useState('Estiven Mahecha Henao')
  const {item, saveItem, loading, error} = useLocalStorage('TODOS_V1', ['Lavar la loza'])
  const {saveLocal, progress} = useLocalProgress('PROGRESS_V1', [])


  const addTodo = (text) => {
    const newTodos = [...item]
    newTodos.push([
      text
    ])

    saveItem(newTodos)
  }

  const deleteTodo = (todoText) => {
    const TodoIndex = item.findIndex(todo => todo === todoText)
    const newTodos = [...item]
    newTodos.splice(TodoIndex, 1)
    saveItem(newTodos)
  }

  const deleteInProgress = (text) => {
    const TodoProgress = progress.filter(TodoProgresDelete => TodoProgresDelete === text)
    const NewProgress = [...progress]
    NewProgress.splice(TodoProgress, 1)
    saveLocal(NewProgress)
  }

  const addInProgress = (todoText) => {
    const TodoInProgress = item.filter(item => item === todoText)
    const TodoDone = [...progress]
    TodoDone.push([TodoInProgress])
    saveLocal(TodoDone)

    deleteTodo({todoText})
  }

  return {setIsOpenModal, isOpenModal, addTodo, item, nameGlobal, setNameGlobal, loading, error, favorites, setFavorites, saveItem, addInProgress, progress, deleteTodo, deleteInProgress}
}

export default useContext