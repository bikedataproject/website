import React from 'react';
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import DataMap from './views/DataMap/DataMap';
import Header from './components/Header/Header';

import { Switch, Route } from 'react-router-dom';
import { ROUTES } from './const/index';
import style from "./App.module.css";

function App() {
    return (
      <>
        <div className={style.content}>
          <Switch>
            <Route path={ROUTES.datamap}>
              <DataMap />
            </Route>
            <Route path={ROUTES.about}>
              <About />
            </Route>
            <Route path={ROUTES.contact}>
              <Contact />
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
      </>
    );
}

export default App;
