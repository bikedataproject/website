import React from 'react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

import { Switch, Route } from 'react-router-dom';
import { ROUTES } from './const/index';
import style from "./App.module.css";

function App() {
    return (
      <>
        <div className={style.content}>
          <Switch>
            <Route>
              <Home path={ROUTES.home} />
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
