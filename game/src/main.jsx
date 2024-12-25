import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FirebaseProvider } from "./Auth/Fireauth.jsx"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <FirebaseProvider>
    <App />
   </FirebaseProvider>
 </StrictMode>
)
