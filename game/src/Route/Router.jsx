import React from 'react'
import { createBrowserRouter ,Navigate,RouterProvider} from "react-router"
import SiginUp from '../Component/SiginUp'
import SignIn from '../Component/Sigin'
import Home from "../Component/Home"
import Procted from '../Component/ProttectedRoute/Procted'
import Mainpage from '../Component/Mainpage'
import Errorpage from '../ErrorPage/Errorpage'

// create the router for the Component 
const router=createBrowserRouter([
  { path:'/', element:<Home />},
  { path:"/siginUp", element:<SiginUp />},
  { path:"/sigin", element:<SignIn /> },,
  {path:"*",element:<Errorpage />},
  { path:"/mainpage",element:(
    <Procted>
      <Mainpage />
    </Procted>
   )}
])

 const Router=()=>{
  return (
   <>
   <RouterProvider router={router} />
   </>
  )
}

export default Router;