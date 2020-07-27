import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../const/index';
import style from './NavBar.module.css';
import i18n from "../../utils/i18n";

const NavBar = () => {

    // COLOR CHANGE NAV
  const [colorNav, setColorNav] = useState(true);

  const handleScroll = () => {
    const colorNav = window.scrollY < 70;
    setColorNav(colorNav)
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <>
      <nav>
        <ul className={`${style.list} ${colorNav ? style.list : style.list__scroll}`}>
            <li>
            <NavLink className={style.nav__item} activeClassName={style.active} to={`${ROUTES.datamap}`}>
                {i18n.t("Data_Map")}
            </NavLink>
            </li>
            <li>
            <NavLink className={style.nav__item} activeClassName={style.active} to={`${ROUTES.about}`}>
              {i18n.t("About")}
            </NavLink>
            </li>
            <li>
            <NavLink className={style.nav__item} activeClassName={style.active} to={`${ROUTES.faq}`}> {i18n.t("FAQ")} </NavLink>
            </li>
            <li>
            <NavLink className={style.nav__item} activeClassName={style.active} to={`${ROUTES.contact}`}> {i18n.t("Contact")} </NavLink>
            </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
