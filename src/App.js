import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Cookies from './views/Policies/Cookies';
import Privacy from './views/Policies/Privacy';
import Terms from './views/Policies/Terms';
import DataMap from './views/DataMap/DataMap';
import Faq from './views/Faq/Faq';
import ThanksFitbit from './views/Thanks/ThanksFitbit';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import i18n from './utils/i18n'
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from './const/index';
import style from "./App.module.css";

function App() {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  let history = useHistory();

    useEffect(() => {
      history.listen((location, action) => {
        window.scrollTo(0, 0);
      });
    })

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
      <div className={style.global__wrapper}>
        <div className={style.content}>
          <Switch>
            <Route path={ROUTES.thanksfitbit}>
              <ThanksFitbit />
            </Route>
            <Route path={ROUTES.datamap}>
              <DataMap />
            </Route>
            <Route path={ROUTES.about}>
              <About />
            </Route>
            <Route path={ROUTES.faq}>
              <Faq />
            </Route>
            <Route path={ROUTES.contact}>
              <Contact />
            </Route>
            <Route path={ROUTES.cookies}>
              <Cookies />
            </Route>
            <Route path={ROUTES.privacy}>
              <Privacy />
            </Route>
            <Route path={ROUTES.termsofuse}>
              <Terms />
            </Route>
            <Route path={ROUTES.home}>
              <Home />
            </Route>
            <Route>
              <p>Not found</p>
            </Route>
          </Switch>
        </div>

        <div className={style.nav}>
          <Header />
        </div>
        <Footer onSelectFlag={(selectedFlag) => onSelectFlag(selectedFlag)} />
      </div>
    );
}

export default App;
