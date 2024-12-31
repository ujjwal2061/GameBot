import axios from 'axios';
import { useState } from 'react';

const AIChat=({setShow})=>{
    const [answer,setAnswer]=useState("")
    const key="AIzaSyDYTI_6MEtYvlMmji9TwbUG6pxrajRNbLI"
        // const key=import.meta.env.VITE_AI_APIKEY
     const getGamesAnswer=async()=>{
        try{
            const respon = await axios({
               method:'post',
               url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`,
               data:{
                "contents": [{
                    "parts":[{"text": answer}]
                    }]
               }
           })
         setAnswer(respon['data']['candidates']['0']['content']['parts']['0']['text'])
        setAnswer("")
        }catch(error){
            console.log(error)
        }
    }
    return (
 <section className=" w-[65%] h-[65%] fixed  bottom-1  right-3 md:bottom-1 md:right-2 md:w-96 md:h-[70%] bg-slate-200 rounded-lg p-2 ">
    <div className='flex flex-row justify-center items-center gap-2 '>
   <p className=''>Hello What Can I Help U Today </p>
    <button  className="p-1 bg-green-600 font-jetbrains  text-white rounded-md  " onClick={()=>setShow(false)}>Close Chat </button>
    </div>
   <input type='text'    value={answer} onChange={(e)=>setAnswer(e.target.value)}  className='w-1/2 px-2 py-1  rounded-l-2xl    border-gray-300 outline-none  focus:to-blue-400 ' />
   <button  className='cursor-pointer'   onClick={getGamesAnswer} >Get Answwer</button>
<div>
   <p>{answer}</p>

</div>
</section>
   
    )
}
export default AIChat; 