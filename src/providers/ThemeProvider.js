import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as EmotionTheming } from 'emotion-theming'
import theme from 'theme'

export const ThemeProvider = ({ children }) => (
  <EmotionTheming theme={theme}>
    {children}
  </EmotionTheming>
)

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}
