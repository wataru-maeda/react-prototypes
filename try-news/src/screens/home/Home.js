import React, { Component } from 'react';
import axios from 'axios';
import logo from '../../assets/images/logo.svg';
import './Home.css';
import { apiKey } from '../../common/auth';

export default class Home extends Component {
  componentWillMount() {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`).then(res => {
      console.log(res)
    })
  }

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
