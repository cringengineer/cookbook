import React from 'react';
import background from "../../img/background.jpg";
import style from "./FindByIngredients.module.css";
import Preloader from "../Preloader/Preloader";
import RecipesPage from "../RecipesPage/RecipesPage";
import Footer from "../Footer/Footer";
import {useSelector} from "react-redux";
import Header from "../Header/Header";



const FoundedRecipes = ({recipes}) => {
    let isFetching = useSelector(state => state.findByIngredientsPage.isFetching);
    let recipesList = useSelector(state => state.findByIngredientsPage.recipesList);
    return (
        <div style={{backgroundImage: `url(${background})`}} className={style.container}>
            <Header/>
            {recipesList.length ? <RecipesPage recipesList={recipes}/> : <p className={style.error__message}>Please, choose ingredients!</p>}
            {isFetching ? <Preloader/> : null}
            <Footer />
        </div>
    );
};

export default FoundedRecipes;