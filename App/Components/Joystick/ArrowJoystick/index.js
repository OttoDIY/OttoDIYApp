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
    onRight: PropTypes.func,
    onLongPress: PropTypes.func,
    onLongPressOut: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      longPressing: false
    }
  }

  onLongPress = (direction) => {
    const { onLongPress } = this.props
    this.setState({ longPressing: true })
    if (onLongPress) {
      onLongPress(direction)
    }
  }

  onPressOut = () => {
    const { onLongPressOut } = this.props
    const { longPressing } = this.state
    if (longPressing) {
      this.setState({ longPressing: false })
      if (onLongPressOut) {
        onLongPressOut()
      }
    }
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
        <TouchableOpacity
          style={s.up}
          onPress={onUp}
          delayLongPress={200}
          onLongPress={() => this.onLongPress('up')}
          onPressOut={this.onPressOut}>
          <Image style={s.image} source={Images.controls.forward} />
        </TouchableOpacity>
        <TouchableOpacity
          style={s.down}
          onPress={onDown}
          delayLongPress={200}
          onLongPress={() => this.onLongPress('down')}
          onPressOut={this.onPressOut}>
          <Image style={s.image} source={Images.controls.backward} />
        </TouchableOpacity>
        <TouchableOpacity
          style={s.left}
          onPress={onLeft}
          delayLongPress={200}
          onLongPress={() => this.onLongPress('left')}
          onPressOut={this.onPressOut}>
          <Image style={s.image} source={Images.controls.left} />
        </TouchableOpacity>
        <TouchableOpacity
          style={s.right}
          onPress={onRight}
          delayLongPress={200}
          onLongPress={() => this.onLongPress('right')}
          onPressOut={this.onPressOut}>
          <Image style={s.image} source={Images.controls.right} />
        </TouchableOpacity>
      </View>
    )
  }
}
