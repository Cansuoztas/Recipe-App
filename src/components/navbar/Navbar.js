import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import yemekLogo from "../../assets/indir.png"
import NavbarDiv, { NavbarUl } from './Navbar.Style'

const Navbar = () => {
  return (
    <NavbarDiv>
        <img src={yemekLogo} width="150"  alt="" />
    <NavbarUl>
    <li>
        <NavLink to={"/home"} style={({isActive})=>({color:isActive && "red"})}>
             Home
        
        </NavLink></li>
        <li>
        <NavLink to={"/about"} style={({isActive})=>({color:isActive && "red"})}>
             About
        
        </NavLink></li>
        <li>
        <NavLink to={"/contact"} style={({isActive})=>({color:isActive && "red"})}>
        Contact
        
        </NavLink></li>
        <li>
        <NavLink to={"/"} style={({isActive})=>({color:isActive && "red"})}>
        Logout
        
        </NavLink></li>
    </NavbarUl>
        </NavbarDiv>
    
  )
}

export default Navbar