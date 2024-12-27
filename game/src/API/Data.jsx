import { useContext, useEffect, useState } from "react";
import { ToogleContext } from "../Auth/Toogle"; 
import GamesList from "../Games/GameList";

const Data=()=>{
    const [GamesGener ,setGamesGenere]=useState([])
    const {theme}=useContext(ToogleContext)
    const [acvtiveIndex,setactiveIndex]=useState()
    const [selectedGenreId, setSelectedGenreId] = useState("4");


    const key="81fad494a94b4a6f877abc6a14d864db"
    // show the Data one Component render
    const getGener = async () => {
      const link = `https://api.rawg.io/api/genres?key=${key}`;
      try {
        const Result = await fetch(link);
        if (!Result.ok) {
          throw new Error(`HTTP error! status: ${Result.status}`);
        }
        const rep = await Result.json();
        setGamesGenere(rep.results);
      } catch (error) {
        console.log("Fetching error", error);
      }
    };
       // geting the the 
       const getgamesid=async (id)=>{
        const gameid = `https://api.rawg.io/api/genres/${id}?key=${key}`;
     try{
       const gamesid=await fetch(gameid)
       const data= await gamesid.json();
       console.log(data);
     }catch(e){
      console.log("Eror Fetching the Gamesid",e)
     }
       }
       useEffect(() => {
        getGener();
      }, []);

       useEffect(()=>{
        if(selectedGenreId){
          getgamesid(selectedGenreId)
        }
        
       },[])

    // for the Loading Section 
      
    return(
  <section className={`mt-14  grid grid-cols-3 ${theme === "dark" ? "bg-black text-white" : null } `}>
        <div className=" h-full   w-[70%]  border-r-2 hidden md:block  overflow-y-auto">
          <h2 className="dark:text-white   dark:hover:bg-slate-200  dark:hover:text-black font-special   hover:bg-gray-950 hover:text-white rounded-md px-2 py-1  cursor-pointer  m-2">Gener Section</h2>
          {GamesGener && GamesGener.map((items,index)=>{
           return (
            <div   onClick={()=>{setactiveIndex(index);setSelectedGenreId(items.id)}}  key={index} className={` rounded-md  ml-2 p-2 pb-2  hover:bg-gray-500  flex items-center cursor-pointer  ${acvtiveIndex===index?"bg-gray-600":null}`}> 
              <img src={items.image_background}  className="w-[50px] h-[50px]  object-cover rounded-lg "/>
              <h3  className=" dark:text-white ml-2 font-mono text-xl  font-semibold">{items.name}</h3>
           </div>
           )
          })}
        </div>
        <div className= "  col-span-3 md:col-span-2 h-full overflow-y ">
          {/* pass the props here the games id */ }
          <GamesList   generID={selectedGenreId}  />
        </div>
    </section>

    )
}
export default Data;