import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import RecipeNav from '../components/RecipeNav';


function Indian() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian")
      .then((r) => r.json())
      .then((recipes) => setRecipes(recipes.meals));
  }, []);

  return (
    <>
    <RecipeNav/>
    {recipes.map((recipe) => (
      <RecipeCard key={recipe.id}/>
    ))}
    
    </>
  )
}

export default Indian