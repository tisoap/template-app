import React from 'react'
import { render } from '@testing-library/react'
import Box from './Box'

describe('Box', () => {
  test('Renders child text', () => {
    const text = 'My Text'

    const { getByText } = render(
      <Box>{text}</Box>
    )

    expect(getByText(text)).toBeInTheDocument()
  })
})
