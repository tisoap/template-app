import React from 'react'
import Input from './Input'
import { Text } from 'components'

export default {
  title: 'Input',
  component: Input
}

export const input = () => (
  <>
    <Text as='label' for='test'>Test Input:</Text>
    <Input id='test' />
  </>
)

export const textInput = () => (
  <>
    <Text as='label' for='test'>Fixed name input:</Text>
    <Input id='test' type='text' name='name' value='text input' />
  </>
)

export const passwordInput = () => (
  <>
    <Text as='label' for='test'>Fixed password input:</Text>
    <Input id='test' type='password' name='name' value='password' />
  </>
)
