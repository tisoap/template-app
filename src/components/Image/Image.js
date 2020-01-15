import styled from '@emotion/styled'

import {
  space,
  layout,
  flexbox,
  border,
  position,
  shadow
} from 'styled-system'

const Image = styled.img`
  ${space}
  ${layout}
  ${flexbox}
  ${border}
  ${position}
  ${shadow}
`

Image.defaultProps = {
  alt: ''
}

export default Image
