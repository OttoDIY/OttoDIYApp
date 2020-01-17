// Based on https://github.com/gitim/react-native-sortable-list/blob/master/examples/Basic/App.js

import React, { Component } from 'react'
import { Animated, Easing } from 'react-native'

import Instruction from '../Instruction'

import s from './Styles'

export default class Row extends Component {
  constructor (props) {
    super(props)

    this._active = new Animated.Value(0)

    this._style = {
      transform: [{
        scale: this._active.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.025]
        })
      }]
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.active !== nextProps.active) {
      Animated.timing(this._active, {
        duration: 300,
        easing: Easing.bounce,
        toValue: Number(nextProps.active)
      }).start()
    }
  }

  render () {
    const { data, onSlidingComplete, onClose } = this.props
    return (
      <Animated.View style={[
        s.row,
        this._style
      ]}>
        <Instruction
          {...data}
          onSlidingComplete={onSlidingComplete}
          onClose={() => { onClose(data) }} />
      </Animated.View>
    )
  }
}
