import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContainerFluid from './components/Container';
import Dress from "./components/Dress"

class App extends Component {
  render() {
    return (
      <div>
      <ContainerFluid>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      </ContainerFluid>
      <Dress />
      </div>
    );
  }
}

export default App;
