import React from 'react'
import { render } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  test('Renders child text', () => {
    const text = 'My Text'

    const { getByText } = render(
      <Card>{text}</Card>
    )

    expect(getByText(text)).toBeInTheDocument()
  })
})
