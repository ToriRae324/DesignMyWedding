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
      </ContainerFluid>
      <Dress />
      </div>
    );
  }
}

export default App;
