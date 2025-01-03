// Import the functions you need from the SDKs you need
import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,onAuthStateChanged } from 'firebase/auth'


const firebaseConfig = { 
 apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
 authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
 projectId: import.meta.env.VITE_FIREBASE_PROJECID,
 storageBucket:import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
 messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
 appId:import.meta.env.VITE_FIREBASE_APPID,
 measurementId:import.meta.env.VITE_FIREBASE_MEASUREMENTID

  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const access=getAuth(app)
export const googleProvider=new GoogleAuthProvider();

 // this the Context name that use in different Component to use the Context
const FirebaseContext=createContext();

// Context name is FirebaseProvider this is use to Wrap the Compontent in the Main.jsx
export const FirebaseProvider =({children})=>{
  const [user ,setUser]=useState();
 // -> 
  useEffect(()=>{
    const unAuth=onAuthStateChanged(access,(currentUser)=>{
      setUser(currentUser);
    });
    return unAuth;
  },[])

  return(
  <FirebaseContext.Provider value={{access,googleProvider ,user,setUser}}>
    {children}
  </FirebaseContext.Provider>
  )
}
// this custom hook were i store thr FirebaseContext in the useFirebaseAuth()
export const useFirebaseAuth=()=>useContext(FirebaseContext)