import styled from '@emotion/styled'

import {
  space,
  color,
  layout,
  typography,
  position
} from 'styled-system'

import { cursor } from 'utils/styleProps'

const Text = styled.p`
  line-height: 1.6em;
  overflow: auto;

  ${space}
  ${color}
  ${layout}
  ${typography}
  ${position}
  ${cursor}
`

export default Text
