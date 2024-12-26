
 import { useEffect, useState } from "react"

const GamesList=()=>{

    const [gameslist ,setgameslist]=useState([])

    useEffect(()=>{
        getGames();
    })
        const key="cd13302ff4c64e7bba696c7cfb5b5ae9"
        const getGames=async()=>{
        const gameLink=`https://api.rawg.io/api/games?key=${key}`
        try{
          const gameResult=await fetch(gameLink)
          const gamesList=await gameResult.json()
          setgameslist(gamesList.results)
        }catch(error){
          console.log(error);
          
        }
      }
    return(
         <div className=" flex flex-row justify-center rounded-lg " >
          {gameslist?.length>0 && (
              <img src={gameslist[0].background_image}  className=" m-2 w-[605] h-[20%] rounded-md object-contain" />
          )}
         </div>
    
    )
}
export default GamesList