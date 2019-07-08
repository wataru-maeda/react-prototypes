import React, { Component } from 'react'
// import Animation from '../Animation'
import { Spring } from 'react-spring/renderprops'
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
    height: 80,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '0 0 0 10px',
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
}

export default class ListItem extends Component {
  render() {
    const { delay = 0 } = this.props
    return (
      <Spring
        config={{
          delay,
          duration: 250,
        }}
        from={{
          opacity: 0,
          transform: 'translate3d(0, 20px, 0) scale(0.9)'
        }}
        to={{
          opacity: 1,
          transform: 'translate3d(0, 0 ,0) scale(1)'
        }}>
        {style => (
          <div style={{ ...styles.root, ...style}}>
            <div style={styles.profile} />
            <div style={styles.container}>
              <div style={styles.title} />
              <div style={styles.desc} />
              <div style={styles.desc} />
              <div style={styles.desc} />
            </div>
          </div>
        )}
      </Spring>
    )
  }
}
