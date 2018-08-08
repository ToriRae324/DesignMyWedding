import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContainerFluid from './components/Landing';
import Venue from "./components/Venue"

class App extends Component {
  render() {
    return (
      <div>
      <ContainerFluid>
      </ContainerFluid>
      <Venue/>
      </div>
    );
  }
}

export default App;
