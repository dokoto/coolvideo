import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Dashboard from './containers/Dashboard';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className='Wrapper'>
            {/* TODO: must add some security control here */}
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/users/sign_up' component={SignUp} />
              <Route path='/' component={Dashboard} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
