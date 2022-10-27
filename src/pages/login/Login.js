import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PrivateRouter from '../../router/PrivateRouter'
import LoginDiv ,{LoginLabel,LoginButton} from './Login.style'

const Login = ({setLoginOn,loginOn}) => {
  const [veri, setVeri] = useState({name:"",password:""})
  
  const navigate = useNavigate()
  
    const handleChange=(e)=>{
      setVeri({
        ...veri,  [e.target.id] : e.target.value
      })
  console.log(veri);
    }
  
    const onSubmitLogin=(e)=>{
  e.preventDefault() ;
  sessionStorage.setItem("veri", JSON.stringify(veri));
  setVeri({ username: "", password: "" });
  navigate("/home")
  
    }
  
    return (
     <LoginDiv>
          <form onSubmit={onSubmitLogin} action="" >
            <h1>Login</h1>
  
              <LoginLabel htmlFor="name">Enter your username</LoginLabel>
              <br />
  
  
              <input value={veri.name}  onChange={handleChange} style={{border:"2px solid #0a1218" , borderRadius:"5px",marginTop:"1rem",padding:"0.3rem"}} type="text" id='name' required />
              <br />
  <br />
              <LoginLabel htmlFor="password">Enter your password</LoginLabel>
              <br />
  
              <input value={veri.password} onChange={handleChange} style={{border:"2px solid #0a1218" , borderRadius:"5px",marginTop:"1rem",padding:"0.3rem"}} type="password" id='password' required />
  
  
              <br /><br />
            <LoginButton type="submit"onClick={()=> setLoginOn(true)}>Submit</LoginButton>
            
              
          </form>
  
     
  
     </LoginDiv>
  
    )
  }
  
  export default Login