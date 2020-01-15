import React from 'react'
import { render } from '@testing-library/react'
import Image from './Image'

describe('Image', () => {
  test('Renders alt text', () => {
    const text = 'My Text'

    const { getByAltText } = render(
      <Image alt={text} />
    )

    expect(getByAltText(text)).toBeInTheDocument()
  })
})
