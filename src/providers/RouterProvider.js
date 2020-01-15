import React from 'react'
import PropTypes from 'prop-types'
import { HashRouter } from 'react-router-dom'

export const RouterProvider = ({ children }) => (
  <HashRouter>
    {children}
  </HashRouter>
)

RouterProvider.propTypes = {
  children: PropTypes.node.isRequired
}
