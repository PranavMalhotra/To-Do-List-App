import {useState} from "react"

const useCustomHook = (initialValue) => {
    const [someValue, setSomeValue] = useState(initialValue)
    
    const toggle = () => {        
        setSomeValue((oldStatus) => {
            if (oldStatus === "Pending") {
              return "Finished";
            } else {
              return "Pending";
            }
          });
    }
    
    return { someValue, toggle }
}

export default useCustomHook