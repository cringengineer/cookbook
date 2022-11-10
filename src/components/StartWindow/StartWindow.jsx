import React from 'react';
import style from './StartWindow.module.css';
import background from '../../img/background.jpg'
import {NavLink} from "react-router-dom";
import ingredients from './../../img/ingredients.svg'
import checklist from './../../img/checklist.svg'
import chef from './../../img/chef.svg'

const StartWindow = () => {
    return (
        <div className={style.container} style={{backgroundImage: `url(${background})`}}>
            <div className={style.icons__container}>
                <div className={style.align__icons}>
                    <p className={style.step__text}>Step 1</p>
                    <img className={style.icon} src={ingredients} alt={'icon'}></img>
                    <p className={style.text}>Pick necessary ingredients</p>
                </div>
                <div className={style.align__icons}>
                    <p className={style.step__text}>Step 2</p>
                    <img className={style.icon} src={checklist} alt={'icon'}></img>
                    <p className={style.text}>Follow the recipe of the chosen dish</p>
                </div>
                <div className={style.align__icons}>
                    <p className={style.step__text}>Step 3</p>
                    <img className={style.icon} src={chef} alt={'icon'}></img>
                    <p className={style.text}>Enjoy!</p>
                </div>
            </div>
            <div className={style.btn__container}>
                <NavLink className={style.btn} to={'/recipes/'}>Get started</NavLink>
            </div>
        </div>
    );
};

export default StartWindow;