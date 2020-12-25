import React from 'react';
import style from './About.module.css';
import i18n from "../../utils/i18n";

const About = () => {

  return (
    <>
      <div className={`${style.about} ${style.grid} ${style.content}`}>
        <p className={style.bigLetter}>{i18n.t('About_us')}</p>
        <section className={style.header}>
          <div className={style.header__wrapper}>
            <h1 className={style.header__title}>{i18n.t('About_title')}</h1>
            <p>{i18n.t('About_intro')}</p>
          </div>
        </section>

        <div className={style.text__wrapper}>
          <h2 className={style.subtitle}>{i18n.t('About_titleOne')}</h2>
          <p>{i18n.t('About_contentOne_oneBefore')} {' '}
            <a href="https://www.wgfilm.com" target="_blank" rel="noopener noreferrer">
              WG film
            </a>{' '}
            {i18n.t('About_contentOne_oneMiddle')}
            <a href="https://vimeo.com/ondemand/bikesvscars" target="_blank" rel="noopener noreferrer">
              Bikes vs Cars documentary
            </a>
            {i18n.t('About_contentOne_oneAfter')}
          </p>
          <p>{i18n.t('About_contentOne_twoBefore')} {' '}
            <a href="https://be.okfn.org/" target="_blank" rel="noopener noreferrer">
              Open Knowledge Belgium
            </a>{' '}
            {i18n.t('About_contentOne_twoAfter')}
          </p>
          <p>{i18n.t('About_contentOne_three')}</p>

          <h2 className={style.subtitle}>{i18n.t('About_titleTwo')}</h2>
          <p>{i18n.t('About_contentTwo_one')}</p>
          <p>{i18n.t('About_contentTwo_two')}</p>

          <h2 className={style.subtitle}>{i18n.t('About_titleThree')}</h2>
          <p>{i18n.t('About_contentThree_one')}</p>
          <p>{i18n.t('About_contentThree_two')}</p>
          <ul>
            <li>
              <span>{i18n.t('About_contentThree_listOneBold')}</span> {i18n.t('About_contentThree_listOne')}
            </li>
            <li>
              <span>{i18n.t('About_contentThree_listTwoBold')}</span> {i18n.t('About_contentThree_listTwo')}
            </li>
            <li>
              <span>{i18n.t('About_contentThree_listThreeBold')}</span> {i18n.t('About_contentThree_listThree')}
            </li>
          </ul>

          <h2 className={style.subtitle}>{i18n.t('About_titleFour')}</h2>
          <p>{i18n.t('About_contentFour')}</p>
        </div>
      </div>
    </>
  );
};

export default About;
