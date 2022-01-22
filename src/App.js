import React,{useState} from "react";
import CuisineWrapper from "./components/cuisineCards/cuisineWrapper";
import Header from "./components/header/Header";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import RecipeCard from "./components/recipeDetails/RecipeCard";

function App() {

  const[cuisine,setCuisne]= useState(null)

  function cuisneSelected(cuisine){
    setCuisne(cuisine);
  }
  return (
    <Router>
       <div>
            <Header cuisneSelect={cuisneSelected}/>
            <CuisineWrapper selectedCuisine= {cuisine}/>
            <Routes>
              <Route path="/recipe/:recipeID" element={<RecipeCard/>}></Route>
            </Routes>
      </div>
  </Router>
   
   
  );
}

export default App;
