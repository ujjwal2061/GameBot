import { createContext  , useState} from "react"
 export const ToogleContext=createContext("light");

const ToogleProvider=({children})=>{
    const [theme ,setTheme]=useState("dark")
    return(
       <ToogleContext.Provider value={{theme,setTheme}}>
        {children}
       </ToogleContext.Provider>
    )
}
export default ToogleProvider;