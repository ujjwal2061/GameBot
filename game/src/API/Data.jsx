
import { useContext, useEffect, useState } from "react";
import { ToogleContext } from "../Auth/Toogle";
import APIKeys from "./APIKeys";
const Data=()=>{
    const [games ,setGames]=useState([])
    const {theme}=useContext(ToogleContext)

    useEffect(()=>{
       getGenerList()
    },[])
    const getGenerList=()=>{
        APIKeys.getGener.then((rep)=>{
            console.log(rep);
            
        })
    }
    return(
  <section className={`mt-14  grid grid-cols-3 ${theme === "dark" ? "bg-black text-white" : null } `}>
        <div className=" h-full  border-r-2 border-r-black hidden md:block ">Gener Section</div>
        <div className= " col-span-3 md:col-span-2 bg-black">Middle Side</div>
      </section>

    )
}
export default Data;