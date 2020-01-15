import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'

const Anchor = styled('a', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'decorated'
})(props => ({
  textDecoration: props.decorated ? 'underline' : 'none',
  cursor: 'pointer'
}))

Anchor.propTypes = {
  decorated: PropTypes.bool
}

Anchor.defaultProps = {
  decorated: false
}

export default Anchor
