import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

//component import
import NavBar from '../../components/NavBar/NavBar';

//page import
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Route exact path='/login' render={() =>
          <LoginPage/>
        } />
        <Route exact path='/signup' render={() =>
          <SignupPage/>
        } />
      </div>
    );
  }
}

export default App;
