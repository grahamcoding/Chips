import Main from './components/MainComponent'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';

//Main component of the app. Imports the relevant CSS files and applies the the app from here.
//React-router was implemented but did not end up being used in the shipping build but left in for expandibility.

class App extends Component {
  render() {
      return (
          <BrowserRouter>
              <div className="App">
                  <Main />
              </div>
          </BrowserRouter>
      );
  };
}

export default App;