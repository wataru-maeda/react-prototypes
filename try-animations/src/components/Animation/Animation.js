import React from 'react'
import { Spring, Trail, Transition, Keyframes } from 'react-spring/renderprops'

export default ({
  type = 'spring',
  props = {},
  children,
}) => {
  // if (type === 'spring') {
  //   return (
  //     <Spring {...props} >
  //       {style => (
  //         <span style={style}>
  //           {children}
  //         </span>
  //       )}
  //     </Spring>
  //   )
  // } else if (type === 'trail') {
    
  // }

  console.log()

  return (
    <Spring {...props} >
      {style => (
        <span style={style}>
          {children}
        </span>
      )}
    </Spring>
  )
}