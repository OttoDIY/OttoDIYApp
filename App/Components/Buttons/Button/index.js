import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'

import { TouchableOpacity, LoadingIndicator } from 'App/Components'

import s from './Styles'

export default class Button extends Component {
  static propTypes = {
    size: PropTypes.string,
    text: PropTypes.string.isRequired,
    image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onPress: PropTypes.func.isRequired
  }

  render () {
    const {
      style = {},
      size = 'default',
      text,
      image,
      disabled = false,
      loading = false,
      onPress } = this.props

    const textStyle = (!disabled)
      ? (style.text) ? [s.text, style.text] : [s.text]
      : (style.text) ? [s.text, s.text_disabled, style.text] : [s.text, s.text_disabled]
    const buttonStyle = (!disabled)
      ? (style.button) ? [s.button, style.button] : [s.button]
      : (style.button) ? [s.button, s.button_disabled, style.button] : [s.button, s.button_disabled]
    const imageStyle = (!disabled)
      ? (style.image) ? [s.image, style.image] : [s.image]
      : (style.image) ? [s.image, s.image_disabled, style.image] : [s.image, s.image_disabled]

    if (image) {
      buttonStyle.push(s.button_image)
    }
    if (size === 'small') {
      imageStyle.push(s.image_small)
      buttonStyle.push(s.button_image_small)
    }

    return (
      <View style={style.view}>
        <TouchableOpacity style={buttonStyle} disabled={disabled || loading} onPress={onPress}>
          {!loading && !image && <Text style={textStyle}>{text}</Text>}
          {!loading && image && <Image style={imageStyle} source={image} />}
          {loading && <LoadingIndicator style={{marginVertical: 2}} />}
        </TouchableOpacity>
      </View>
    )
  }
}
