import React, { Component } from 'react'
import Header from '../../components/Header'
import List from '../../components/List'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: 50,
  },
}

export default class Home extends Component {
  render() {
    return (
      <div style={styles.root}>
        <Header />
        <List numberOfItems={10}/>
      </div>
    );
  }
}
