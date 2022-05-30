import { useEffect, useState } from "react";

const useLocalStorage = (itemName, initialValue) => {

    const [error, setError] = useState(false)
    const [item, setItem] = useState(initialValue || [])
    const [loading, setLoading] = useState(false)
    

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            try{
                const itemLocal = localStorage.getItem(itemName)
                let parserItem;

                if(!itemLocal){
                    localStorage.setItem(itemName, initialValue)
                    parserItem = initialValue
                }else{
                    parserItem = JSON.parse(itemLocal)
                }

                setItem(parserItem)
            }catch(e){
                setError(true)
            }
            setLoading(false)
        }, 3000)
        }, [])

    const saveItem = (newItem) => {
        try{
            const stringifielItem = JSON.stringify(newItem)
            localStorage.setItem(itemName, stringifielItem)
            setItem(newItem)
        }catch(e){
            setError(true)
        }
    }


    return {
        item, 
        saveItem,
        loading,
        error
    }

}

export {useLocalStorage};