import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Platform, View, Button, Text } from 'react-native'

import { TouchableOpacity } from 'App/Components'

import styles, { stylesLight } from './Styles'

export default class NavButton extends Component {
  static propTypes = {
    theme: PropTypes.string,
    text: PropTypes.string,
    onPress: PropTypes.func
  }

  render () {
    const { style = {}, theme = 'default', text, onPress } = this.props
    if (Platform.OS === 'ios') {
      return (
        <Button title={text} onPress={onPress} />
      )
    } else {
      const s = (theme === 'light') ? stylesLight : styles
      return (
        <View style={s.view}>
          <TouchableOpacity style={s.button} onPress={onPress}>
            <Text style={[s.text, style.text]}>{text}</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
}
