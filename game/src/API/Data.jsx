import { useContext, useEffect, useState } from "react";
import { ToogleContext } from "../Auth/Toogle";

import GamesList from "../Games/GameList";
const Data=()=>{
    const [GamesGener ,setGamesGenere]=useState([])
    const {theme}=useContext(ToogleContext)
    const [acvtiveIndex,setactiveIndex]=useState()
  


    const key="9b1bc84600374d0abdb13847e5ed31a0"
    // show the Data one Component render
    const getGener = async () => {
      const link = `https://api.rawg.io/api/genres?key=${key}`;
      try {
        const Result = await fetch(link);
        if (!Result.ok) {
          throw new Error(`HTTP error! status: ${Result.status}`);
        }
        const rep = await Result.json();
        console.log(rep.results);
        setGamesGenere(rep.results);
      } catch (error) {
        console.log("Fetching error", error);
      }
    };
    
    useEffect(() => {
      getGener();
    }, []);
    
      
    // for the Loading Section 
    

    
    return(
  <section className={`mt-14  grid grid-cols-3 ${theme === "dark" ? "bg-black text-white" : null } `}>
        <div className=" h-full   w-[70%]  border-r-2 hidden md:block  overflow-y-auto">
          <h2 className="dark:text-white   dark:hover:bg-slate-200  dark:hover:text-black font-special   hover:bg-gray-950 hover:text-white rounded-md px-2 py-1  cursor-pointer  m-2">Gener Section</h2>
          {GamesGener.map((items,index)=>{
           return (
            <div   onClick={()=>setactiveIndex(index)} key={index} className={` rounded-md  ml-2 p-2 pb-2  hover:bg-gray-500  flex items-center cursor-pointer  ${acvtiveIndex===index?"bg-gray-600":null}`}> 
              <img src={items.image_background}  className="w-[50px] h-[50px]  object-cover rounded-lg "/>
              <h3  className=" dark:text-white ml-2 font-mono text-xl  font-semibold">{items.name}</h3>
           </div>
           )
          })}
        </div>
        <div className= "  col-span-3 md:col-span-2 h-full overflow-y ">
          <GamesList />
        </div>
    </section>

    )
}
export default Data;