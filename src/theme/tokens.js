import colors from './colors'

const breakpoints = [
  '576px',
  '768px',
  '992px',
  '1200px'
]

breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const space = {
  0: '0',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '24px',
  6: '32px',
  7: '48px',
  8: '64px',
  9: '96px',
  10: '128px'
}

const sizes = {
  0: '0',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '24px',
  6: '32px',
  7: '48px',
  8: '64px',
  9: '96px',
  10: '128px',
  11: '192px',
  12: '256px',
  13: '384px',
  14: '512px',
  15: '640px',
  16: '768px'
}

const fontSizes = {
  0: '12px',
  1: '14px',
  2: '16px',
  3: '18px',
  4: '20px',
  5: '24px',
  6: '30px',
  7: '36px',
  8: '48px',
  9: '60px',
  10: '72px'
}

fontSizes.body = fontSizes[2]

const fonts = {
  serif: "'Fira Sans', sans-serif",
  sansSerif: "'Merriweather', serif"
}

const fontWeights = {
  body: 400,
  bold: 500
}

const designTokens = {
  colors,
  space,
  sizes,
  fontSizes,
  fontWeights,
  breakpoints,
  fonts
}

export default designTokens
