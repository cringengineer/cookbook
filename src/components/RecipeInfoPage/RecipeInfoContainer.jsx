import React from 'react';
import style from './RecipeInfo.module.css'
import Instruction from "./Instruction";
import background from './../../img/background2.jpg'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {NavLink} from "react-router-dom";
import arrow from './../../img/arrow-left.png'
import star from "../../img/star.svg";
import {useDispatch, useSelector} from "react-redux";
import {addToFavorite} from "../../redux/favoriteReducer";
import Preloader from "../Preloader/Preloader";
import cross from './../../img/cross.png';

const RecipeInfoContainer = ({info}) => {
    let dispatch = useDispatch();
    let isFetching = useSelector(state => state.recipeInfoPage.isFetching);
    let idOfFavorites = useSelector(state => state.favoritePage.id);
    let favoriteList = useSelector(state => state.favoritePage.favoriteRecipes);

    const removeFromFavorite = (id, index) => {
        let indexOfId = idOfFavorites.indexOf(id);
        favoriteList.forEach(item => {
            let b = item.info.id === id ? idOfFavorites.splice(indexOfId, 1) : null;
            let g = item.info.id === id ? favoriteList.splice(index, 1) : null;
        });
    };

    return (
        <div className={style.background__container} style={{backgroundImage: `url(${background})`}}>
            <Header/>
            {isFetching ? <Preloader/> : null}
            <NavLink className={style.arrow__container} to={'/recipes/'}>
                <img className={style.arrow} src={arrow} alt={'arrow'}></img>
            </NavLink>
            <div className={style.recipe__info__container}>
                <img className={style.recipe__img} src={info.image}></img>
                <div className={style.right}>
                    <div className={style.star__container}>
                        <h2 className={style.recipe__name}>{info.title}</h2>
                        {idOfFavorites.includes(info.id) ?
                            <img onClick={() => removeFromFavorite(info.id)} src={cross} className={style.cross}
                                 alt={'cross'}></img> :
                            <img onClick={() => dispatch(addToFavorite({info}))} className={style.star} src={star}
                                 alt={'star'}></img>}
                    </div>
                    <p className={style.recipe__info}>Health score: {info.healthScore}</p>
                    <p className={style.recipe__info}>{info.glutenFree ? 'Gluten-free.' : 'With gluten.'}</p>
                    <p className={style.recipe__info}>Ready in: {info.readyInMinutes} min.</p>
                    <p className={style.recipe__info}>Servings: {info.servings}.</p>
                    <p className={style.recipe__info}>{info.vegan ? 'Vegan.' : 'Not vegan.'}</p>
                    <p className={style.recipe__info}>{info.vegetarian ? 'Vegetarian.' : 'Not vegetarian.'}</p>
                </div>
            </div>
            <div className={style.container}>
                <Instruction/>
            </div>
            <Footer/>
        </div>
    );
};

export default RecipeInfoContainer;