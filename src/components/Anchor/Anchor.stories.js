import React from 'react'
import Anchor from './Anchor'

export default {
  title: 'Anchor',
  component: Anchor
}

export const anchor = () => (
  <Anchor
    href='#'
    onClick={event => event.preventDefault()}
  >
    This is an anchor link.
  </Anchor>
)

export const decoratedAnchor = () => (
  <Anchor
    href='#'
    onClick={event => event.preventDefault()}
    decorated
  >
    This is a decorated anchor link.
  </Anchor>
)
