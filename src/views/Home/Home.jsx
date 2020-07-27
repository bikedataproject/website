import React from 'react';
import { useObserver } from 'mobx-react-lite';

import i18n from "i18next";
import style from './Home.module.css';
import Footer from '../../components/Footer/Footer';
 
const Home = () => {

  return useObserver(() => (
    <>
      <section className={style.header}>
        <div className={style.header__wrapper}>
          <h1 className={style.header__title}>{i18n.t('Heading')}</h1>
        </div>

        <div className={style.header__intro}>
          <p>{i18n.t('Introduction')}</p>
          <p className={style.intro__counter}>
            <p className={style.counter__total}>+12.2K</p>
            <p>{i18n.t('Label_total_km')}</p>
          </p>
        </div>
      </section>

      {/* Doesn't take 'help' classname?! */}
      <section className={`${style.content} ${style.grid} ${style.help}}`}>
        <p className={`${style.bigLetter} ${style.helpLetter}`}>
          {i18n.t('Help')}
        </p>
        <div className={style.content__wrapper}>
          <h2 className={style.content__title}>{i18n.t('Help_title')}</h2>
          <div className={style.content__text}>
            <p className={style.content__textBold}>{i18n.t('Ask_for_favor')}</p>
            <p>{i18n.t('By_sharing_your')}</p>
            <p>{i18n.t('Every_cyclist_can')}</p>
          </div>
        </div>
        <picture className={style.content__img}>
          <source
            media="(max-width: 600px)"
            srcSet="./assets/img/mockup-hor.png 400w"
          />
          <source
            media="(min-width: 600px)"
            srcSet="./assets/img/mockup-big.png 468w"
          />
          <img
            className={style.content__img}
            src="./assets/img/mockup-big.png"
            alt="Mock up of the app on a phone"
            width="468"
            height="593"
          />
        </picture>
      </section>

      <img
        className={style.line__img}
        src="./assets/img/bike_illustration.svg"
        alt="Line illustration of a bike and some trees."
      />

      <section className={`${style.content} ${style.grid} ${style.donate}`}>
        <p className={`${style.bigLetter} ${style.donateLetter}`}>
          {i18n.t('Donate')}
        </p>
        <div className={style.content__wrapper}>
          <h2 className={style.content__title}>{i18n.t('Donate_title')}</h2>
          <div className={style.content__text}>
            <p>{i18n.t('Several_ways_to_contribute')}</p>
            <p>{i18n.t('You_not_using')}</p>
          </div>
        </div>
        <div className={style.donate__buttons}>
          <div className={style.buttons__other}>
            <p>{i18n.t('Connect_existing_account')}</p>
            <div className={style.buttons__wrapper}>
              <button className={style.btn}>Strava</button>
              <button className={style.btn}>Other</button>
            </div>
          </div>
          <div className={style.buttons__our}>
            <p>{i18n.t('Download_our_app')}</p>
            <div className={style.buttons__wrapper}>
              <button className={style.btn}>Google Store</button>
              <button className={style.btn}>Apple Store</button>
            </div>
          </div>
        </div>
      </section>

      <section className={`${style.content} ${style.data}`}>
        <h2 className={style.content__title}>{i18n.t('Data_title')}</h2>
        <p className={`${style.bigLetter} ${style.dataLetter}`}>
          {i18n.t('Data')}
        </p>
        <div className={`${style.data__overview} ${style.grid}`}>
          <div className={style.data__set}>
            <span className={style.data__number}>22.982</span>
            <span className={style.data__label}>
              {i18n.t('Rides_collected')}
            </span>
          </div>
          <div className={style.data__set}>
            <span className={style.data__number}>
              20.250 <span className={style.data__small}>km</span>
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
        <div className={style.data__more}>
          <h3 className={style.subtitle}>{i18n.t('Data_subtitle')}</h3>
          <button className={style.btn}>{i18n.t('Data_button')}</button>
        </div>
      </section>

      <section className={`${style.content} ${style.grid} ${style.contribute}`}>
        {/* <p className={`${style.bigLetter} ${style.contributeLetter}`}>{i18n.t('Contribute')}</p> */}
        <div className={style.content__wrapper}>
          <h2 className={style.content__title}>{i18n.t('Contribute_title')}</h2>
          <div className={style.content__text}>
            <p>{i18n.t('People_who_work')}</p>
            <p>{i18n.t('Common_goal')}</p>
          </div>
        </div>
        <img
          className={style.content__img}
          src="./assets/img/contribute.png"
          alt="Mock up of the app on a phone"
          width="680"
          height="580"
        />
      </section>

      <section className={`${style.content} ${style.grid} ${style.visible}`}>
        <p className={`${style.bigLetter} ${style.visibleLetter}`}>
          {i18n.t('Visible')}
        </p>
        <div className={style.content__wrapper}>
          <h2 className={style.content__title}>{i18n.t('Visible_title')}</h2>
          <div className={style.content__text}>
            <p>{i18n.t('Community_more_visible')}</p>
            <p>{i18n.t('Globally_but_locally')}</p>
          </div>
        </div>
      </section>

      <img
        className={style.route__img}
        src="./assets/img/route.svg"
        alt="Striped line of a route with places marked on"
      />

      <section
        className={`${style.content} ${style.grid} ${style.partners_remove}`}
      >
        <p className={`${style.bigLetter} ${style.partnersLetter}`}>{i18n.t('Partners')}</p>
        <div className={style.content__wrapper}>
          <h2 className={style.content__title}>{i18n.t('Partners_title')}</h2>
          <div className={`${style.partners} ${style.grid}`}>
            <div className={style.partner}>
              <img
                className={style.partner__img}
                src="./assets/img/brussels-mobility.png"
                alt="Logo of brussels mobility"
                width="176"
                height="49"
              />
            </div>
            <div className={style.partner}>
              <img
                className={style.partner__img}
                src="./assets/img/brussels-mobility.png"
                alt="Logo of brussels mobility"
                width="176"
                height="49"
              />
            </div>
            <div className={style.partner}>
              <img
                className={style.partner__img}
                src="./assets/img/brussels-mobility.png"
                alt="Logo of brussels mobility"
                width="176"
                height="49"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  ));
};

export default Home;
