
import React from 'react'
import withRebass from './withRebass'

/** Arrow for use in dropdowns and other UI elements */

const Arrow = ({
  direction,
  children,
  theme,
  sx,
  ...props
}) => {
  const style = {
    display: 'inline-block',
    width: 0,
    height: 0,
    marginLeft: '.5em',
    verticalAlign: 'middle',
    borderRight: '.3125em solid transparent',
    borderLeft: '.3125em solid transparent',
    borderTop: direction === 'down' ? '.4375em solid' : null,
    borderBottom: direction === 'up' ? '.4375em solid' : null,
    pointerEvents: 'none',
  }

  return (
    <div
      {...props}
      {...sx(style)}
    />
  )
}

Arrow.propTypes = {
  /** Direction of arrow */
  direction: React.PropTypes.oneOf(['up', 'down'])
}

Arrow.defaultProps = {
  direction: 'down'
}

Arrow._name = 'Arrow'

export default withRebass(Arrow)

