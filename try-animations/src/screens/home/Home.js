import React, { Component } from 'react'
import Header from '../../components/Header'
import Controller from '../../components/Controller'
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
  state = {
    items: []
  }

  onClickAdd = () => {
    const { items } = this.state
    items.push('')
    this.setState({ items })
  }

  onClickDel = () => {
    const { items } = this.state
    if (items.length > 0) {
      items.pop()
      this.setState({ items })
    }
  }

  render() {
    const { items } = this.state
    return (
      <div style={styles.root}>
        <Header />
        <Controller
          onClickAdd={this.onClickAdd}
          onClickDel={this.onClickDel}
        />
        <List items={items}/>
      </div>
    );
  }
}
