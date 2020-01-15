import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import Input from './Input'

describe('Input', () => {
  test('Renders value', () => {
    const value = 'My Text'

    const { getByDisplayValue } = render(
      <Input value={value} onChange={() => {}} />
    )

    expect(getByDisplayValue(value)).toBeInTheDocument()
  })

  test('Changes value', async () => {
    const value = 'My Text'

    const { getByTestId, getByDisplayValue } = render(
      <Input data-testid='id' />
    )

    const input = await getByTestId('id')
    await act(async () => fireEvent.change(input, { target: { value } }))

    expect(getByDisplayValue(value)).toBeInTheDocument()
  })
})
