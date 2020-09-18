import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Policies.module.css';
import i18n from "../../utils/i18n";

const Terms = () => {

    return (
        <>
            <section className={`${style.cookies} ${style.grid} ${style.content}`}>
                <p className={style.bigLetter}>{i18n.t('Terms')}</p>
                <div className={style.header}>
                    <div className={style.header__wrapper}>
                        <h1 className={style.header__title}>{i18n.t('Terms_title')}</h1>
                        <p>{i18n.t('Terms_introOne')}</p>
                        <p>{i18n.t('Terms_introTwo')}</p>
                        <p>{i18n.t('Terms_introThree')}</p>
                        <p>{i18n.t('Terms_introFour')} {' '}
                            <Link
                                to="mailto:bikedataproject@openknowledge.be"
                                className={style.mailLink}
                                target="_blank"
                            >
                                bikedataproject@openknowledge.be
                            </Link></p>
                    </div>
                </div>

                <div className={style.text__wrapper}>
                    <section>
                        <h2 className={style.subtitle}>{i18n.t('Who_can_contribute')}</h2>
                        <p className={style.text__bold}>{i18n.t('Who_can_contribute_contentOne')}</p>
                        <p>{i18n.t('Who_can_contribute_contentTwo')}</p>
                    </section>
                    <section>
                        <h2 className={style.subtitle}>{i18n.t('Limitation_of_liability')}</h2>
                        <p>{i18n.t('Limitation_of_liability_contentOne')}</p>
                        <p className={style.smallcaps}>{i18n.t('Limitation_of_liability_contentTwo')}</p>
                    </section>
                    <section>
                        <h2 className={style.subtitle}>{i18n.t('Spam')}</h2>
                        <p>{i18n.t('Spam_contentOne')}</p>
                        <p>{i18n.t('Spam_contentTwo')}</p>
                    </section>
                    <section>
                        <h2 className={style.subtitle}>{i18n.t('Infringement')}</h2>
                        <p>{i18n.t('Infringement_contentOne')}</p>
                        <p>{i18n.t('Infringement_contentTwo')}</p>
                    </section>
                    <section>
                        <h2 className={style.subtitle}>{i18n.t('Breaches_aforementioned_rules')}</h2>
                        <p>{i18n.t('Breaches_aforementioned_rules_content')}</p>
                    </section>
                    <section>
                        <h2 className={style.subtitle}>{i18n.t('Property_rights')}</h2>
                        <p>{i18n.t('Property_rights_content')}</p>
                    </section>
                </div>

            </section>


        </>
    );
};

export default Terms;
