import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ROUTES } from '../../const/index';
import style from './NavBar.module.css';
import i18n from "../../utils/i18n";
import HamburgerMenu from 'react-hamburger-menu';

const NavBar = () => {

    // COLOR CHANGE NAV
  const [colorNav, setColorNav] = useState(true);
  const [menuColor, setMenuColor] = useState('white');
  const [menuOpen, setMenuOpen] = useState(false);
  const [hamburgerVisible, setHamburgerVisible] = useState(false);

  useEffect(() => {
    if(window.innerWidth < 750) setHamburgerVisible(true)
    else setHamburgerVisible(false)
    return;
  }, [])

  useEffect(() => {
    if(menuOpen)
      document.body.style.overflow = "hidden"
    else
      document.body.style.overflow = "scroll"
    return;
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false);
    if(colorNav && url === '/') setMenuColor('white')
    else setMenuColor('#36469D')
    return
  }, [useLocation().pathname])

  const handleScroll = () => {
    const colorNav = window.scrollY < 70;
    setColorNav(colorNav)
    if(colorNav && url === '/') setMenuColor('white')
    else setMenuColor('#36469D')
  };

  const url = useLocation().pathname;

  window.addEventListener('scroll', handleScroll);

  window.addEventListener('resize', () => {
    console.log(window.innerWidth);
    if(window.innerWidth < 750) setHamburgerVisible(true)
    else setHamburgerVisible(false)
  });

  const renderMobileMenu = () => {
    if(menuOpen)
      return(
        <div className={`${style.mobile__menu} ${colorNav && url === '/' ? style.mobile__menu : style.menu__scroll}`}>
          <ul>
            <li>
            <NavLink className={style.menu__item} activeClassName={style.active} to={`${ROUTES.datamap}`}>
                {i18n.t("Data_Map")}
            </NavLink>
            </li>
            <li>
            <NavLink className={style.menu__item} activeClassName={style.active} to={`${ROUTES.about}`}>
              {i18n.t("About")}
            </NavLink>
            </li>
            <li>
            <NavLink className={style.menu__item} activeClassName={style.active} to={`${ROUTES.faq}`}> {i18n.t("FAQ")} </NavLink>
            </li>
            <li>
            <NavLink className={style.menu__item} activeClassName={style.active} to={`${ROUTES.contact}`}> {i18n.t("Contact")} </NavLink>
            </li>
          </ul>
        </div>
      )
  }

  if(!hamburgerVisible) {
    return (
      <>
        <nav>
          <ul className={`${style.list} ${colorNav && url === '/' ? style.list__scroll : style.list}`}>
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
  } else {
    return (
      <>
        <nav>
          <HamburgerMenu
            isOpen={menuOpen}
            menuClicked={() => menuOpen? setMenuOpen(false) : setMenuOpen(true)}
            width={18}
            height={15}
            strokeWidth={1}
            rotate={0}
            color={menuColor}
            borderRadius={0}
            animationDuration={0.5}
        />
        </nav>
        {renderMobileMenu()}
      </>
    );
  }

};

export default NavBar;
