import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from 'components'
import { connect } from 'react-redux'

import {
  errorSelector,
  loadingSelector,
  dataSelector,
  searchDummy
} from 'ducks/dummy'

export const Home = ({
  data,
  error,
  loading,
  searchDummy
}) => {
  useEffect(() => {
    searchDummy()
  }, [searchDummy])

  if (loading) {
    return <Text m={0}>Loading...</Text>
  }

  if (error) {
    return <Text m={0}>Error loading content.</Text>
  }

  return (
    <Box
      as='section'
      margin='auto'
      p={3}
      maxWidth={16}
      width='100%'
      display='flex'
      flexDirection='column'
      position='relative'
    >
      <Text>Loaded content:</Text>
      <Text as='pre'>
        {JSON.stringify(data, null, 2)}
      </Text>
    </Box>
  )
}

Home.propTypes = {
  data: PropTypes.array,
  error: PropTypes.object,
  loading: PropTypes.bool,
  searchDummy: PropTypes.func.isRequired
}

Home.defaultProps = {
  data: [],
  error: null,
  loading: true,
  searchDummy: () => {}
}

const mapStateToProps = state => ({
  data: dataSelector(state),
  error: errorSelector(state),
  loading: loadingSelector(state)
})

const mapDispatchToProps = { searchDummy }
const addReduxProps = connect(mapStateToProps, mapDispatchToProps)

export default addReduxProps(Home)
