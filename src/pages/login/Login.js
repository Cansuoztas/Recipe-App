import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PrivateRouter from '../../router/PrivateRouter'
import LoginDiv ,{LoginLabel,LoginButton} from './Login.style'

const Login = ({setLoginOn,loginOn}) => {


const navigate = useNavigate()

  const onSubmitLogin=(e)=>{
e.preventDefault() ;
// console.log("aaaaaaaaaaaaaaaaaaa")
console.log(loginOn);
navigate("/home")

  }

  return (
   <LoginDiv>
        <form onSubmit={onSubmitLogin} action="" >
          <h1>Login</h1>

            <LoginLabel htmlFor="isimfor">İsminizi Giriniz</LoginLabel>
            <br />
            <input value={"aaa"} style={{border:"2px solid #00CCC0" , borderRadius:"5px",marginTop:"1rem",padding:"0.3rem"}} type="text" id='isimfor' required />
            <br />
<br />
            <LoginLabel htmlFor="sifrefor">Şifrenizi Giriniz</LoginLabel>
            <br />
            <input value={"aaa"}  style={{border:"2px solid #00CCC0" , borderRadius:"5px",marginTop:"1rem",padding:"0.3rem"}} type="password" id='sifrefor' required />
            <br /><br />
          <LoginButton type="submit"onClick={()=> setLoginOn(true)}>Submit</LoginButton>
          
            
        </form>

   

   </LoginDiv>

  )
}

export default Login