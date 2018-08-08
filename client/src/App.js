import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContainerFluid from './components/Landing';
import Venue from "./components/Venue"
import Dress from "./components/Dress"

class App extends Component {
  render() {
    return (
      <div>
      <ContainerFluid>
      </ContainerFluid>
      <Venue/>
      <Dress />
      </div>
    );
  }
}

export default App;
