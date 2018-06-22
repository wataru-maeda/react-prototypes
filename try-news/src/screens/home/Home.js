import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import './Home.css';

export default class Home extends Component {  
  render() {
    return (
      <div className="container">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">Sample News App</h1>
        </header>
        <p className="intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
