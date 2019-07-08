import React, { Component } from 'react'
import { colors } from '../../styles/theme'

const styles = {
  root: {
    flex: 1,
    display: 'flex',
    padding: 20,
    marginBottom: 10,
  },
  title: {
    color: colors.blue,
  }
}

export default class Header extends Component {
  render() {
    return (
      <div style={styles.root}>
        <h1 style={styles.title}>React Animation Demo</h1>
      </div>
    )
  }
}
