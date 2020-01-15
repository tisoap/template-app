import styled from '@emotion/styled'

import {
  space,
  color,
  layout,
  flexbox,
  typography,
  border,
  background,
  position
} from 'styled-system'

const Input = styled.input`
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  padding: 10px;
  font-size: 16px;

  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${typography}
  ${border}
  ${background}
  ${position}
`

export default Input
