import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import { TouchableOpacity } from 'App/Components'

import s from './Styles'

export default class VideoButton extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'default']),
    disabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired
  }

  render () {
    const { size, disabled = false, onPress, style = {} } = this.props
    const isSmall = (size === 'small')
    const styles = {
      button: [
        s.button,
        ...((isSmall) ? [s.button_small] : []),
        ...((style.button) ? [style.button] : [])
      ],
      buttonInner: [
        s.buttonInner,
        ...((isSmall) ? [s.buttonInner_small] : []),
        ...((style.buttonInner) ? [style.buttonInner] : [])
      ],
      buttonIcon: [
        s.buttonIcon,
        ...((style.buttonIcon) ? [style.buttonIcon] : [])
      ]
    }
    return (
      <TouchableOpacity style={styles.button} disabled={disabled} onPress={onPress}>
        <View style={styles.buttonInner}>
          <View style={styles.buttonIcon}>
            {this.props.children}
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}
