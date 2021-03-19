import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Rides from './components/Destination/Destination';
import React, { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {

  const [loggedUser, setLoggedUser] = useState({});

  console.log(loggedUser);
  return (
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
      <Router>
        <CssBaseline />
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/destination/:ridesType">
            <Rides />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
