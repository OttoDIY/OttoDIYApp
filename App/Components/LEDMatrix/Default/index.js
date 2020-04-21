import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import s from './Styles'

export default class LEDMatrix extends Component {
  static propTypes = {
    colSize: PropTypes.number,
    rowSize: PropTypes.number,
    matrix: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
    onPress: PropTypes.func.isRequired
  }

  renderColumns = (style, colSize, row, matrix, onPress) => {
    return (
      <View key={`row-${row}`} style={s.row}>
        {[...Array(colSize)].map((_, col) => {
          const active = matrix.length > row && matrix[row].length > col ? !!matrix[row][col] : false
          return (
            <TouchableOpacity
              key={`led-${row}-${col}`}
              style={[s.led, style.led, active ? [s.led_active, style.led_active] : null]}
              onPress={() => { onPress(row, col) }} />
          )
        })}
      </View>
    )
  }

  render () {
    const {
      style = {},
      colSize = 8,
      rowSize = 8,
      matrix = [],
      onPress
    } = this.props

    return (
      <View style={style.view}>
        <View style={[s.ledMatrix, style.ledMatrix]}>
          {[...Array(rowSize)].map((_, row) => this.renderColumns(style, colSize, row, matrix, onPress))}
        </View>
      </View>
    )
  }
}
