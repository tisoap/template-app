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

const Card = styled.div`
  padding: 22px;
  border-radius: 4px;
  display: inline-block;
  width: 100%;
  position: relative;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  padding: 10px;

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
`

export default Card
