
import { config } from 'react-spring/renderprops'
import { colors } from '../../styles/theme'

const popup = {
  type: 'spring',
  config: {
    duration: 250,
  },
  from: {
    opacity: 0,
    transform: 'translate3d(0, -40px, 0)'
  },
  to: {
    opacity: 1,
    transform: 'translate3d(0, 0 ,0)'
  }
}

const list = {
  type: 'transition',
  config: {
    duration: 150,
  },
  from: {
    opacity: 0,
    transform: 'translate3d(0, 20px, 0) scale(0.9)'
  },
  enter: {
    opacity: 1,
    transform: 'translate3d(0, 0 ,0) scale(1)',
  },
  leave: {
    opacity: 0,
    transform: 'translate3d(0, -20px, 0) scale(0.9)'
  },
  update: {

  },
  trail: 100
}

const trailChars  = {
  type: 'transition',
  config: config.wobbly,
  from: {
    opacity: 0,
    transform: 'translate3d(0, -40px, 0)'
  },
  enter: {
    opacity: 1,
    transform: 'translate3d(0,0px,0)'
  },
  leave: {
    opacity: 1,
    transform: 'translate3d(0,-40px,0)'
  },
  trail: 30,
}

const expand = {
  type: 'spring',
  from: {
    width: 80,
    height: 80,
    borderRadius: 10,
    background: colors.blue,
  },
  to: {
    width: 300,
    height: 300,
    background: colors.blue,
  }
}

const shrink = {
  type: 'spring',
  from: {
    width: 300,
    height: 300,
    background: colors.blue,
  },
  to: {
    width: 80,
    height: 80,
    borderRadius: 10,
    background: colors.blue,
  }
}

export default {
  popup,
  list,
  trailChars,
  expand,
  shrink,
}