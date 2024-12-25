import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Useracc from "../Useracc/Useracc";
import { useFirebaseAuth } from "../Auth/Fireauth";
import ToogleProvider, { ToogleContext } from "../Auth/Toogle";

const Mainpage=()=>{
  const navigate = useNavigate();
    const [gamesCollection,setGamesCollection]=useState([])
    const[loading ,setLoading]=useState(false);
    const [isScrolled,setIsScrolled]=useState(false);
    const {user} =useFirebaseAuth();
    const {theme,setTheme}=useContext(ToogleContext)
    // scroll bar handle
   
    // this for Api handle
    const fetchdata=async ()=>{
      try{
        const apiKey = "bcc24db5f28545fe9408d0a2f7acb167"
        const result=await fetch(`https://api.rawg.io/api/games?key=${apiKey}`)
        console.log(result)
      }catch(error){
        console.log("Error while Feching the Games ",error)
      }
    }
    useEffect(()=>{
  fetchdata
},[])
   useEffect(()=>{
const handleScroll=()=>{
    if(window.scrollY>10){
      setIsScrolled(true)
    }else{
      setIsScrolled(false)
    }
  };
if(!user) {
  navigate("/",{replace:true})
  return;
}
window.addEventListener('scroll',handleScroll);
  return ()=> window.removeEventListener('scroll',handleScroll);
},[]);
    return(
 
 <div className={`min-h-screen ${theme} ${theme==='dark'? "bg-black" :null}  dark bg-block`}>  
  <nav className={`w-full  fixed  flex  justify-between items-center  border-b-[0.5px] border-b-black top-0 z-50 transition-all duration-300    gap-2 ${isScrolled ? 'bg-white backdrop-blur-sm shadow-lg ' : 'bg-transparent'} `}>
    <div  className=" py-2 ml-2 flex flex-row  items-center gap-6 text-black rounded-md ">
        <img src="download.jpeg" alt="_logo" className="w-10 rounded-full cursor-pointer hover:shadow-xl hover:scale-110 transition-all duration-300 ease-in-out " />
    </div>
    <div className=" flex-row  rounded-md mr-5 px-2 py-1">
      {theme =="light" ?<i class="fa-solid fa-moon  rounded-full  text-xl  cursor-pointer " onClick={()=>setTheme("dark")}></i>:
      <i className="fa-solid fa-sun  rounded-full text-[20px]  cursor-pointer"  onClick={()=>setTheme("light")}></i> }
    </div>
  <div className="flex flex-row ml-auto rounded-full px-1 py-1  hover:bg-slate-300">
     <Useracc />
    </div>
  </nav>
  <div className="mt-14">
  <button onClick={fetchdata}>Fetch Data</button>
  </div>
</div>
  

    )
}
export default Mainpage;