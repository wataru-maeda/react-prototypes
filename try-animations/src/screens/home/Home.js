import React, { Component } from 'react'
import { images } from '../../assets'

const styles = {
  root: {
    display: 'flex',
    flex: 1,
    padding: 50,
  }
}

export default class App extends Component {
  render() {
    return (
      <div style={styles.root}>
        <h1>React Animation Demos</h1>
      </div>
    );
  }
}
