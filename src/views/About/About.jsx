import React, {useState} from 'react';
import style from './About.module.css';
import Footer from '../../components/Footer/Footer';
import i18n from "../../utils/i18n";

const About = () => {

  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const onSelectFlag = async (country) => {
    const countryMapping = {
      BE: 'nl',
      FR: 'fre',
      US: 'en'
    }

    await i18n.changeLanguage(countryMapping[country]);
    setCurrentLanguage(country);
  }

  return (
    <>
      <div className={`${style.about} ${style.grid} ${style.content}`}>
        <p className={style.bigLetter}>{i18n.t('About_us')}</p>
        <section className={style.header}>
          <div className={style.header__wrapper}>
            <h1 className={style.header__title}>{i18n.t('About_title')}</h1>
          </div>
        </section>

        <div className={style.text__wrapper}>
          <h2 className={style.subtitle}>{i18n.t('Okb')}</h2>
          <p>{i18n.t('Okb_is')}</p>
          <p>
            <a href="https://be.okfn.org/" target="_blank">
              Open Knowledge Belgium
            </a>{' '}
            {i18n.t('Okb_umbrella')}
          </p>
          <p>{i18n.t('There_are_numerous')}</p>

          <h2 className={style.subtitle}>{i18n.t('Bike_cars')}</h2>
          <p>
            {i18n.t('Bike_data_project')}{' '}
            <a href="https://www.wgfilm.com" target="_blank">
              WG film
            </a>
            {i18n.t('Managed_by_frederik')}
          </p>

          <h2 className={style.subtitle}>{i18n.t('Osoc')}</h2>
          <p>{i18n.t('This_project_osoc')}</p>
        </div>
      </div>

      <Footer onSelectFlag={(selectedFlag) => onSelectFlag(selectedFlag)} />
    </>
  );
};

export default About;
