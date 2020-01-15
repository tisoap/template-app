import '../src/styles/fonts.css'
import '../src/styles/reset.css'

import React from 'react'
import StoryRouter from 'storybook-react-router'
import { addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { ThemeProvider } from '../src/providers'
import { Box } from '../src/components'

addDecorator(storyFn => (
  <ThemeProvider>
    <Box
      p={2}
      width='100%'
      height='100%'
      minHeight='100vh'
      overflow='scroll'
      tabIndex='0'
      color='text'
      bg='background'
    >
      {storyFn()}
    </Box>
  </ThemeProvider>
))

addDecorator(StoryRouter())
addDecorator(withA11y)
