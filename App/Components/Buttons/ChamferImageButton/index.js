import React, { Component } from 'react'
import { View, Image } from 'react-native'
import PropTypes from 'prop-types'

import { TouchableOpacity } from 'App/Components'

import { Images, Colors } from 'App/Themes'

import s from './Styles'

export default class ChamferImageButton extends Component {
  static propTypes = {
    image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]).isRequired,
    backgroundColor: PropTypes.string,
    onPress: PropTypes.func.isRequired
  }

  render () {
    const {image, backgroundColor = Colors.primary, onPress} = this.props
    return (
      <TouchableOpacity style={s.touchable} onPress={onPress}>
        <View style={[s.buttonBackground, {borderColor: backgroundColor}]} />
        <Image style={s.button} source={Images.buttons.border} />
        <Image style={s.image} source={image} />
      </TouchableOpacity>
    )
  }
}
