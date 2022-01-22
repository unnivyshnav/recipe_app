import React from 'react';

export default function Ingredients(props) {
    const { ingredients } = props;

    return (
        <div>
            {
                ingredients.map(i => {
                    return <div>
                        <img src={`https://spoonacular.com/cdn/ingredients_100x100/${i.image}`}></img>
                        <span>{i.name}</span>
                    </div>
                })
            }
        </div >
    );
}
