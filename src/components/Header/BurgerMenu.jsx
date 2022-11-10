import React from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
const BurgerMenu = ({active,setActive}) => {
    return (
        <div className={active ? style.menuactive : style.menu}>
            <div className={style.menu__content}>
                <NavLink className={style.burger__link} to={'/favoritePage'}>Favorite</NavLink>
                <NavLink className={style.burger__link} to={'/trendingPage/'}>Trending</NavLink>
                <NavLink className={style.burger__link} to={'/search/'}>Search by ingredients</NavLink>
            </div>
        </div>
    );
};

export default BurgerMenu;