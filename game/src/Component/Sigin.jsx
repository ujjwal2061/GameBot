import  { useState } from 'react'
import {signInWithEmailAndPassword } from 'firebase/auth'; 
import {useFirebaseAuth} from '../Auth/Fireauth' 
import { useNavigate } from 'react-router';
import Loading from './Loader/Loading';
// -Custom hook using
const SignIn=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const {access,setUser}=useFirebaseAuth();
     const [showLoading,setLoading]=useState(false);
    // initalize the use navagation hook 
    const navigate=useNavigate();
    const handleBtn=async(e)=>{
      setLoading(true)
        e.preventDefault();
        // function taht sigin the user and move to mainpage 
        try{
            const usercredential =await signInWithEmailAndPassword(access,email,password)
            setUser(usercredential.user);
            setTimeout(()=>{
            setLoading(false)//
            },5000)
            setEmail("");
            setPassword("");
             navigate("/mainpage");
            }catch(error){
              console.log(error);
            }
         }
         // for back to the Home page 
         const backBtn=()=>{
            navigate("/")
         }
    return(
        <section className='min-h-screen min-w-screen flex flex-col  items-center justify-center '>
         {/*The start to show when the function is clickis state to true and if flase the the content */}
         {showLoading ? (<Loading />):(
            <>
            <div className='flex justify-start w-full'> 
            <button className='mb-14 ml-4 bg-black px-2 py-1 rounded-lg text-white font-special text-xl hover:bg-gray-900' onClick={backBtn}> <i className="fa-solid fa-arrow-left m-2"></i>Back</button> 
         </div>
            <div className='p-5 rounded-md shadow-2xl w-80 hover:shadow-lg '>
                <h2 className='flex justify-center text-xl font-jetbrains font-semibold'>Login</h2>
             <div className='space-y-2 '>
                <label className='font-jetbrains  font-semibold text-sm'>Email</label>
                <input type='email' placeholder='Enter your Email' value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-lg border-none outline-none' />
                <label className=' font-jetbrains font-semibold text-sm'>Password</label>
                <input type='password' placeholder='Password'value={password}  onChange={(e) => setPassword(e.target.value)} className='w-full  px-4 py-2 border border-gray-300 rounded-md shadow-xl  border-none outline-none '/>
             </div>
             <div className='flex justify-center mt-4'>
                <button onClick={handleBtn} type="submit" className=' bg-black px-2 py-1 w-full rounded-lg text-white font-special text-xl hover:bg-gray-900'>Login</button>
             </div>
            </div>
            
            </>
         )}
        </section>
    )
}
export default SignIn;