import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Agent from './components/Agent';
import ContactUs from './components/ContactUs';
import Help from './components/Help';
import Insurance from './components/Insurance';
import Features from './components/Features';
import Investments from './components/Investments';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/agent" component={Agent}/>
          <Route exact path="/contactUs" component={ContactUs}/>
          <Route exact path="/help" component={Help}/>
          <Route exact path="/insurance" component={Insurance}/>
          <Route exact path="/features" component={Features}/>
          <Route exact path="/investments" component={Investments}/>
          <Route exact path="/call" component={Modal}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
