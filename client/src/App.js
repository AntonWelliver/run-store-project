import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Sidebar from './components/layout/Sidebar';

import SidebarState from './context/sidebar/SidebarState';
import RaceHandlerState from './context/raceHandler/RaceHandlerState';
import './App.css';

const App = () => {
  return (
    <RaceHandlerState>
      <SidebarState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Sidebar />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/shop' component={Shop} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </SidebarState>
    </RaceHandlerState>
  );
}

export default App;
