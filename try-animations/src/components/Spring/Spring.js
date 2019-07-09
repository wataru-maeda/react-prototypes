import React from 'react'
import { Spring, Trail, Transition, Keyframes, animated } from 'react-spring/renderprops'

export default ({
  type = '',
  items = [],
  config = {},
  from = {},
  enter = {},
  leave = {},
  update = {},
  to = {},
  trail = {},
  transitions = [],
  children,
}) => {
  // Spring
  if (type === 'spring') {
    return (
      <Spring
        config={config}
        from={from}
        to={to} 
      >
        {style => <animated.span style={style}>{children}</animated.span>}
      </Spring>
    )
  }

  // Trail
  if (type === 'trail') {
    const ItemsWithKey = items.map((x, i) => ({ item: x, key: i }))
    return (
      <Trail
        config={config}
        items={ItemsWithKey}
        keys={item => item.key}
        from={from}
        to={to}>
        {x => style => <animated.span style={style}>{children(x.item)}</animated.span>}
      </Trail>
    )
  }
  
  // Transition
  if (type === 'transition') {
    const ItemsWithKey = items.map((x, i) => ({ item: x, key: i }))
    return (
      <Transition
        config={config}
        items={ItemsWithKey}
        keys={item => item.key}
        from={from}
        enter={enter}
        leave={leave}
        update={update}
        trail={trail}>
        {x => style => <animated.span style={style}>{children(x.item)}</animated.span>}
      </Transition>
    )
  }

  // KeyFrame
  if (type === 'keyframes' || transitions.length > 0) {
    const KeySpring = Keyframes.Spring(transitions)
    return (
      <KeySpring
        config={config}
        trail={trail}
      >
        {style => <animated.span style={style}>{children}</animated.span>}
      </KeySpring>
    )
  }
  // None
  return children
}