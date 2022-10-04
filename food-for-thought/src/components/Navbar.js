import React from 'react'
import {Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <Nav className="bg-dark text-white p-3" defaultActiveKey="/" as="ul">
      <NavLink className='m-2' to="/" exact > Home</NavLink>
      <NavLink className='m-2' to="/About us" exact > About us</NavLink>
      <NavLink className='m-2' to="/Recipes" exact >Recipes</NavLink>
      
    </Nav>
  )
}

export default NavBar