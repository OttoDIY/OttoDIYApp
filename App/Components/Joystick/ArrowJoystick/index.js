import React, { Component } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import { Images } from 'App/Themes'

import s from './Styles'

export default class ArrowJoystick extends Component {
  static propTypes = {
    onUp: PropTypes.func,
    onDown: PropTypes.func,
    onLeft: PropTypes.func,
    onRight: PropTypes.func
  }

  render () {
    const {
      style = undefined,
      onUp,
      onDown,
      onLeft,
      onRight} = this.props

    return (
      <View style={[s.view, style]}>
        <Image style={s.control} source={Images.controls.control} />
        <TouchableOpacity style={s.up} onPress={onUp}>
          <Image style={s.image} source={Images.controls.forward} />
        </TouchableOpacity>
        <TouchableOpacity style={s.down} onPress={onDown}>
          <Image style={s.image} source={Images.controls.backward} />
        </TouchableOpacity>
        <TouchableOpacity style={s.left} onPress={onLeft}>
          <Image style={s.image} source={Images.controls.left} />
        </TouchableOpacity>
        <TouchableOpacity style={s.right} onPress={onRight}>
          <Image style={s.image} source={Images.controls.right} />
        </TouchableOpacity>
      </View>
    )
  }
}
