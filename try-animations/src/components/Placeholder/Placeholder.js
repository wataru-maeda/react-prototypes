import React from 'react'
import { colors } from '../../styles/theme'
import { Spring, anim } from '../Spring'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    background: colors.clearBlue,
    borderRadius: 10,
    marginTop: 50,
    padding: 30,
  }
}

export default () => (
  <Spring {...anim.popup}>
    <div style={styles.root}>
      <h3>Please add item</h3>
    </div>
  </Spring>
)