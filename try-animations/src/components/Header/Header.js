import React, { Component } from 'react'
import { Spring, anim } from '../Spring'
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

export default () => (
  <div style={styles.root}>
    <Spring
      items={[
        'r',
        'e',
        'a',
        'c',
        't',
        '-',
        'a',
        'n',
        'i',
        'm',
        'a',
        't',
        'i',
        'o',
        'n',
        '-',
        'd',
        'e',
        'm',
        'o',
      ]}
      {...anim.trailChars}
    >
      {item => <h1 style={styles.title}>{item}</h1>}
    </Spring>
  </div>
)