import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Policies.module.css';
import i18n from "../../utils/i18n";

const Privacy = () => {

    return (
        <>
            <section className={`${style.privacy} ${style.grid} ${style.content}`}>
                <p className={style.bigLetter}>{i18n.t('Privacy')}</p>
                <div className={style.header}>
                    <div className={style.header__wrapper}>
                        <div className={style.title__wrapper}>
                            <h1 className={style.header__title}>{i18n.t('Privacy_title')}</h1>
                            <p className={style.smallcaps}>Last updated: 16 September 2020</p>
                        </div>
                        <p>{i18n.t('Privacy_introOne')}</p>
                        <p>{i18n.t('Privacy_introTwo')}</p>
                        <p>Email support {' '}
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
                        <h2 className={style.subtitle}>{i18n.t('Privacy_policy_section')}</h2>
                        <p>{i18n.t('Privacy_section_one')}</p>
                    </section>
                    <section>
                        <h2 className={style.subtitle}>{i18n.t('What_does_personal')}</h2>
                        <p>{i18n.t('Privacy_section_two')}</p>
                    </section>
                    <section>
                        <h2 className={style.subtitle}>{i18n.t('What_personal_data')}</h2>
                        <p>{i18n.t('Privacy_section_three')}</p>
                        <section className={style.text__indent}>
                            <h3 className={style.kopOne}>{i18n.t('Privacy_section_threeOne')}</h3>
                            <ul>
                                <li>{i18n.t('Privacy_section_threeOne_pointOne')}</li>
                                <li>{i18n.t('Privacy_section_threeOne_pointTwo')}</li>
                                <li>{i18n.t('Privacy_section_threeOne_pointThree')}</li>
                            </ul>
                        </section>
                        <section className={style.text__indent}>
                            <h3 className={style.kopOne}>{i18n.t('Privacy_section_threeTwo')}</h3>
                            <p>{i18n.t('Privacy_section_threeTwo_content')}</p>
                        </section>
                        <section className={style.text__indent}>
                            <h3 className={style.kopOne}>{i18n.t('Privacy_section_threeThree')}</h3>
                            <ul>
                                <li>{i18n.t('Privacy_section_threeThree_pointOne')}</li>
                                <li>{i18n.t('Privacy_section_threeThree_pointTwo')}</li>
                                <li>{i18n.t('Privacy_section_threeThree_pointThree')}</li>
                                <li>{i18n.t('Privacy_section_threeThree_pointFour')}</li>
                                <li>{i18n.t('Privacy_section_threeThree_pointFive')}</li>
                            </ul>
                        </section>
                    </section>
                    <section>
                        <h2 className={style.subtitle}>{i18n.t('How_use_personal_data')}</h2>
                        <p>{i18n.t('Privacy_section_fourOne')}</p>
                        <p>{i18n.t('Privacy_section_fourTwo')}</p>
                        <p>{i18n.t('Privacy_section_fourThree')}</p>
                    </section>
                    <section>
                        <h2 className={style.subtitle}>{i18n.t('With_whom_do')}</h2>
                        <p>{i18n.t('Privacy_section_five')}</p>
                    </section>
                    <section>
                        <h2 className={style.subtitle}>{i18n.t('Where_do_we_transfer')}</h2>
                        <p>{i18n.t('Privacy_section_six')}</p>
                    </section>
                    <section>
                        <h2 className={style.subtitle}>{i18n.t('Automated_decision')}</h2>
                        <p>{i18n.t('Privacy_section_seven')}</p>
                    </section>
                    <section>
                        <h2 className={style.subtitle}>{i18n.t('What_rights_do')}</h2>
                        <p>{i18n.t('Privacy_section_eight')}</p>
                        <section className={style.text__indent}>
                            <h3 className={style.kopOne}>{i18n.t('Privacy_section_eightOne')}</h3>
                            <p>{i18n.t('Privacy_section_eightOne_content')}</p>
                        </section>
                        <section className={style.text__indent}>
                            <h3 className={style.kopOne}>{i18n.t('Privacy_section_eightTwo')}</h3>
                            <p>{i18n.t('Privacy_section_eightTwo_content')}</p>
                        </section>
                        <section className={style.text__indent}>
                            <h3 className={style.kopOne}>{i18n.t('Privacy_section_eightThree')}</h3>
                            <p>{i18n.t('Privacy_section_eightThree_content')}</p>
                        </section>
                        <section className={style.text__indent}>
                            <h3 className={style.kopOne}>{i18n.t('Privacy_section_eightFour')}</h3>
                            <p>{i18n.t('Privacy_section_eightFour_content')}</p>
                        </section>
                        <section className={style.text__indent}>
                            <h3 className={style.kopOne}>{i18n.t('Privacy_section_eightFive')}</h3>
                            <p>{i18n.t('Privacy_section_eightFive_content')}</p>
                        </section>
                    </section>
                    <section>
                        <h2 className={style.subtitle}>{i18n.t('Exercising_your_rights')}</h2>
                        <p>{i18n.t('Privacy_section_nine')}</p>
                    </section>

                    <section className={style.subtitle__line}>
                        <h2 className={style.subtitle}>{i18n.t('Additional_info')}</h2>
                        <section>
                            <h3 className={style.kopOne}>{i18n.t('Legal_procedures')}</h3>
                            <p>{i18n.t('Legal_procedures_contentOne')}</p>
                            <p>{i18n.t('Legal_procedures_contentTwo')}</p>
                        </section>
                        <section>
                            <h3 className={style.kopOne}>{i18n.t('Security_measures')}</h3>
                            <p>{i18n.t('Security_measures_contentOne')}</p>
                            <p>{i18n.t('Security_measures_contentTwo')}</p>
                            <p>{i18n.t('Security_measures_contentThree')}</p>
                        </section>
                    </section>

                    <section className={style.subtitle__line}>
                        <h2 className={style.subtitle}>{i18n.t('Definitions_legal_framework')}</h2>
                        <section>
                            <h3 className={style.kopOne}>{i18n.t('Personal_data')}</h3>
                            <p>{i18n.t('Personal_data_content')}</p>
                        </section>
                        <section>
                            <h3 className={style.kopOne}>{i18n.t('Usage_data')}</h3>
                            <p>{i18n.t('Usage_data_content')}</p>
                        </section>
                        <section>
                            <h3 className={style.kopOne}>{i18n.t('User')}</h3>
                            <p>{i18n.t('User_content')}</p>
                        </section>
                        <section>
                            <h3 className={style.kopOne}>{i18n.t('Person_concerned')}</h3>
                            <p>{i18n.t('Person_concerned_content')}</p>
                        </section>
                        <section>
                            <h3 className={style.kopOne}>{i18n.t('Data_processor')}</h3>
                            <p>{i18n.t('Data_processor_content')}</p>
                        </section>
                        <section>
                            <h3 className={style.kopOne}>{i18n.t('Responsible_processing')}</h3>
                            <p>{i18n.t('Responsible_processing_content')}</p>
                        </section>
                        <section>
                            <h3 className={style.kopOne}>{i18n.t('This_application')}</h3>
                            <p>{i18n.t('This_application_content')}</p>
                        </section>
                        <section>
                            <h3 className={style.kopOne}>{i18n.t('Cookie')}</h3>
                            <p>{i18n.t('Cookie_content')}</p>
                        </section>
                        <section className={style.section__special}>
                            <h3 className={style.kopTwo}>{i18n.t('Legal_information')}</h3>
                            <p>{i18n.t('Legal_information_content')}</p>
                        </section>
                        <section className={style.section__special}>
                            <div>
                                <h3 className={style.kopTwo}>{i18n.t('Changes_privacy_policy')}</h3>
                                <p className={style.policy__date}>{i18n.t('Changes_privacy_policy_date')}</p>
                            </div>
                            <p>{i18n.t('Changes_privacy_policy_content')}</p>
                        </section>
                    </section>
                    
                </div>

            </section>


        </>
    );
};

export default Privacy;
