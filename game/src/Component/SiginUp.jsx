import  { useState } from 'react'
import {useFirebaseAuth} from '../Auth/Fireauth'
import {createUserWithEmailAndPassword,signInWithPopup} from"firebase/auth"
import {  NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Loading from './Loader/Loading';

// export the useFirebaseAuth from the Firebase.jsx which custom hook

export default function SiginUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {access,googleProvider}=useFirebaseAuth()
    const [showLoading,setLoading]=useState(false);
    const navigate=useNavigate()

    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setLoading(true);
        try{
        await createUserWithEmailAndPassword(access,email,password)
        setTimeout(()=>{
            setLoading(false)
            },5000)
        setEmail("");
        setPassword("")
        navigate("/mainpage")
        // setUser(userCredential);
     }catch(error){
       console.log("Error signing up",error);
     }
     }
     //{ Google Sigin Section}
     const singWithINgoogle=async()=>{
        try{
            await signInWithPopup(access,googleProvider)
            navigate("/mainpage")
            }catch(error){
            console.log(error)
        }
     }

    const backBtn=()=>{
        navigate("/")
     }

 return ( 
     <section className='min-h-screen flex  flex-col items-center justify-center   bg-radial-pattern bg-grid'>
         {showLoading ?( <Loading />):(
            <>
           <div className='flex   justify-items-start w-full'>
              <button className=' ml-12 bg-black px-2 py-1 rounded-lg text-white font-special text-xl hover:bg-gray-900 md:top-20 md:left-7' onClick={backBtn}><i className="fa-solid fa-arrow-left m-2"></i>Back</button>
           </div>
            <div className='p-7 mb-10 bg-white rounded-lg w-80  hover:shadow-lg '>
                <h2 className='text-center text-2xl font-special font-semibold  mb-6'> Create a New Account </h2>
                <form  onSubmit={handleSubmit}  className='space-y-4 '>

                    <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-lg' />
                    <input type='password' placeholder='Password'value={password}  onChange={(e) => setPassword(e.target.value)} className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-lg '/>
                 <div className='flex justify-center'>
                     <button  className='w-full py-1  rounded-full text-white cursor-pointer  font-jetbrains hover:bg-gray-900 bg-black'>Sign Up</button>
                 </div>
                </form>
                <div className="m-2 flex items-center justify-center space-x-2">
                   <hr className="flex-grow border-t-2 border-gray-400"></hr>
                   <span className="text-gray-600">or</span>
                 <hr className="flex-grow border-t-2 border-gray-400"></hr>
                 </div>
                 <div className='p-2 flex justify-center rounded-md shadow-md  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110'>
                     <button onClick={singWithINgoogle} className='font-jetbrains  text-md'>Sing With Google</button>
                 </div>
                 <div className='mt-2 flex justify-center items-center  rounded-full  shadow-xl hover:bg-slate-200'>
                    <button className='w-full py-1 font-mono text-sm font-semibold text-gray-600 '><NavLink  to="/sigin"><p className='text-black p-1 text-xl'>Login</p></NavLink></button>
                 </div>
            </div>
            </>
       )}
       </section>
    );
}
