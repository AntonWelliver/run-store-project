import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Races from './components/pages/Races';
import Sidebar from './components/layout/Sidebar';
import AdminRacePreperation from './components/pages/AdminRacePreperation';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';

import SidebarState from './context/sidebar/SidebarState';
import RaceHandlerState from './context/raceHandler/RaceHandlerState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  return (
    <AuthState>
      <RaceHandlerState>
        <AlertState>
          <SidebarState>
            <Router>
              <Fragment>
                <Navbar />
                <div className="container">
                  <Sidebar />
                  <Alerts />
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/shop' component={Shop} />
                    <Route exact path='/races' component={Races} />
                    <Route exact path='/admin-race-preperation' component={AdminRacePreperation} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
                  </Switch>
                </div>
              </Fragment>
            </Router>
          </SidebarState>
        </AlertState>
      </RaceHandlerState>
    </AuthState>
  );
}

export default App;
