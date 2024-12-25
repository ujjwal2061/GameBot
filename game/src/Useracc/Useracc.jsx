import {access, useFirebaseAuth} from '../Auth/Fireauth'
import { useEffect } from "react";
import { useState } from "react";
import {User ,LogOut, Settings,Pencil} from 'lucide-react'
import {signOut} from "firebase/auth"
import { useNavigate } from 'react-router';

const Useracc=()=>{
  // const {User,setUser}=useFirebaseAuth();
  const navigate=useNavigate();
  const[userName,setUserName]=useState("");
  const[newName,setNewName]=useState(false);
  const [userimage, setimage] = useState(null);
  const[isDropdown ,setDropDown]=useState(null);

  // when user name image is change 
  useEffect(() => {
    const storedName=localStorage.getItem("usenmae");
    const storedImage = localStorage.getItem('userProfileImage');
    if (storedImage) {
      setimage(storedImage);
    }
     //-> slice the userName form the there  Email
     if(storedName){
      setUserName(storedName)
     }else{
       const user=access.currentUser?.email;
       if(user){
         setUserName(user.split("@")[0].slice(0,6))
     }

    }
  }, []);
  //save the image and name of the user name 
  const SaveUserName=()=>{
    localStorage.setItem("username",userName)
    setNewName(false)
  }
  // function to handle the user image 
  const handleImage=(event)=>{
    const file=event.target.files[0];
    if(file){
      const read=new FileReader();
      read.onload=()=>{
        const base64String=read.result;
        localStorage.setItem("userProfieImage",base64String)
        setimage(base64String)
      };
      read.readAsDataURL(file)
    }
  }
  // SigniOut Function
  const logout=async()=>{
    try{
      await signOut(access);
        navigate("/sigin")
        localStorage.clear();
    }catch(error){
      console.log("Error",error);
    }
  }
  
      return(
<div className=" relative">
   <button  className="flex items-center space-x-3 focus:outline-none" onClick={()=>setDropDown(!isDropdown)}>
   <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
      {userimage? (
        <img  src={userimage}  alt="User"  className="w-full h-full object-cover" />
         ) : (
           <div className="w-full h-full bg-gray-100 flex items-center justify-center">""
              <User className="w-6 h-6 text-gray-400" />
            </div>
            )}
        <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
          <Pencil className="w-2 h-2 text-gray-600" />
      </div>
   </div>
  </button>
  {isDropdown &&(
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
      <div className="px-4 py-2 border-b">
        {newName ? (
           <div className='flex items-center space-x-2'>
               <input type='text' value={userName} onChange={(e)=>setUserName(e.target.value)} className='text-sm tex-gray-900 border px-2 py-1 rounded-md w-full '/>
               <button onClick={SaveUserName} className='text-blue-600 underline'>Save</button>
            </div>
              ):(
                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-700">{userName || "Guest"}</p>
                     <button onClick={() => setNewName(true)} className="text-sm text-blue-600 hover:underline">  Edit </button>
              </div>
              )}                  
           <p className="text-sm text-gray-500">{access.currentUser.email||"No email "}</p>
      </div>
      <label className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 flex items-center cursor-pointer">
         <input  type="file"  accept="image/*"    className="hidden"    onChange={handleImage} />
         <User className="w-4 h-4 mr-2" />Change Profile Image </label>
         <button  onClick={logout} className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center" ><LogOut className="w-4 h-4 mr-2" />Logout</button>
    </div>
 )}
</div>
    )
}
export default Useracc;