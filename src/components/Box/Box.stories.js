import React from 'react'
import Box from './Box'

export default {
  title: 'Box',
  component: Box
}

export const box = () => (
  <Box p={2} border='1px solid' borderColor='primary' width={15}>
    This is a box.
  </Box>
)
