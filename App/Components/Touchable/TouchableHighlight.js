
// TouchableHighlight component that prevents double tapping
// Forked from https://gist.github.com/devmrin/be63ef3e6128ead558dc1eea17fb11b1

import React from 'react'
import ReactNative, { ViewPropTypes } from 'react-native'

import PropTypes from 'prop-types'

import { debounce } from 'underscore'

class TouchableHighlight extends React.PureComponent {
  componentWillMount () {
    const { onPress, debounceTime } = this.props
    this.handlePress = debounce(onPress, debounceTime, true)
  }
  render () {
    return (
      <ReactNative.TouchableHighlight {...this.props} onPress={this.handlePress}>{this.props.children}</ReactNative.TouchableHighlight>
    )
  }
}

TouchableHighlight.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
  debounceTime: PropTypes.number
}

TouchableHighlight.defaultProps = {
  style: {},
  debounceTime: 100
}

export default TouchableHighlight
