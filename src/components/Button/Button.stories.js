import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from './Button'

export default {
  title: 'Button',
  component: Button
}

export const button = () => (
  <Button onClick={action('Button Click')}>
    This is a button
  </Button>
)
