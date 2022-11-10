import React from 'react';
import style from './Preloader.module.css'
import preloaderImg from './../../img/preloader.svg'

const Preloader = () => {
    return (
        <div className={style.preloader__container}>
            <img src={preloaderImg} alt={'loading...'} className={style.preloader__img}></img>
        </div>
    );
};

export default Preloader;