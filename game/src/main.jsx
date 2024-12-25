import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FirebaseProvider } from "./Auth/Fireauth.jsx"
import App from './App.jsx'
import ToogleProvider from './Auth/Toogle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <FirebaseProvider>
    <ToogleProvider>
    <App />
    </ToogleProvider>
   </FirebaseProvider>
 </StrictMode>
)
