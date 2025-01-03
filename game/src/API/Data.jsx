import { useContext, useEffect, useState } from "react";
import { ToogleContext } from "../Auth/Toogle"; 
import GamesList from "../Games/GameList";
import AI from "../AI/AIchat";

const Data=()=>{
    const [GamesGener ,setGamesGenere]=useState([])
    const {theme}=useContext(ToogleContext)
    const [acvtiveIndex,setactiveIndex]=useState()
    const [selectedGenreId, setSelectedGenreId] = useState("4");
    const [isShow ,setShow]=useState(false)
    const [error ,setError]=useState(false);

    
    const key=import.meta.env.VITE_GAME_APIKEY;
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
        setError(true)
        console.log("Fetching error", error);
      }
    };
       // geting the genre id 
       const getgamesid=async (id)=>{
        const gameid = `https://api.rawg.io/api/genres/${id}?key=${key}`;
     try{
       const gamesid=await fetch(gameid)
       const data= await gamesid.json();
       console.log(data.id)
     }catch(e){
      console.log("Eror Fetching the Gamesid",e)
     }
       }
       useEffect(() => {
        getGener();
      }, []);
       // check the user select the Genreid and render it 
       useEffect(()=>{
        if(selectedGenreId){
          getgamesid(selectedGenreId)
        }
        
       },[selectedGenreId])
      // For Show the AI chat Box Div 
       const ShowAI=()=>{
          setShow(!isShow)
        }
      
    return(
  
  <section className={`relative   mt-14  grid grid-cols-3 ${theme === "dark" ? "bg-black text-white" :" "} `}>
        
        <div className=" fixed top-14 left-0 h-screen w-[22%] overflow-y-auto    border-r-2 hidden md:block ">
          <h2 className="dark:text-white   dark:hover:bg-slate-200  dark:hover:text-black font-special   hover:bg-gray-950 hover:text-white rounded-md px-2 py-1  cursor-pointer  m-2">Gener Section</h2>
          {GamesGener && GamesGener.map((items,index)=>{
           return (
            <div   onClick={()=>{setactiveIndex(index);setSelectedGenreId(items.id)}}  key={index} className={`rounded-md  ml-2 p-2 pb-2 fiexd left-0 top-0 bottom-0  hover:bg-gray-500  flex items-center cursor-pointer  ${acvtiveIndex===index?"bg-gray-600":null}`}> 
              <img src={items.image_background}  className="w-[50px] h-[50px]  object-cover rounded-lg "/>
              <h3  className=" dark:text-white ml-2 font-mono text-xl  font-semibold">{items.name}</h3>
           </div>
           )
      
          })}
        </div>

   
         <div className= " ml-[90px] md:ml-[300px]  col-span-3 md:col-span-4 ">
          {/* pass the props here the games id */ }
        <GamesList   generID={selectedGenreId}  /> 
        </div> 

        {/* AI Div   fOR User Chat  */}
    {!isShow && (
       <div className="fixed bottom-1  shadow-2xl  px-2 py-1   transition-all  ease-in-out  duration-500 hover:scale-110 cursor-pointer  rounded-lg right-2 md:right-2 flex flex-row items-center">
       <img src="Ai.jpg" className="w-[40px] h-[40px] rounded-full object-contain p-2" />
       <button onClick={ShowAI} className="px-2 py-1 rounded-lg bg-blue-600 text-white font-jetbrains">Chat With AI</button>
     </div> 
    )}
      {isShow && (
        <div className=" w-[60%] h-[70%] fixed bottom-2 right-3">
          <AI  setShow={setShow} />
         </div>
      )}
    {/*Error Section when It Fertching the Data Form API call */}
         {error && (
            <div className='mt-4  flex flex-col justify-center  items-center gap-2  '>
               <p className='font-jetbrains  '>WoW You Error </p>
               <img src="Vodka.gif" className='w-full  h-20 rounded-lg object-contain ' />
            </div>
         )}
     </section>

    )
}
export default Data;

