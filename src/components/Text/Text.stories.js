import React from 'react'
import Text from './Text'

export default {
  title: 'Text',
  component: Text
}

export const paragraph = () => (
  <Text m={0}>This is a paragraph text.</Text>
)

export const span = () => (
  <Text as='span' fontWeight='bold' m={0}>This is a bold span text.</Text>
)
