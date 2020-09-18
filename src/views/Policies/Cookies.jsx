import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Policies.module.css';
import i18n from "../../utils/i18n";

const Cookies = () => {

    return (
        <>
            <section className={`${style.cookies} ${style.grid} ${style.content}`}>
                <p className={style.bigLetter}>{i18n.t('Cookies')}</p>
                <div className={style.header}>
                    <div className={style.header__wrapper}>
                        <h1 className={style.header__title}>{i18n.t('Cookies_title')}</h1>
                    </div>
                </div>

                <div className={style.text__wrapper}>
                    <section>
                        <h2 className={style.subtitle}>{i18n.t('What_are_cookies')}</h2>
                        <p>{i18n.t('Cookies_section_one')} <a href="https://en.wikipedia.org/wiki/HTTP_cookie" target="_blank">{i18n.t('Cookies_section_oneLink')}</a>
                        </p>
                    </section>
                    <section>
                        <h2 className={style.subtitle}>{i18n.t('How_we_use_cookies')}</h2>
                        <p>{i18n.t('Cookies_section_two')}</p>
                    </section>
                    <section>
                        <h2 className={style.subtitle}>{i18n.t('Disabling_cookies')}</h2>
                        <p>{i18n.t('Cookies_section_three')} <a href="https://addons.mozilla.org/en-US/firefox/addon/privacy-badger17/" target="_blank"> Privacy Badger</a> {i18n.t('Cookies_section_threeLink')}</p>
                    </section>
                    <section>
                        <h2 className={style.subtitle}>{i18n.t('Cookies_we_set')}</h2>
                        <p>{i18n.t('Cookies_section_fourOne')}</p>
                        <p>{i18n.t('Cookies_section_fourTwo')}</p>
                    </section>
                    <section>
                        <h2 className={style.subtitle}>{i18n.t('Third_party_cookies')}</h2>
                        <p>{i18n.t('Cookies_section_five')}</p>
                    </section>
                    <section>
                        <h2 className={style.subtitle}>{i18n.t('More_information')}</h2>
                        <p>{i18n.t('Cookies_section_six')}
                            <a
                                href="mailto:bikedataproject@openknowledge.be"
                                className={style.mailLink}
                                target="_blank"
                            >
                                bikedataproject@openknowledge.be
                            </a>
                        </p>
                    </section>
                </div>

            </section>
                
            
        </>
    );
};

export default Cookies;
