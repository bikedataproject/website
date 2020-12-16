import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

//import './accordion.css';
import './accordion.css';

import style from './Faq.module.css';
import i18n from "../../utils/i18n";

const Contact = () => {

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
                <p>{i18n.t('Question_one_answerOne')}</p>
                <p>{i18n.t('Question_one_answerTwo')}</p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  {i18n.t('Question_two_title')}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{i18n.t('Question_two_answerOne')}</p>
                <p>{i18n.t('Question_two_answerTwo')}</p>
                <p>{i18n.t('Question_two_answerThree')}</p>
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
                <p>{i18n.t('Question_four_answerOne')}</p>
                <p>{i18n.t('Question_four_answerTwo')}</p>
                <ul>
                  <li>{i18n.t('Question_four_answerThree')}</li>
                  <li>{i18n.t('Question_four_answerFour')}</li>
                  <li>{i18n.t('Question_four_answerFive')}</li>
                  <li>{i18n.t('Question_four_answerSix')}</li>
                </ul>
                <p>{i18n.t('Question_four_answerSeven')}</p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  {i18n.t('Question_five_title')}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{i18n.t('Question_five_answerOne')}</p>
                <p>{i18n.t('Question_five_answerTwo')}</p>
                <p>{i18n.t('Question_five_answerThree')}</p>
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
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  {i18n.t('Question_seven_title')}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{i18n.t('Question_seven_answer')}</p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  {i18n.t('Question_eight_title')}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{i18n.t('Question_eight_answerOne')}</p>
                <p>{i18n.t('Question_eight_answerTwo')}</p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  {i18n.t('Question_nine_title')}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{i18n.t('Question_nine_answer')}</p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Contact;
