import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function RecipeNav() {
  return (
    
    <Nav className="bg-success text-white "as="ul">
    <p className='text-black fw-bold navbar-brand pt-2 me-auto fs-3 fst-italic'>
      Food4Thought
    </p>
    <NavLink className='m-3 text-white fw-bold' to="/"  > Home</NavLink>
    <NavLink className='m-3 text-white fw-bold' to="/recipes"  >Recipes</NavLink>
    <NavLink className='m-3 text-white fw-bold' to="/indian"  > Indian</NavLink>
    <NavLink className='m-3 text-white fw-bold' to="/chinese"  > Chinese</NavLink>
    <NavLink className='m-3 text-white fw-bold' to="/american"  >American</NavLink>
    
  </Nav>
  )
}

export default RecipeNav