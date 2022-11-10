import React from 'react';
import Header from "../Header/Header";
import {useSelector} from "react-redux";
import FavoritePage from "./FavoritePage";
import background from './../../img/background2.jpg'
import style from "./Favorite.module.css";


const Favorite = () => {
    let favoriteRecipes = useSelector(state => state.favoritePage.favoriteRecipes)

    return (
        <div className={style.background__container} style={{backgroundImage: `url(${background})`}}>
            <Header/>
            {favoriteRecipes.length ? null :
                <div className={style.message__wrapper}><h1 className={style.message}>Your list of favorites is empty.
                    Replenish it by clicking on the star next to the name of the recipe!</h1></div>}
            <FavoritePage recipesList={favoriteRecipes}/>
        </div>
    );
};

export default Favorite;