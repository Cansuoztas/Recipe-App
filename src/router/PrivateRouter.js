import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
// import Home from '../pages/home/Home'

const PrivateRouter = ({setLoginOn,loginOn}) => {
  const veri = JSON.parse(sessionStorage.getItem("veri"));

 
  return ( 
    
    veri  ? <> <Outlet/> </> : <Navigate to="/" />




    
   
  )
}

export default PrivateRouter