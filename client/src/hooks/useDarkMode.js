import {useEffect} from "react";
import useLocalStorage from "./useLocalStorage";

 const useDarkMode = key => {
    const [value, setValue] = useLocalStorage("dark");

    useEffect(()=> {
        if(value === true){
            document.body.classList.add("dark-mode");
        }
        if(value === false){
            document.body.classList.remove("dark-mode");
        }
    },[value])

    return [value, setValue]
}

export default useDarkMode;