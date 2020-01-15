import React, { Suspense, lazy } from 'react'

import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { Text } from 'components'

const Home = lazy(() => import(
  /* webpackChunkName: "home" */
  'pages/Home'
))

const loading = <Text m={0}>Loading...</Text>

const Routes = () => (
  <Suspense fallback={loading}>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/test' render={() => <Text m={0}>Test route.</Text>} />
      <Route render={() => <Redirect to='/' />} />
    </Switch>
  </Suspense>
)

export default Routes
