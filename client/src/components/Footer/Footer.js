import React from "react";
import logo from './logo.svg';
import "./Footer.css";

const Footer = () => (
    
    <footer className="footer text-center shadow">
    <h3>
        <img src={logo} className="App-logo" alt="logo" /> 
        A React App         
    </h3>
    <a href="/teamPage">About Us</a>
    </footer>

);

export default Footer;