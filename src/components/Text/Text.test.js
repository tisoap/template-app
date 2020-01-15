import React from 'react'
import { render } from '@testing-library/react'
import Text from './Text'

describe('Text', () => {
  test('Renders child text', () => {
    const text = 'My Text'

    const { getByText } = render(
      <Text>{text}</Text>
    )

    expect(getByText(text)).toBeInTheDocument()
  })
})
