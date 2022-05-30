import { useState } from "react"
import Context from "../context/Context"
import useContext from "../context/useContext"


export const useDone = () => {
    const [done, setDone] = useState([])
    const {Progress} = useContext(Context)

    const AddDone = (TodoText) => {
        console.log(Progress);
        const TodoCheck = Progress.filter(todo => todo === TodoText)
        const TodosCheck = [...done]
        TodosCheck.push([TodoCheck])
        setDone(TodosCheck)
    }

    return {AddDone, done}
}