import React, { Component } from 'react'
import ListItem from '../ListItem'

const styles = {
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  }
}

export default class List extends Component {
  renderItems = () => {
    const { numberOfItems = 0 } = this.props
    const items = [];
    for (let i = 0; i <= numberOfItems; i++)
      items.push(<ListItem key={i} />)
    return items

  }
  render() {
    return (
      <div style={styles.root}>
        {this.renderItems()}
      </div>
    )
  }
}
