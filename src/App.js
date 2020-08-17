import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import classes from'./App.css';
import Home from './containers/Home/Home'
import About from './containers/About/About';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className= {classes.App}>
          <Route path='/' exact component = {Home}/>
          <Route path = '/about' exact component = {About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
