
import React from 'react'
import withRebass from './withRebass'
import Heading from './Heading'
import Input from './Input'
import Checkbox from './Checkbox'
import Button from './Button'

const SignInForm = ({
  heading = 'Sign In',
  username = '',
  password = '',
  remember = false,
  onChange = () => {},
  errors = {},
  theme,
  sx,
  ...props
}) => {
  // To do: Or Create an Account...
  return (
    <form {...props}>
      {heading && <Heading mb={2} children={heading} />}
      <Input
        name='username'
        label='Username'
        value={username}
        onChange={onChange}
        message={errors.username}
      />
      <Input
        type='password'
        name='password'
        label='Password'
        value={password}
        onChange={onChange}
        message={errors.password}
      />
      <Checkbox
        name='remember'
        label='Remember me on this device'
        mb={2}
        checked={remember}
        onClick={onChange}
      />
      <Button children='Sign In' />
      <a href='#'>Forgot password?</a>
    </form>
  )
}

SignInForm._name = 'SignInForm'

export default withRebass(SignInForm)

