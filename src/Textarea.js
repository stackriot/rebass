
import React from 'react'
import withRebass from './withRebass'
import Label from './Label'
import Text from './Text'

/**
 * Textarea form element with label
 */

const Textarea = ({
  label,
  name,
  message,
  hideLabel,
  horizontal,
  baseRef,
  children,
  theme,
  sx,
  ...props
}) => {
  const { scale, colors, borderColor, borderRadius } = theme

  const invalid = props['aria-invalid'] || props.invalid

  const style = {
    root: {
      display: horizontal ? 'flex' : null,
      alignItems: horizontal ? 'baseline' : null,
      marginBottom: scale[2],
      color: invalid ? colors.error : null,
    },
    label: {
      minWidth: horizontal ? 96 : null,
      paddingRight: horizontal ? scale[1] : null,
    },
    textarea: {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      boxSizing: 'border-box',
      display: 'block',
      flex: horizontal ? '1 1 auto' : null,
      width: '100%',
      padding: scale[1],
      color: color || 'inherit',
      backgroundColor: backgroundColor || colors.lighten,
      borderWidth: 1,
      borderStyles: 'solid',
      borderColor,
      borderRadius,
      boxShadow: 'none',
      WebkitAppearance: 'none',
      appearance: 'none',
    },
    message: {
      paddingLeft: horizontal ? scale[1] : null,
    }
  }

  return (
    <div {...sx(styles.root)}>
      <Label
        {...sx(styles.label)}
        htmlFor={name}
        hide={hideLabel}
        children={label} />
      <textarea
        {...props}
        {...sx(styles.textarea)}
        ref={baseRef}
        name={name}
      />
      {message && (
        <Text
          small
          {...sx(styles.message)}
          children={message}
        />
      )}
    </div>
  )
}

Textarea.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired,
  /** Adds a helper or error message below the textarea */
  message: React.PropTypes.string,
  /** Hides the form element label */
  hideLabel: React.PropTypes.bool,
  /** Displays label to the left */
  horizontal: React.PropTypes.bool,
  /** Adds a ref to the textarea element */
  baseRef: React.PropTypes.func
}

Textarea._name = 'Textarea'

export default withRebass(Textarea)

