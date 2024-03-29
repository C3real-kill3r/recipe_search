import React from 'react';
import style from '../recipe.module.css'

const Recipe = ({title, image, calories, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.image} src={image} alt=""/>
            <h3>Calories</h3>
            <p>{calories}</p>
            <h3><b>Ingredients</b></h3>
            <ol>
                {ingredients.map((ingredient, index) =>(
                    <li key={index}>
                    {ingredient.text}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Recipe;
