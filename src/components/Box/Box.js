import styled from '@emotion/styled'

import {
  space,
  color,
  layout,
  typography,
  flexbox,
  border,
  background,
  position,
  grid,
  shadow
} from 'styled-system'

import { cursor } from 'utils/styleProps'

const Box = styled.div`
  ${space}
  ${color}
  ${layout}
  ${typography}
  ${flexbox}
  ${border}
  ${background}
  ${position}
  ${grid}
  ${shadow}
  ${cursor}
`

export default Box
