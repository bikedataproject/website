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

      <section className={`${style.content} ${style.grid}`}>
        <div className={style.content__wrapper}>
        <h2 className={style.content__title}>{i18n.t("How_to_help")}</h2>
          <div className={style.content__text}>
            <p className={style.content__textBold}>{i18n.t("Ask_for_favor")}</p>
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

      <section className={`${style.content} ${style.grid}`}>
        <div className={style.content__wrapper}>
          <h2 className={style.content__title}>Donate your bike data</h2>
          <div className={style.content__text}>
            <p>
              There are a several ways you can contribute data to the project.
              If you already use one of the apps listed below you can easily
              connect them to The Bike Data Project. Once your app is connected
              you can just carry on as usual and your rides will automatically
              be uploaded to our service.
            </p>
            <p>
              You’re not using such an application yet? No worries! You can
              still be part of this project by also downloading and using our
              app.
            </p>
          </div>
        </div>
        <div className={style.content__buttons}>
          <div className={style.buttons__other}>
            <p>Connect your existing app</p>
            <button>Strava</button>
          </div>
          <div className={style.buttons__our}>
            <p>Download our app</p>
            <button>Google Store</button>
          </div>
        </div>
      </section>

      <section className={style.content}>
        <h2 className={style.content__title}>Collected data worldwide</h2>
        <div className={`${style.data__overview} ${style.grid}`}>
          <div className={style.data__set}>
            <span className={style.data__number}>22.982</span>
            <span className={style.data__label}>rides collected</span>
          </div>
          <div className={style.data__set}>
            <span className={style.data__number}>
              205.250 <span className={style.data__small}>km</span>
            </span>
            <span className={style.data__label}>rides collected</span>
          </div>
          <div className={style.data__set}>
            <span className={style.data__number}>
              25 <span className={style.data__small}>min</span>
            </span>
            <span className={style.data__label}>rides collected</span>
          </div>
          <div className={style.data__set}>
            <span className={style.data__number}>
              13.48 <span className={style.data__small}>km/h</span>
            </span>
            <span className={style.data__label}>rides collected</span>
          </div>
          <div className={style.data__set}>
            <span className={style.data__number}>
              5.72 <span className={style.data__small}>km</span>
            </span>
            <span className={style.data__label}>rides collected</span>
          </div>
          <div className={style.data__set}>
            <span className={style.data__number}>
              26.68 <span className={style.data__small}>km</span>
            </span>
            <span className={style.data__label}>rides collected</span>
          </div>
        </div>

        <h3 className={style.subtitle}>Interested in the data by region?</h3>
        <button className={style.btn}>See full map</button>
      </section>
    </>
  );
};

export default Home;
