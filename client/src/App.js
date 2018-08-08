import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContainerFluid from './components/Landing';
import Venue from "./components/Venue"
import Dress from "./components/Dress"
import Browse from "./pages/Browse"
import MyStuff from "./pages/MyStuff"

class App extends Component {
  render() {
    return (
      <div>
        {/* Header goes here */}


      <MyStuff/>
      <Browse />
      </div>
    );
  }
}

export default App;
