import { mergeDeepRight } from 'ramda'
import tokens from './tokens'

const { colors } = tokens

const theme = {
  colors: {
    text: colors.greys[9],
    background: colors.warmGreys[0],
    primary: colors.vividBlues[7]
  }
}

export default mergeDeepRight(tokens, theme)
