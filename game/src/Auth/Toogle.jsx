import { createContext  , useState} from "react"
 export const ToogleContext=createContext("dark");

const ToogleProvider=({children})=>{
    const [theme ,setTheme]=useState("")
    return(
       <ToogleContext.Provider value={{theme,setTheme}}>
        {children}
       </ToogleContext.Provider>
    )
}
export default ToogleProvider;