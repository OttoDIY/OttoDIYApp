import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'

import { TouchableOpacity, Icon } from 'App/Components'

import { Colors } from 'App/Themes'

import s from './Styles'

export default class SquareListItem extends Component {
  static propTypes = {
    image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    icon: PropTypes.string,
    iconSet: PropTypes.string,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
    title: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired
  }

  render () {
    const {
      style = undefined,
      iconStyle = undefined,
      image,
      icon,
      iconSet,
      iconSize = 48,
      iconColor = Colors.icon_primary,
      title,
      disabled = false,
      onPress } = this.props

    const textStyle = (!disabled) ? s.text_featured : [s.text_featured, s.text_disabled]

    return (
      <TouchableOpacity style={[s.itemView, s.itemView_featured, style]} disabled={disabled} onPress={onPress}>
        <View style={[s.itemOuterBorder, s.itemOuterBorder_featured]}>
          <View style={[s.itemInnerBorder, s.itemInnerBorder_featured]}>
            {image && (
              <View style={[s.imageView, s.imageView_featured]}>
                <Image source={image} />
              </View>
            )}
            {!image && icon && (
              <View style={[s.buttonView, s.buttonView_featured]}>
                <Icon set={iconSet} name={icon} size={iconSize} color={iconColor} disabled={disabled} style={iconStyle} />
              </View>
            )}
          </View>
        </View>
        <View style={[s.textView, s.textView_featured]}>
          <Text style={textStyle}>{title.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
