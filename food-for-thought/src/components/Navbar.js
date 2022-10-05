import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    
    <Nav className="bg-success text-white " defaultActiveKey="/" as="ul">
      <p className='text-black fw-bold navbar-brand pt-2 me-auto fs-3 fst-italic'>
        Food4Thought
      </p>
      <NavLink className='m-3 text-white fw-bold' to="/" exact > Home</NavLink>
      <AnchorLink className='m-3 text-white fw-bold' href='#about'> About us</AnchorLink>
      <NavLink className='m-3 text-white fw-bold' to="/recipes" exact >Recipes</NavLink>
      
    </Nav>
  )
}

export default NavBar