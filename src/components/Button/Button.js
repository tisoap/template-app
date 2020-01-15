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
  shadow
} from 'styled-system'

const Button = styled.button`
  background-color: black;
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5em;
  margin-bottom: 0;
  padding: 6px 12px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;

  ${space}
  ${color}
  ${layout}
  ${typography}
  ${flexbox}
  ${border}
  ${background}
  ${position}
  ${shadow}
`

export default Button
