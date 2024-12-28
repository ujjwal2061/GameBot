// Import the functions you need from the SDKs you need
import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,onAuthStateChanged } from 'firebase/auth'


const firebaseConfig = {

  apiKey: "AIzaSyDj7KBxjFONI0Jga5x5MnsM8EtLS1aCmH8",
  authDomain: "gamebot-1.firebaseapp.com",
  projectId: "gamebot-1",
  storageBucket: "gamebot-1.firebasestorage.app",
  messagingSenderId: "249280016490",
  appId: "1:249280016490:web:a1a3ab9aebc7ba5dfa9a13",
  measurementId: "G-53R2T9VG22"



  // apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  // authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_FIREBASE_PROJECID,
  // storageBucket:import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  // appId:import.meta.env.VITE_FIREBASE_APPID,
  // measurementId:import.meta.env.VITE_FIREBASE_MEASUREMENTID
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
  },[access])

  return(
  <FirebaseContext.Provider value={{access,googleProvider ,user,setUser}}>
    {children}
  </FirebaseContext.Provider>
  )
}
// this custom hook were i store thr FirebaseContext in the useFirebaseAuth()
export const useFirebaseAuth=()=>useContext(FirebaseContext)