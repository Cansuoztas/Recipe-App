import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import yemekLogo from "../../assets/logo.png"
import NavbarDiv, { NavbarUl } from './Navbar.Style'

const Navbar = () => {
  return (
    <NavbarDiv >
        <img src={yemekLogo} width="150"  alt="" />
    <NavbarUl >
    <li>
        <NavLink className={({isActive}) => isActive && "nav"}
 to={"/home"} style={{color:"hotpink",fontSize:"1.3rem",textDecoration:"none"}}>
             Home
        
        </NavLink></li>
        <li>
        <NavLink  className={({isActive}) => isActive && "nav"}
 to={"/about"} style={{color:"hotpink",fontSize:"1.3rem",textDecoration:"none"}}>
             About
        
        </NavLink></li>
        <li>
        <NavLink className={({isActive}) => isActive && "nav"}
 to={"/contact"} style={{color:"hotpink",fontSize:"1.3rem",textDecoration:"none"}}>
        Contact
        
        </NavLink></li>
        <li>
        <NavLink  className={({isActive}) => isActive && "nav"}
 to={"/"} style={{color:"hotpink",fontSize:"1.3rem",textDecoration:"none"}}>
        Logout
        
        </NavLink></li>
    </NavbarUl>
        </NavbarDiv>
    
  )
}

export default Navbar