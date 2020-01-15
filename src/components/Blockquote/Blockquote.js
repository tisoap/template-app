import styled from '@emotion/styled'

import {
  space,
  color,
  layout,
  typography,
  border,
  position
} from 'styled-system'

const Blockquote = styled.blockquote`
  position: relative;
  font-style: italic;
  margin: 0;
  padding-top: 1em;
  padding-left: 1em;
  line-height: 1.6em;
  font-family: 'Merriweather', serif;
  text-align: left;
  &::before {
      content: '“';
      font-size: 4em;
      position: absolute;
      top: 0.35em;
      left: 0;
      color: rgba(0, 0, 0, 0.1);
      z-index: 0;
   }

  ${space}
  ${color}
  ${layout}
  ${typography}
  ${border}
  ${position}
`

export default Blockquote
