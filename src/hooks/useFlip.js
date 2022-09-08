import React,{useState} from "react";



const useFlip = () => {

    const [current,setCurrent] = useState(true)

    const toggleFlip = () => {
        setCurrent(current => !current)
    }

    return [current,toggleFlip]

}


export default useFlip;