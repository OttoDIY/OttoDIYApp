import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import Button from '../Button'

import styles, { stylesLight } from './Styles'

export default class PlayerButton extends Component {
  static propTypes = {
    theme: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    disabled: PropTypes.bool,
    onPress: PropTypes.func
  }

  render () {
    const { theme = 'default', text = ' ', image, disabled = false, onPress = () => {} } = this.props
    const s = (theme === 'light') ? stylesLight : styles
    const opacity = (disabled) ? 0.5 : 1
    return (
      <View style={{ opacity }}>
        <Button style={s} text={text} image={image} disabled={disabled} onPress={onPress} />
      </View>
    )
  }
}
