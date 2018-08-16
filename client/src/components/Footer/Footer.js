import React from "react";
import logo from './logo.svg';
import "./Footer.css";
import { Image } from 'semantic-ui-react'


const Footer = () => (
    
    <footer className="footer text-center shadow">
    <span>A React App</span>
    <Image src={logo} className="App-logo" alt="logo" verticalAlign='middle' /> 
             <span> <a href="/teamPage">About The Team</a></span>
    </footer>

);

export default Footer;