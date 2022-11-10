import React from 'react';
import style from './RecipesPage.module.css';
import Recipe from "./Recipe";

const RecipesPage = (props) => {

    return (
        <div className={style.recipes__container}>
            {props.recipesList.map(recipe => {
                return <Recipe allInfo={recipe} id={recipe.id} img={recipe.image} title={recipe.title} key={recipe.id}/>
            })}
        </div>
    );
};

export default RecipesPage;