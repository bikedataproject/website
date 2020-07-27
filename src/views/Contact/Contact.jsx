import React from 'react';
import style from './Contact.module.css';
import i18n from 'i18next';

const Contact = () => {
  return (
    <>
      <section className={`${style.header} ${style.grid} ${style.content}`}>
        <p className={style.bigLetter}>{i18n.t('Contact')}</p>
        <div className={style.header__wrapper}>
          <h1 className={style.header__title}>Contact</h1>
        </div>
      </section>
    </>
  );
};

export default Contact;
