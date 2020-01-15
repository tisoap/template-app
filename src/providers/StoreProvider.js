import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistedStore } from 'store'
import { Text } from 'components'

const loading = <Text m={0}>Loading...</Text>

export const StoreProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={loading} persistor={persistedStore}>
        {children}
      </PersistGate>
    </Provider>
  )
}

StoreProvider.propTypes = {
  children: PropTypes.node
}
