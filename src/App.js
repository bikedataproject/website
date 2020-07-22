import React from 'react';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';

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
            <NavBar />
        </div>
      </>
    );
}

export default App;
