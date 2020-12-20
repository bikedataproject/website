import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Thanks.module.css';
import i18n from "../../utils/i18n";

const ThanksFitbit = () => {

    return (
        <>
            <section className={`${style.content} ${style.grid} ${style.informed} ${style.header__margin}`}>
                <p className={style.bigLetter}>{i18n.t('Thanks_Bigletter')}</p>
                <div className={style.content__wrapper}>
                    <h2 className={style.content__title}>{i18n.t('Thanks_Fitbit_title')}</h2>
                    <p className={style.content__bold}>{i18n.t('Thanks_Content1')}</p>
                    <p>{i18n.t('Thanks_Content2')}</p>
                </div>
            </section>

            <section className={`${style.content} ${style.grid} ${style.informed}`}>
                <div className={style.content__wrapper}>
                    <h2 className={style.content__title}>{i18n.t('Informed_title')}</h2>
                    <form
                        action="https://bikedataproject.us10.list-manage.com/subscribe/post?u=0c7a4077dc373a78e97129b40&amp;id=48e38aad42"
                        method="post"
                        className={style.form}
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        target="_blank"
                        novalidate
                    >
                        <div className={style.inputHidden} aria-hidden="true">
                            <input
                                type="text"
                                name="b_4e280417525a8a98031f1ce33_9af7c29f8d"
                                tabindex="-1"
                                value=""
                            />
                        </div>
                        <label>{i18n.t('Email_label')}</label>
                        <div>
                            <input
                                className={style.form__input}
                                type="email"
                                placeholder={i18n.t('Informed_placeholder')}
                                name="EMAIL"
                                id="mce-EMAIL"
                                required
                            />
                            <button className={style.form__button}>
                                <img
                                    className={style.arrow}
                                    src="./assets/img/arrow-orange.svg"
                                    alt="Arrow orange icon"
                                    width="20"
                                    height="20"
                                />
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default ThanksFitbit;