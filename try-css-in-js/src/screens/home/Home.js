import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-header">
          Header Header Header Header Header Header Header Header
          Header Header Header Header Header Header Header Header
          Header Header Header Header Header Header Header Header
        </div>
        <span className="home-left-menu">
          Left Menu Left Menu Left Menu Left Menu Left Menu Left Menu
          Left Menu Left Menu Left Menu Left Menu Left Menu Left Menu
          Left Menu Left Menu Left Menu Left Menu Left Menu Left Menu
          Left Menu Left Menu Left Menu Left Menu Left Menu Left Menu
        </span>
        <span className="home-contents">
          Constens Constens Constens Constens Constens Constens Constens
          Constens Constens Constens Constens Constens Constens Constens
          Constens Constens Constens Constens Constens Constens Constens
          Constens Constens Constens Constens Constens Constens Constens
        </span>
        <span className="home-right-menu">
          Right Menu Right Menu Right Menu Right Menu Right Menu Right Menu
          Right Menu Right Menu Right Menu Right Menu Right Menu Right Menu
          Right Menu Right Menu Right Menu Right Menu Right Menu Right Menu
        </span>
      </div>
    );
  }
}
