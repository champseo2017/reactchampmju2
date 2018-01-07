import React, { Component } from 'react';

import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Main from './Main';
import Home from './Home';
import Click from './Click';



class App extends Component {
  render() {
    return (
      <BrowserRouter>


          <Main>
           <Route exact path="/" component={Home} />
            <Route path="/click" component={Click} />
          </Main>



      </BrowserRouter>
    );
  }
}

export default App;
