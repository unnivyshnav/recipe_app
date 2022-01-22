import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import './RecipeCards.css';

let API_KEY = "82e58b8c799a4d1ca67fc6f7d540dc4c"

function RecipeCard(props) {
    let { recipeID } = useParams();
    console.log(recipeID);
    const[recipe,setRecipe]=useState

    useEffect(() => {
        fetchRecipeInfo();
    }, [recipeID]);

    async function fetchRecipeInfo() {
        let response = await fetch(`https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${API_KEY}`);
      
let recipeInfo = await response.json();
        console.log(recipeInfo);
        setRecipe(recipeInfo)
    }

    return (
        <div className='recipeCard'>
            <Link to={"/"}>
                <button className='closeButton'>X</button>
            </Link>
        </div>
    );
}

export default RecipeCard;