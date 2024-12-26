import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Useracc from "../Useracc/Useracc";
import { useFirebaseAuth } from "../Auth/Fireauth";
import  { ToogleContext } from "../Auth/Toogle";
import Data from "../API/Data";

const Mainpage=()=>{
  const navigate = useNavigate();
    const [isScrolled,setIsScrolled]=useState(false);
    const {user} =useFirebaseAuth();
    const {theme,setTheme}=useContext(ToogleContext)
    
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
 
 <div className={`min-h-screen ${theme} ${theme==='dark'? "bg-black " :null}`}>  
  <nav className={`w-full  fixed  flex  justify-between items-center  border-b-[0.5px] border-b-black top-0 z-50 transition-all duration-300    gap-2 ${isScrolled ? ' backdrop-blur-sm shadow-lg ' : 'bg-transparent'} `}>
    <div  className=" py-2 ml-2 flex flex-row  items-center gap-6 text-black rounded-md ">
        <img src="download.jpeg" alt="_logo" className="w-10 rounded-full cursor-pointer hover:shadow-xl hover:scale-110 transition-all duration-300 ease-in-out " />
    </div>
    
      <div className="flex flex-row justify-center items-center gap-3  rounded-full px-1 py-1">
       <div className="mr-2">
        {theme =="light" ?<i className="fa-solid fa-moon  rounded-full  text-xl  cursor-pointer " onClick={()=>setTheme("dark")}></i>:
       <i className="fa-solid fa-sun  rounded-full text-[20px]  cursor-pointer"  onClick={()=>setTheme("light")}></i> }
      </div>
     <div className="mr-2 hover:shadow-lg rounded-md  px-2 py-1">
      <Useracc/>
     </div>
    </div>
  </nav>
  <Data />
   
</div>
  

    )
}
export default Mainpage;