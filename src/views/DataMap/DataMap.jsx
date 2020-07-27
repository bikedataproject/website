import React from 'react';
import style from './DataMap.module.css';
import i18n from 'i18next';

const DataMap = () => {
  return (
    <>
      <section className={style.header}>
        <div className={style.header__wrapper}>
          <h1 className={style.header__title}>{i18n.t('Map_title')}</h1>
        </div>
      </section>
    </>
  );
};

export default DataMap;
