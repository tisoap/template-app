import React from 'react'
import Blockquote from './Blockquote'

export default {
  title: 'Blockquote',
  component: Blockquote
}

export const blockquote = () => (
  <Blockquote fontSize={5}>This is a fancy quote.</Blockquote>
)
