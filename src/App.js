import React,{useState} from "react";
import CuisineWrapper from "./components/cuisineCards/cuisineWrapper";
import Header from "./components/header/Header";

function App() {

  const[cuisine,setCuisne]= useState(null)

  function cuisneSelected(cuisine){
    setCuisne(cuisine);
  }
  return (
    <div>
      <Header cuisneSelect={cuisneSelected}/>
      <CuisineWrapper selectedCuisine= {cuisine}/>
    </div>
   
  );
}

export default App;
