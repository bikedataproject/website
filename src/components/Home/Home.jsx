import React from 'react';
import i18n from "i18next";
import style from './Home.module.css';

const Home = () => {
  return (
    <>
      <section className={style.header}>
        <h1 className={style.header__title}>
          {i18n.t("Heading")}
        </h1>

        <div className={style.header__intro}>
          <p>
            {i18n.t("Introduction")}
          </p>
          <p className={style.intro__counter}>
            <span>+12.2K</span> {i18n.t("Label_total_km")}
          </p>
        </div>
      </section>

      <section className={style.content}>
        <div className={style.content__wrapper}>
        <h2 className={style.content__title}>{i18n.t("How_to_help")}</h2>
          <div className={style.content__text}>
            <p>{i18n.t("Ask_for_favor")}</p>
            <p>{i18n.t("By_sharing_your")}</p>
            <p>{i18n.t("Every_cyclist_can")}</p>
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
