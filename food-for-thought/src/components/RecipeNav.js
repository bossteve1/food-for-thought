import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function RecipeNav() {
  return (
    
    <Nav className="bg-success text-white " defaultActiveKey="/" as="ul">
    <p className='text-black fw-bold navbar-brand pt-2 me-auto fs-3 fst-italic'>
      Food4Thought
    </p>
    <NavLink className='m-3 text-white fw-bold' to="/" exact > Home</NavLink>
    <NavLink className='m-3 text-white fw-bold' to="/recipes" exact >Recipes</NavLink>
    <NavLink className='m-3 text-white fw-bold' to="/indian" exact > Indian</NavLink>
    <NavLink className='m-3 text-white fw-bold' to="/chinese" ecact > Chinese</NavLink>
    <NavLink className='m-3 text-white fw-bold' to="/american" exact >American</NavLink>
    
  </Nav>
  )
}

export default RecipeNav