import React, { Component } from 'react'
import { Spring, anim } from '../Spring'
import ListItem from '../ListItem'

const styles = {
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  }
}

export default class List extends Component {
  state = {
    anmType: 'popup'
  }

  render() {
    const { items = [] } = this.props
    return (
      <div style={styles.root}>
        <Spring
          config={{ duration: 250 }}
          {...anim.list}
          items={items}
          >{() => (
            <ListItem onClick={() => this.setState({ anmType: 'popup' })} />
          )}
        </Spring>
      </div>
    )
  }
}
