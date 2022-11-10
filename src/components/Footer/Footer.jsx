import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
    return (
        <div className={style.footer__container}>
            <a href='https://github.com/cringengineer' className={style.git__link}>©2022 cringengineer</a>
        </div>
    );
};

export default Footer;