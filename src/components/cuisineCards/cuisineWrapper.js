import React,{useEffect, useState} from "react";
import CuisineCard from "./cuisineCards";

let API_KEY = "82e58b8c799a4d1ca67fc6f7d540dc4c"
let CuisineWrapper =(props)=>{
    const [cuisines,setCuisines]= useState([]);

    useEffect(() => {
        if (props.selectedCuisine) { fetchCuisine() }
    }, [props.selectedCuisine]);

    async function fetchCuisine() {
        let response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${props.selectedCuisine}&addRecipeInformation=true&number=2`);
        let cuisineData = await response.json();
        setCuisines(cuisineData.results);
        console.log(cuisineData);
    }

    return (
        <div className='cuisineTile'>
            {cuisines.map((i) => (
               <CuisineCard key={i.id} cuisine={i} />
            ))}
        </div>
    );
}


export default CuisineWrapper