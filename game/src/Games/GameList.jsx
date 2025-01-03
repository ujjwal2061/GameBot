
 import { useEffect,  useState } from "react"

import Fava from "../Fava/Fava"
const GamesList=({generID})=>{

     const [gameslist ,setgameslist]=useState([]);
      const [favaGames ,setfavaGames] =useState([]);
      const [showCard,setShowCard]=useState(false)
      
  
        const key=import.meta.env.VITE_GAME_APIKEY
        const getGames=async()=>{
        const gameLink=`https://api.rawg.io/api/games?key=${key}&genres=${generID}`
        try{
          const gameResult=await fetch(gameLink)
          const gamesList=await gameResult.json()
          
          setgameslist(gamesList.results)
      
        }catch(error){
          console.log(error); 
        }
      }
      // generid when the user Seclected the user 
    useEffect(()=>{
      if(generID){
        getGames();
      }
  },[generID])

  // Show the Fava Component when it Add To card Butoon Clicked  and Check the Remove the Double games 
 const AddtoFava=(newgame)=>{
   setfavaGames((prevegame)=>{
   if(prevegame.find((game)=>game.id===newgame.id))return prevegame ;
   return [...prevegame, newgame];
   });
   setShowCard(true)   
 }
 
   if(showCard && favaGames){
    console.log(favaGames)
     return(
       <Fava  setfavaGames ={setfavaGames} favaGames={favaGames} onBack={()=>setShowCard(false)}/>
       // the onBack Function IS use to Move to Back TO GameList which pass as a props to Fava Component  when button click it  setThe  the Fava fava  
    )
   }
   
   
    return(
 <> 
  {/*For First Games */}
    <div className=" reative  flex justify-center rounded-lg " >
          { gameslist?.length>0 && (
            <div>
              <img src={gameslist[0].background_image} className=" w-full max-w-[700px] h-auto rounded-md object-contain  hover:shadow-lg"/>
              </div>
          )}
    </div>
    {/* For Trending Games */}
  <div className="p-2 md:block hidden ">
     <h1 className="font-exo text-2xl  text-black font-semibold dark:text-white"> Trending Games</h1>
        <div    className="hidden md:grid  container grid-cols-1 gap-3 m-2  md:grid-cols-4 sm:grid-cols-3 ">
          {gameslist.map((element ,index)=>index < 4 && (
           <div key={index} className="shadow-2xl px-2 py-1 rounded-md hover:scale-110   transition-transform duration-500 ease-in hover:duration-500 hover:transition-all hover:ease-in-out cursor-pointer transform"> 
            <img src={element.background_image}  className= "w-auto  h-56 object-cover  rounded-lg"/>
            <h2 className=" rounded-md flex justify-center items-center px-1  mt-2 ">{element.name}</h2>
           </div>
          ))}
        </div>
  </div>
      {/*For Popular games */}
      
      <div className="p-2">
     <h1 className="font-serif text-xl  text-blackfont-semibold dark:text-white">Popular Gmaes </h1>
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4">
      {gameslist.map((element,index)=>(
        <div  key={index} className="p-2 shadow-3d-shadow gap-2 rounded-lg  m-2  transition-all  ease-in-out  duration-500 hover:scale-105 cursor-pointer ">
          <img src={element.background_image} className="rounded-lg object-cover h-60" />
          <h2 className="mt-1 font-semibold">{element.name}</h2>
          <h3 className="text-sm m-1">❇️{element.rating} 🗯{element.reviews_count} 📛{element.rating_top}</h3>
          <button  onClick={()=>AddtoFava(element)}  
          className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold py-1 px-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 uppercase tracking-wide">Add to FAV </button>
         </div>
      ))}
     </div>
 </div>

  </>
    
    )
}
export default GamesList

