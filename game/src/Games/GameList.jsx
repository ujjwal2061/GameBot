
 import { useEffect, useState } from "react"

const GamesList=()=>{

    const [gameslist ,setgameslist]=useState([])

    
        const key="9b1bc84600374d0abdb13847e5ed31a0"
        const getGames=async()=>{
        const gameLink=`https://api.rawg.io/api/games?key=${key}`
        try{
          const gameResult=await fetch(gameLink)
          const gamesList=await gameResult.json()
          setgameslist(gamesList.results)
          console.log(gamesList.results);

        }catch(error){
          console.log(error);
          
        }
      }
      
    useEffect(()=>{
      getGames();
  },[])
    return(
 <> 
  {/*For First Games */}
    <div className=" relative flex flex-row justify-center rounded-lg " >
          { gameslist?.length>0 && (
            <div className>
                <p  className="  ml-5 font-jetbrains text-xl  absolute bottom-16 ">{gameslist[0].name}</p>
                <button className="ml-5 font-mono rounded-md  dark:text-white text-xl px-2 py-2 absolute bottom-3 bg-blue-600 hover:bg-blue-900">Get Now</button>
              <img src={gameslist[0].background_image} className="m-2 w-full max-w-[700px] h-auto rounded-md object-contain  hover:shadow-lg"/>
              </div>
          )}
    </div>
    {/* For Trending Games */}
  <div className="p-2 md:block hidden ">
     <h1 className="font-exo text-2xl font-semibold dark:text-white">Trending Games</h1>
        <div className="    hidden md:grid  container grid-cols-1 gap-3 m-2  md:grid-cols-4 sm:grid-cols-3 ">
          {gameslist.map((element ,index)=>index < 4 && (
           <div className="bg-gray-600 px-2 py-1 rounded-md hover:scale-110   transition-transform duration-500 ease-in hover:duration-500 hover:transition-all hover:ease-in-out cursor-pointer transform"> 
            <img src={element.background_image}  className= "w-auto  h-56 object-cover  rounded-lg"/>
            <h2 className="bg-gray-900  rounded-md flex justify-center items-center px-1  mt-2 ">{element.name}</h2>
           </div>
          ))}
        </div>
  </div>
      {/*For Popular games */}
      <div className="p-2">
     <h1 className="font-serif text-xl font-semibold dark:text-white">Popular Gmaes </h1>
  <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3">
      {gameslist.map((element)=>(
        <div className="p-2 bg-gray-800 gap-2 rounded-lg  m-2  transition-all  ease-in-out  duration-500 hover:scale-105 cursor-pointer ">
          <img src={element.background_image} className="rounded-lg object-cover h-60" />
          <h2 className="mt-1 font-semibold">{element.name}</h2>
          <h3 className="text-sm m-1">❇️{element.rating} 🗯{element.reviews_count} 📛{element.rating_top}</h3>
         </div>
      ))}
     </div>
 </div>
 {/* <div  className="mt-2">
   <h3 className="font-bold mb-2">Platforms:</h3>
    <ul className="list-disc list-inside">
       {gameslist[0].platforms.map((platformData, index) => ( 
        <li key={index} className="text-gray-700"> {platformData.platform.name} 
        </li> ))} 
 </ul> 
 </div> */}
  </>
    
    )
}
export default GamesList