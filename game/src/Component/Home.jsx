import { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Content from'./Content'

const Home =()=>{
    const [isopen ,setOpen]=useState(false)
    const [isScrolled,setIsScrolled]=useState(false);
    const toogle=()=>{
        setOpen(!isopen)
    }
    useState(()=>{
      const handleScroll=()=>{
        if(window.scrollY>10){
          setIsScrolled(true)
        }else{
          setIsScrolled(false)
        }
      };
      window.addEventListener('scroll',handleScroll);
        return ()=> window.removeEventListener('scroll',handleScroll);
      
    },[]);
    return(
<div className="min-h-screen">
  <nav className={`w-full  fixed  flex  justify-between items-center  border-b-[0.5px] border-b-black top-0 z-50 transition-all duration-300 
        ${isScrolled ? 'bg-white backdrop-blur-sm shadow-lg ' : 'bg-transparent'}
      `}>
     <div  className=" py-2 ml-2 flex flex-row  items-center gap-6 text-black rounded-md ">
        <img src="download.jpeg" alt="_logo" className="w-10 rounded-full cursor-pointer hover:shadow-xl hover:scale-110 transition-all duration-300 ease-in-out " />
        <h3 className="text-black  hidden sm:block font-semibold font-jetbrai shadow-3d-shadow px-1 rounded-lg">GameRateBot</h3>
      </div>
      {/*content to add*/}
      <div className="w-56 sm:w-1/2 md:w-80 flex flex-row items-center">
      <img src="gif.gif" alt="gif.img" className="h-12 w-full  rounded-md object-cover"/>
     </div>
       {/* this for Desktop screen */}
   <div className="hidden md:flex flex-row justify-center items-center gap-2 mr-5">
          <button className="bg-black px-3 py-1 font-carter text-white rounded-lg hover:bg-gray-800 transition-colors">
          <NavLink to="/siginUp">SiginUp</NavLink>
          </button>
          <button  className="bg-black px-3 py-1 font-carter text-white rounded-lg hover:bg-gray-800 transition-colors" >
          <NavLink to="/sigin">Login</NavLink> 
          </button>
    </div>

    <div className="md:hidden mr-3">
        <button className="hover:bg-slate-300 p-2 rounded-md transition-colors duration-200" onClick={toogle}>
       {isopen ? (
       <i className="fa-solid fa-xmark "></i>
       ):(
        <i className="fa-solid fa-bars  "></i>
        )}
       </button>
   </div>
   {/*this for the menu bara for click icon */}
      {isopen && (
        <div className=" absolute top-full right-0 w-1/3 md:hidden  bg-white shadow-lg  rounded-lg  gap-3">
          <div className="flex flex-col gap-4 p-4">
            <button className="bg-black px-3 py-1 font-carter text-white rounded-lg  hover:bg-gray-900"><NavLink to="/siginUp">SiginUp</NavLink></button>
            <button className="bg-black px-3 py-1 font-carter text-white rounded-lg hover:bg-gray-900 "><NavLink to="/sigin">Login</NavLink></button>
          </div>
        </div>
     )} 
  </nav>

{/*Hero Section*/ }
<section className="bg-gradient-to-r from-sky-600 to-white text-black pt-24">
  <div className="max-w-6xl mx-auto px-6 py-20">
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
        <span className="inline-block text-4xl md:text-5xl px-4 py-2 rounded-lg bg-white text-sky-600 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-2xl">
          Discover
        </span>
        <span className="font-mono text-lg md:text-2xl ml-2 text-gray-700">
          Thousands of Games across all platforms
        </span>
      </h1>
      <p className="mt-3 text-lg md:text-xl text-gray-600">
        Chat with AI to find your perfect game based on your mood
      </p>
    </div>
  </div>
</section>
{/*Content */ }
<Content />
<Footer />
</div>

 )
 }
 export default Home;