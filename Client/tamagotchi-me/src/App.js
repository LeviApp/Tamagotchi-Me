import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage'
import TamagotchiMe from './Components/TamagotchiMe'
import Login from './Components/Login';
import Register from './Components/Register';
import Edit from './Components/Edit';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/tamagotchime" component={TamagotchiMe} />
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/edit" component={Edit} />
      </div>
    );
  }
}
export default App;