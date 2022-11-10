import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {findByIngredientsFetchData} from "../../redux/findByIngredientsReducer";
import FindByIngredients from "./FindByIngredients";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from './FindByIngredients.module.css'
import background from './../../img/background2.jpg'
import {NavLink} from "react-router-dom";

const FindByIngredientsContainer = () => {
    let dispatch = useDispatch()
    let ingredientsList = useSelector(state => state.findByIngredientsPage.ingredientsList)
    let urlFind = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=63eb7d9e45c14357a10528fe33e25ed4&ignorePantry=true&ingredients=${ingredientsList.join(',+')}&number=30`

    let recipes = useSelector(state => state.findByIngredientsPage.recipesList)

    return (
        <div style={{backgroundImage: `url(${background})`}} className={style.container}>
            <Header/>
            <p className={style.description}>On this page you can choose the ingredients you have.You don’t need to
                choose basic ingredients like sugar, flour, etc. I hope you have them in stock!</p>
            <FindByIngredients recipes={recipes}/>
            <NavLink className={style.find__btn} to='/searchResults'
                     onClick={() => dispatch(findByIngredientsFetchData(urlFind))}>Find</NavLink>
            <Footer/>
        </div>
    );
};

export default FindByIngredientsContainer;