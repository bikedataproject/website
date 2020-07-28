import React, {useState} from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

//import './accordion.css';
import './accordion2.css';

import style from './Faq.module.css';
import Footer from '../../components/Footer/Footer';
import i18n from "../../utils/i18n";

const Contact = () => {

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
      <div className={`${style.faq} ${style.grid} ${style.content}`}>
        <p className={style.bigLetter}>{i18n.t('Faq')}</p>
        <section className={style.header}>
          <div className={style.header__wrapper}>
            <h1 className={style.header__title}>{i18n.t('Faq_title')}</h1>
          </div>
        </section>

        <div className={`${style.questions__wrapper} ${style.grid}`}>
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  {i18n.t('Question_one_title')}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{i18n.t('Question_one_answer')}</p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  {i18n.t('Question_two_title')}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{i18n.t('Question_two_answer')}</p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  {i18n.t('Question_three_title')}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{i18n.t('Question_three_answer')}</p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  {i18n.t('Question_four_title')}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{i18n.t('Question_four_answer')}</p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  {i18n.t('Question_five_title')}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{i18n.t('Question_five_answer')}</p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  {i18n.t('Question_six_title')}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{i18n.t('Question_six_answer')}</p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Footer onSelectFlag={(selectedFlag) => onSelectFlag(selectedFlag)} />
    </>
  );
};

export default Contact;
