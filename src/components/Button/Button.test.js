import React from 'react'
import { fireEvent, act, render } from '@testing-library/react'
import { spy } from 'sinon'
import Button from './Button'

describe('Button', () => {
  test('Renders child text', () => {
    const buttonText = 'My Button'

    const { getByText } = render(
      <Button>
        {buttonText}
      </Button>
    )

    expect(getByText(buttonText)).toBeInTheDocument()
  })

  test('Calls onClick function on click event', async () => {
    const buttonText = 'My Button'
    const onClick = spy()

    const { getByText } = render(
      <Button onClick={onClick}>
        {buttonText}
      </Button>
    )

    await act(async () => fireEvent.click(getByText(buttonText)))
    expect(onClick.calledOnce).toBe(true)
  })
})
