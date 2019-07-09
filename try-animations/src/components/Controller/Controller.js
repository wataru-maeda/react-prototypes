import React, { Component } from 'react'
import { colors } from '../../styles/theme'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  btnAdd: {
    background: colors.blue,
    color: 'white',
  },
  btnDel: {
    background: colors.clearBlue,
    marginLeft: 10,
  },
}

export default ({
  onClickAdd = () => {},
  onClickDel = () => {},
}) => (
  <div style={styles.root}>
    <button
      className="btn btn-light"
      style={styles.btnAdd}
      onClick={onClickAdd}
    >
      Add
    </button>
    <button
      className="btn btn-light"
      style={styles.btnDel}
      onClick={onClickDel}
    >
      Delete
    </button>
  </div>
)