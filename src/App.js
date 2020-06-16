import React, {Component} from 'react';
import {Route , Switch} from 'react-router-dom';
import SigIn from './components/SigIn'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {

  render() {
  return (
    <div>
    <Switch>
      <Route path="/" exact component ={SigIn}/>
      <Route path="/signup" component ={SignUp}/>
      <Route path="/home" component ={Dashboard}/>
      </Switch>
    </div>
  );
}
}

export default App;
