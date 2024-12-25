import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Useracc from "../Useracc/Useracc";
import { useFirebaseAuth } from "../Auth/Fireauth";

const Mainpage=()=>{
  const navigate = useNavigate();
    const [isScrolled,setIsScrolled]=useState(false);
    const {user} =useFirebaseAuth();
// scroll bar handle

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
const apikey=()=>{
  console.log(import.meta.env.VITE_API_KEY)
}
    return(
  <section>    
 <div className="min-h-screen">  
  <nav className={`w-full  fixed  flex  justify-between items-center  border-b-[0.5px] border-b-black top-0 z-50 transition-all duration-300   ${isScrolled ? 'bg-white backdrop-blur-sm shadow-lg ' : 'bg-transparent'} `}>
    <div  className=" py-2 ml-2 flex flex-row  items-center gap-6 text-black rounded-md ">
        <img src="download.jpeg" alt="_logo" className="w-10 rounded-full cursor-pointer hover:shadow-xl hover:scale-110 transition-all duration-300 ease-in-out " />
    </div>
    <div className="flex flex-row mr-3  rounded-full px-2 py-2  hover:bg-slate-300">
     <Useracc />
    </div>
  </nav>
  <div className="mt-14">
    <button onClick={apikey}>Click</button>
  </div>
</div>
  </section>
    )
}
export default Mainpage;