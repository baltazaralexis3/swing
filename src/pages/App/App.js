import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

//component import
import NavBar from '../../components/NavBar/NavBar';
import EntryForm from '../../components/EntryForm/EntryForm';

//page import
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import WelcomePage from '../WelcomePage/WelcomePage';

import userService from '../../utils/userService';


class App extends Component {

  constructor() {
    super();
    this.state = {...this.getInitialState()};
  }

  getInitialState() {
    return {
      user: null
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path='/' render={() =>
            <WelcomePage/>
          } />
        </Switch>
        <Switch>
          <Route exact path='/moods' render={() =>
            <EntryForm/>
          } />
        </Switch>
        
        <Switch>
        <Route exact path='/login' render={() =>
          <LoginPage/>
        } />
        </Switch>

        <Switch>
        <Route exact path='/signup' render={({history}) =>
          <SignupPage
            history = {history}
            user={this.state.user}
          />
        } />
        </Switch>

        
      </div>
    );
  }
}

export default App;
