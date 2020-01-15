import React from 'react'
import { render } from '@testing-library/react'
import Anchor from './Anchor'

describe('Anchor', () => {
  test('Renders child text', () => {
    const text = 'My Text'

    const { getByText } = render(
      <Anchor>{text}</Anchor>
    )

    expect(getByText(text)).toBeInTheDocument()
  })
})
