import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

import { TouchableOpacity } from 'App/Components'

import s from './Styles'

export default class Link extends Component {
  static propTypes = {
    theme: PropTypes.string,
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    uppercase: PropTypes.bool,
    centered: PropTypes.bool
  }

  render () {
    const {
      style = {},
      theme = 'default',
      text,
      onPress,
      uppercase = true,
      centered = false } = this.props
    const textStyle = (theme === 'default') ? s.text : s['text_' + theme]
    return (
      <TouchableOpacity style={(centered) ? [s.centered, style.view] : style} onPress={onPress}>
        <Text style={[textStyle, style.text]}>{(uppercase) ? text.toUpperCase() : text}</Text>
      </TouchableOpacity>
    )
  }
}
