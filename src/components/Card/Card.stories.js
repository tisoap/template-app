import React from 'react'
import Card from './Card'

export default {
  title: 'Card',
  component: Card
}

export const card = () => (
  <Card width={15}>
    This is a card.
  </Card>
)
