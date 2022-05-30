import { useEffect, useState } from "react";


const useLocalProgress = (itemName, initialValue) => {


    const [progress, setProgress] = useState(initialValue || [])

    useEffect(() => {

        setTimeout(() => {
            const progressStorage = localStorage.getItem(itemName)
            let parserItem;

            if(!progressStorage){
                localStorage.setItem(itemName, initialValue)
                parserItem = initialValue
            }else{
                parserItem = JSON.parse(progressStorage)
            }

            setProgress(parserItem)
        }, 3000)
    }, [])


    const saveLocal = (newItem) => {
        try{
            const stringtProgress = JSON.stringify(newItem)
            localStorage.setItem(itemName, stringtProgress)
            setProgress(newItem)
        }catch(error) {
            console.error('Error: ', error);
        }
    }

    return {saveLocal, progress}
}

export default useLocalProgress;