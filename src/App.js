import './App.css';
import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import About from './component/About'
import Contact from './component/Contact'
import Demo from './component/Demo'
import User from './component/User'
import Details from './component/Details'
import Info from './component/Info'
import Login from './component/Login'
import Signup from './component/Signup'
import Help from './component/Help'
import Pagenotfound from './component/Pagenotfound';
import Home from './component/Home';

function App() {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/demo' component={Demo} />
        <Route path='/user' component={User} />
        <Route path='/details' component={Details} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/info' component={Info} />
        <Route path='/help' component={Help} />
        <Route component={Pagenotfound} />
      </Switch>
    </>
  );
}

export default App;
