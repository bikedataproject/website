import React from 'react';
import style from './DataMap.module.css';
import i18n from "../../utils/i18n";

import './data.css';

const DataMap = () => {

  return (
    <>
      <section className={`${style.header} ${style.grid} ${style.content}`}>
        <p className={style.bigLetter}>{i18n.t('Data')}</p>
        <div className={style.header__wrapper}>
          <h1 className={style.header__title}>{i18n.t('Map_title')}</h1>
          <p>{i18n.t('Data_content_two')}</p>          
        </div>
      </section>

      <section>
        <iframe style={{ width: '100%', height: '500px', maxHeight: '40vh' }} src="https://data.bikedataproject.org/map/#2.01/45/24.32" title="iframe" />
      </section>

      <section className={`${style.header} ${style.grid} ${style.content}`}>
        <div className={style.header__wrapper_no_top_margin}>
          <p>{i18n.t('Data_content_three')}</p>
          <ul>
            <li>{i18n.t('Data_content_listOne')}</li>
            <li>{i18n.t('Data_content_listTwo')}</li>
            <li>{i18n.t('Data_content_listThree')}</li>
            <li>{i18n.t('Data_content_listFour')}</li>
          </ul>
          <p>{i18n.t('Data_content_four')}</p>          
        </div>
      </section>

      <section className={`${style.cta} ${style.grid} ${style.content}`}>
        <div className={style.cta__wrapper}>
          <h3 className={style.subtitle}>{i18n.t('Map_subtitle')}</h3>

          <a className={style.btn} href="https://github.com/bikedataproject">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 0C7.15983 0 0 7.26871 0 16.2433C0 23.877 5.15949 30.2125 12.1205 31.9986C12.0402 31.7954 12.0007 31.5106 12.0007 31.2272V28.4652H10.0003C8.92051 28.4652 7.91966 27.9786 7.47983 27.0842C6.95966 26.1096 6.87932 24.6069 5.55983 23.6724C5.15949 23.3475 5.47949 23.0226 5.91932 23.0627C6.75949 23.306 7.43898 23.8756 8.07898 24.7271C8.71898 25.5801 8.99949 25.7833 10.1991 25.7833C10.7588 25.7833 11.6385 25.7432 12.4391 25.6202C12.879 24.4825 13.6388 23.4678 14.5593 22.9812C9.19966 22.3314 6.63966 19.6509 6.63966 15.9959C6.63966 14.4116 7.31915 12.9089 8.43983 11.6095C8.08034 10.3501 7.59966 7.75117 8.60051 6.73648C11.0012 6.73648 12.4405 8.32072 12.8 8.72576C13.9997 8.31934 15.3205 8.07603 16.6795 8.07603C18.0793 8.07603 19.3593 8.31934 20.559 8.72576C20.9185 8.31934 22.3591 6.73648 24.7585 6.73648C25.7185 7.71108 25.2786 10.3501 24.8783 11.6095C25.999 12.8688 26.639 14.4116 26.639 15.9959C26.639 19.6509 24.1185 22.3314 18.7997 22.8996C20.2798 23.671 21.3202 25.8635 21.3202 27.4878V31.1871C21.3202 31.3088 21.2807 31.4304 21.2807 31.5521C27.52 29.3596 32 23.3503 32 16.2433C32 7.26871 24.8402 0 16 0Z"
                fill="white"
              />
            </svg>
            Github
          </a>
        </div>
      </section>
    </>
  );
};

export default DataMap;
