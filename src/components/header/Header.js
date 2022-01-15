import React from "react";
import './Header.css'

let Header = (props)=>{
   
    
    return(
        <nav className="header">
            <h2 className="logo">Haru's Reciepe</h2>
            <div className="cuisines">
            <a href="#" onClick={(e)=>props.cuisneSelect("Indian")}>Indian</a>
            <a href="#" onClick={(e)=>props.cuisneSelect("Italian")}>Italian</a>
            <a href="#" onClick={(e)=>props.cuisneSelect("American")}>American</a>
            <a href="#" onClick={(e)=>props.cuisneSelect("Chinese")}>Chinese</a>
            </div>
        
        </nav>
    
    )
}

export default Header