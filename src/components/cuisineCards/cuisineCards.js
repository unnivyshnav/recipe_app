import React from "react";
import { Time, Group } from '../../assets';

function CuisineCard(props) {
    // array destructing
    let { cuisine } = props;

    return (
        <div className="cuisineCard">
            <img src={cuisine.image} alt="cuisine" className="cuisineImage"></img>
            <h4 className="cuisineTitle">{cuisine.title}</h4>
            <div className="cuisineInfo">
                <Time />
                <span>{cuisine.readyInMinutes}</span>
                <Group />
<span>{cuisine.servings}</span>
            </div>
        </div>
    )
}

export default CuisineCard;
