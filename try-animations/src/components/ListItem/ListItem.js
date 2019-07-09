import React, { Component } from 'react'
import { Spring, anim } from '../Spring'
import { colors } from '../../styles/theme'

const styles = {
  root: {
    display: 'flex',
    background: colors.clearBlue,
    padding: 20,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  containerTitle: {
    flex: 1,
    height: 80,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '0 0 0 10px',
  },
  containerDetails: {
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '20px 0 0 10px',
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 10,
    background: colors.blue,
  },
  title: {
    width: '100%',
    height: 20,
    borderRadius: 5,
    background: colors.lightBlue,
  },
  desc: {
    width: '100%',
    height: 8,
    borderRadius: 5,
    background: 'white',
  },
  detail: {
    width: '100%',
    height: 5,
    borderRadius: 5,
    background: 'white',
    opacity: 0.8,
  },
  btn: {
    background: 'transparent',
    border: 'none',
    textAlign: 'right',
    marinTop: 10,
  }
}

const type = {
  created: 'CREATED',
  opened: 'OPENED',
  closed: 'CLOSED'
}

export default class ListItem extends Component {
  state = {
    status: type.created,
  }

  onClick = () => {
    const { status } = this.state
    const { onClick = () => {} } = this.props
    this.setState({
      status: status === type.opened ? type.closed : type.opened
    }, onClick)
  }

  render() {
    const { status } = this.state

    // animation
    let profAnm = {}
    if (status === type.opened) {
      profAnm = anim.expand
    } else if (status === type.closed) {
      profAnm = anim.shrink
    }

    return (
      <div style={styles.root} onClick={this.onClick}>
        <Spring {...profAnm}>
          <div style={styles.profile} />
        </Spring>
        <div style={styles.containerTitle}>
          <div style={styles.title} />
          <div style={styles.desc} />
          <div style={styles.desc} />
          <div style={styles.desc} />
        </div>
      </div>
    )
  }
}
