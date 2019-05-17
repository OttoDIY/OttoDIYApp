import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'

import { TouchableOpacity, Icon } from 'App/Components'

import { Colors } from 'App/Themes'

import s from './Styles'

export default class CompactListItem extends Component {
  static propTypes = {
    image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    iconSet: PropTypes.string,
    icon: PropTypes.string,
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
      iconSet,
      icon,
      iconSize = 24,
      iconColor = Colors.icon_primary,
      title,
      disabled = false,
      onPress } = this.props

    const textStyle = (!disabled) ? s.text_compact : [s.text_compact, s.text_disabled]
    const primaryButtonIconColor = (!disabled) ? iconColor : Colors.icon_disabled
    const buttonIconColor = (!disabled) ? Colors.icon_dark : Colors.icon_disabled

    return (
      <TouchableOpacity style={[s.row, style]} disabled={disabled} onPress={onPress}>
        {image && (
          <View style={[s.imageView, s.imageView_compact]}>
            <Image style={[s.image, s.image_compact]} source={image} />
          </View>
        )}
        {!image && icon && (
          <View style={[s.buttonView, s.buttonView_compact]}>
            <Icon set={iconSet} name={icon} size={iconSize} color={primaryButtonIconColor} style={iconStyle} />
          </View>
        )}
        <View style={[s.itemView, s.itemView_compact]}>
          <View style={[s.textView, s.textView_compact]}>
            <Text style={textStyle}>{title}</Text>
          </View>
          <Icon set='SimpleLine' name='arrow-right' size={16} color={buttonIconColor} />
        </View>
      </TouchableOpacity>
    )
  }
}
