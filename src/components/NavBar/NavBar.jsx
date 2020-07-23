import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';
import i18n from "../../utils/i18n";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul className={style.list}>
            <li>
            <NavLink className={style.nav__item} activeClassName={style.active} to="/">
                {i18n.t("Data_Map")}
            </NavLink>
            </li>
            <li>
            <NavLink className={style.nav__item} activeClassName={style.active} to="/">
              {i18n.t("About")}
            </NavLink>
            </li>
            <li>
            <NavLink className={style.nav__item} activeClassName={style.active} to="/"> {i18n.t("FAQ")} </NavLink>
            </li>
            <li>
            <NavLink className={style.nav__item} activeClassName={style.active} to="/"> {i18n.t("Contact")} </NavLink>
            </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
