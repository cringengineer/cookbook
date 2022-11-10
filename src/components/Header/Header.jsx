import React, {useState} from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import BurgerMenu from "./BurgerMenu";


const Header = () => {
    let [menuActive, setMenuActive] = useState(false);

    return (
        <div className={style.header}>
            <div onClick={() => setMenuActive(false)} className={menuActive ? style.blur : style.blur__off}></div>
            <div className={style.header__container}>
                <NavLink to={'/'} className={style.header__title}>Recipes Book</NavLink>
                <nav className={style.nav__container}>
                    <NavLink className={style.nav__link} to={'/favoritePage'}>Favorite</NavLink>
                    <NavLink className={style.nav__link} to={'/trendingPage/'}>Trending</NavLink>
                    <NavLink className={style.nav__link} to={'/search/'}>Search by ingredients</NavLink>
                </nav>
                <div className={style.burger__container}>
                    <div onClick={() => setMenuActive(!menuActive)}
                         className={menuActive ? style.active__burger__btn : style.burger__btn}><span></span></div>
                </div>
                <BurgerMenu active={menuActive} setActive={setMenuActive}/>
            </div>



        </div>
    );
};

export default Header;