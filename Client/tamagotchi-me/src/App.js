import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TamagotchiMe from './components/TamagotchiMe'
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Route exact path="/" component={TamagotchiMe} />
        <Route exact path='/login' component={Login} />
        <Route path="/register" component={Register} />
      </div>
    );
  }
}
export default App;