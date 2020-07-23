import React from 'react';
import style from './Header.module.css';
import NavBar from '../NavBar/NavBar';

const Header = () => {
  return (
    <>
      <div className={style.header}>
        <div className={style.header__wrapper}>
            <img src="./assets/img/logo.svg" alt="Bike Data Project logo" />
            <NavBar />
        </div>
      </div>
    </>
  );
};

export default Header;
