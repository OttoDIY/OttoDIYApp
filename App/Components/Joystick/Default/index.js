import React, { Component } from 'react'
import { View, Image } from 'react-native'
import PropTypes from 'prop-types'

import { Joystick as JoystickThumbstick } from 'joystick-component-lib'

import { Images } from 'App/Themes'

import s from './Styles'

export default class Joystick extends Component {
  static propTypes = {
    onDraggableMove: PropTypes.func,
    onDraggableRelease: PropTypes.func,
    onDraggableStart: PropTypes.func
  }

  copy = (touch) => {
    // Note: Creating shallow copy of touch since it might be updated
    // by the joystick lib as the rest of the app logic is happening
    return Object.assign({}, touch)
  }

  render () {
    const {
      style = undefined,
      onDraggableMove,
      onDraggableRelease,
      onDraggableStart} = this.props

    return (
      <View style={style}>
        <Image source={Images.joystick.arrows} />
        <View style={s.thumbstickView}>
          <JoystickThumbstick
            neutralPointX={80}
            neutralPointY={80}
            length={50}
            shape='circular'
            isSticky
            draggableStyle={s.thumbstick}
            backgroundStyle={s.thumbstickBackground}
            onDraggableMove={
              (touch) => {
                if (onDraggableMove) {
                  onDraggableMove(this.copy(touch))
                }
              }
            }
            onDraggableRelease={
              (touch) => {
                if (onDraggableRelease) {
                  onDraggableRelease(this.copy(touch))
                }
              }
            }
            onDraggableStart={onDraggableStart} />
        </View>
        <View style={s.thumbstickShadow} />
      </View>
    )
  }
}
