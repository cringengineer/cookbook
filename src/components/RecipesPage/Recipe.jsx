import React from 'react';
import style from './Recipe.module.css'
import {NavLink} from "react-router-dom";
import {getRecipeInfoData} from "../../redux/recipeInfoReducer";
import {useDispatch} from "react-redux";

const Recipe = ({img, id, title}) => {
    const dispatch = useDispatch()
    let urlForGetRecipe = `https://api.spoonacular.com/recipes/${id}/information?apiKey=6c10ba9562e34f059beada69d3fc4775`
    let urlForGetRecipe2 = `https://api.spoonacular.com/recipes/${id}/information?apiKey=63eb7d9e45c14357a10528fe33e25ed4&includeInstruction=true`
    return (
        <div className={style.recipe__container}>
            <img className={style.recipe__img} src={img}></img>
            <p className={style.title}>{title}</p>
            <NavLink className={style.get__btn} to={`recipe/${id}`}
                     onClick={() => dispatch(getRecipeInfoData(urlForGetRecipe2))}>Get recipe</NavLink>
        </div>
    );
};

export default Recipe;