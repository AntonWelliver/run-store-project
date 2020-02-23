import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';

import RaceHandlerState from './context/raceHandler/RaceHandlerState';
import './App.css';

const App = () => {
  return (
    <RaceHandlerState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/shop' component={Shop} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </RaceHandlerState>
  );
}

export default App;
