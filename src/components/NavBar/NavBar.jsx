import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';

const NavBar = () => {
  return (
    <>
      <div className={style.menu}>
        <div className={style.menu__wrapper}>
            <img src="./assets/img/logo.svg" alt="Bike Data Project logo" />
            <nav>
            <ul className={style.list}>
                <li>
                <NavLink className={style.nav__item} activeClassName={style.active} to="/">
                    Data Map
                </NavLink>
                </li>
                <li>
                <NavLink className={style.nav__item} activeClassName={style.active} to="/">
                    About
                </NavLink>
                </li>
                <li>
                <NavLink className={style.nav__item} activeClassName={style.active} to="/"> FAQ </NavLink>
                </li>
                <li>
                <NavLink className={style.nav__item} activeClassName={style.active} to="/"> Contact </NavLink>
                </li>
            </ul>
            </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
