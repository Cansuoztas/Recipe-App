import React from 'react'
import { Outlet } from 'react-router-dom'
// import Home from '../pages/home/Home'

const PrivateRouter = ({setLoginOn,loginOn}) => {
  console.log(loginOn)
  return (
    <div>
    {loginOn && <> <Outlet/> </>
    }
   </div>
  )
}

export default PrivateRouter