import React from 'react';
import style from './Home.module.css';

const Home = () => {
  return (
    <>
      <section className={style.header}>
        <h1 className={style.header__title}>
          An online platform collecting bike data, for and by cyclists
        </h1>

        <div className={style.header__intro}>
          <p>
            With this project we aim to create a open data platform, for and by
            cyclists, that collects data on where and when people actually
            cycle. The platform aims at aggregating data from cyclists , to
            make cyclists more visible and cities better adapted to the cycling
            community.
          </p>
          <p className={style.intro__counter}>
            <span>+12.2K</span> Total kilometers gathered by the cycling
            community
          </p>
        </div>
      </section>

      <section className={style.content}>
        <div className={style.content__wrapper}>
          <h2 className={style.content__title}>How to help?</h2>
          <div className={style.content__text}>
            <p>To make this work we need to ask you for a simple favor. </p>
            <p>
              By sharing your own cycling data to our platform, all the
              collected data gives us patterns that can be used to make cyclists
              more visible and their cities adapted to them.
            </p>
            <p>
              Every kind of cyclist has something to contribute to this project.
              Some people already track their activity for training purposes,
              but we also really want to take into account the short routes.
              Commuting to work or when you just take a quick ride to the
              grocery store.
            </p>
          </div>
        </div>
        <img
          className={style.content__img}
          src="./assets/img/mockup-big.png"
          alt="Mock up of the app on a phone"
          width="468"
          height="593"
        />
      </section>
    </>
  );
};

export default Home;
