import React from 'react'
import { render } from '@testing-library/react'
import Blockquote from './Blockquote'

describe('Blockquote', () => {
  test('Renders child text', () => {
    const text = 'My Text'

    const { getByText } = render(
      <Blockquote>{text}</Blockquote>
    )

    expect(getByText(text)).toBeInTheDocument()
  })
})
