import React, { Component } from 'react'
import ReactTransitionGroup from './ReactTransitionGroup'
import { images } from '../../assets'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: 50,
  }
}

// https://github.com/aholachek/react-animation-comparison

export default class App extends Component {
  render() {
    return (
      <div style={styles.root}>
        <h1>React Animation Demos</h1>
        <ReactTransitionGroup />
      </div>
    );
  }
}
