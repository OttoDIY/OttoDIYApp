
// TouchableOpacity component that prevents double tapping
// Forked from https://gist.github.com/devmrin/be63ef3e6128ead558dc1eea17fb11b1

import React from 'react'
import ReactNative, { ViewPropTypes } from 'react-native'

import PropTypes from 'prop-types'

import { debounce } from 'underscore'

class TouchableOpacity extends React.PureComponent {
  componentWillMount () {
    const { onPress, debounceTime } = this.props
    this.handlePress = debounce(onPress, debounceTime, true)
  }
  render () {
    return (
      <ReactNative.TouchableOpacity {...this.props} onPress={this.handlePress}>{this.props.children}</ReactNative.TouchableOpacity>
    )
  }
}

TouchableOpacity.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
  debounceTime: PropTypes.number
}

TouchableOpacity.defaultProps = {
  style: {},
  debounceTime: 100
}

export default TouchableOpacity
