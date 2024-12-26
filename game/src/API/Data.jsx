import { useContext, useEffect, useState } from "react";
import { ToogleContext } from "../Auth/Toogle";
import Error1 from "../ErrorPage/Error1";
import GamesList from "../Games/GameList";
const Data=()=>{
    const [GamesGener ,setGamesGenere]=useState([])
    const {theme}=useContext(ToogleContext)
    const [acvtiveIndex,setactiveIndex]=useState()
    const [loading ,setloading]=useState(true)
    const [error ,seterror]=useState(null)

    const key="cd13302ff4c64e7bba696c7cfb5b5ae9"
    // show the Data one Component render
    useEffect(()=>{
      const getGener=async()=>{
        const link=`https://api.rawg.io/api/genres?key=${key}`
        try{
          const Result= await fetch(link)
          if(!Result.ok){
            throw new Error(`HTTP error ! ${Result.status}` )
          }
          const rep=await Result.json()
          setGamesGenere(rep.results)
        }catch(error){
        seterror(error.message)
       console.log("Fetching error".error);
        }finally{
          setloading(false);
        }
      };
      getGener()
    },[])
    // for the Loading Section 
    if (loading) { return <div>Loading...</div>; } 
    if (error) { return <Error1 message={error} />; 
  }

    
    return(
  <section className={`mt-14  grid grid-cols-3 ${theme === "dark" ? "bg-black text-white" : null } `}>
        <div className=" h-full  border-r-2 hidden md:block ">
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
        <div className= " col-span-3 md:col-span-2 h-full ">
          <GamesList />
        </div>
      </section>

    )
}
export default Data;