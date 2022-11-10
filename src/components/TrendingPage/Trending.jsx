import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {trendingRecipesFetchData} from './../../redux/trendingRecipesReducer'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import RecipesPage from "../RecipesPage/RecipesPage";
import style from './Trending.module.css';
import background from './../../img/background2.jpg';
import Preloader from "../Preloader/Preloader";

const TrendingPage = () => {
    let number = 30;
    const URL = 'https://api.spoonacular.com/recipes/random?number=18&apiKey=63eb7d9e45c14357a10528fe33e25ed4';
    const URL2 = 'https://api.spoonacular.com/recipes/random?number=18&apiKey=6c10ba9562e34f059beada69d3fc4775';

    const dispatch = useDispatch();
    let isFetching = useSelector(state => state.trendingPage.isFetching);

    useEffect(() => {
        dispatch(trendingRecipesFetchData(URL2))
    }, [number])

    let trendingRecipes = useSelector(state => state.trendingPage.trendingRecipesList)

    return (
        <div style={{backgroundImage: `url(${background})`}} className={style.container}>
            <Header/>
            {isFetching ? <Preloader/> : null}
            <RecipesPage recipesList={trendingRecipes}/>
            <Footer/>
        </div>
    );
};

export default TrendingPage;