import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="head">
          Header Header Header Header Header Header Header Header Header Header Header Header Header Header Header
          Header Header Header Header Header Header Header Header Header Header Header Header Header Header Header
          Header Header Header Header Header Header Header Header Header Header Header Header Header Header Header
          </div>
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
