import React, { Component } from 'react';
import './Home.css';
import css from './Home.css';
import Header from './Header';

export default class Home extends Component {
  render() {
    return (
      <div className={css.container}>
        <Header />
        <div className="left">
          Left Left Left Left Left Left Left Left Left Left Left Left Left Left Left Left Left Left Left Left Left
          Left Left Left Left Left Left Left Left Left Left Left Left Left Left Left Left Left Left Left Left Left
          Left Left Left Left Left Left Left Left Left Left Left Left Left Left Left Left Left Left Left Left Left
        </div>
        <div className="center">
          Center Center Center Center Center Center Center Center Center Center Center Center Center Center Center
          Center Center Center Center Center Center Center Center Center Center Center Center Center Center Center
          Center Center Center Center Center Center Center Center Center Center Center Center Center Center Center
        </div>
        <div className="right">
          Right Right Right Right Right Right Right Right Right Right Right Right Right Right Right Right Right Right
          Right Right Right Right Right Right Right Right Right Right Right Right Right Right Right Right Right Right
          Right Right Right Right Right Right Right Right Right Right Right Right Right Right Right Right Right Right
        </div>
      </div>
    );
  }
}