import React, {useEffect} from 'react';
import RecipesPage from "./RecipesPage";
import {useDispatch, useSelector} from "react-redux";
import {nextPage, previousPage, recipesFetchData} from "../../redux/recipesReducer";
import style from "./RecipesPage.module.css";
import Header from "../Header/Header";
import background from './../../img/background.jpg'
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

const RecipesContainer = () => {
    let offSet = useSelector(state => state.recipesPage.offSet)
    let URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=63eb7d9e45c14357a10528fe33e25ed4&number=30&offset=${offSet}&instructionsRequired=true&addRecipeInformation=true`
    const URL2 = `https://api.spoonacular.com/recipes/complexSearch?apiKey=6c10ba9562e34f059beada69d3fc4775&number=30&offset=${offSet}&instructionsRequired=true&addRecipeInformation=true`
    const dispatch = useDispatch()
    const recipes = useSelector(state => state.recipesPage.recipesList)
    let isFetching = useSelector(state => state.recipesPage.isFetching)

    useEffect(() => {
        dispatch(recipesFetchData(URL))
    }, [offSet])

    return (
        <div style={{backgroundImage: `url(${background})`}} className={style.container}>
            <Header/>
            {isFetching ? <Preloader/> : null}
            <RecipesPage recipesList={recipes}/>
            <div className={style.pagination}>
                <button className={style.pagination__btn} onClick={() => dispatch(previousPage(30))}>previous</button>
                <button className={style.pagination__btn} onClick={() => dispatch(nextPage(30))}>next</button>
            </div>
            <Footer/>
        </div>
    );
};

export default RecipesContainer