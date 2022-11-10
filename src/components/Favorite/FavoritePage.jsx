import style from "../RecipesPage/RecipesPage.module.css";
import Recipe from "../RecipesPage/Recipe";
import React from "react";

const RecipesPage = (props) => {

    return (
        <div className={style.recipes__container}>
            {props.recipesList.map(recipe => {
                return <Recipe allInfo={recipe.info} id={recipe.info.id} img={recipe.info.image} title={recipe.info.title} key={recipe.info.id}/>
            })}
        </div>
    );
};

export default RecipesPage;