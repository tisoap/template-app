import React from 'react'

import {
  ThemeProvider,
  RouterProvider,
  StoreProvider
} from 'providers'

import Routes from 'routes'
import { Box } from 'components'

export const App = () => (
  <Box
    as='main'
    width='100%'
    height='100%'
    minHeight='100vh'
    bg='background'
    color='text'
  >
    <Routes />
  </Box>
)

export const AppWithProviders = () => (
  <StoreProvider>
    <RouterProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </RouterProvider>
  </StoreProvider>
)

export default AppWithProviders
