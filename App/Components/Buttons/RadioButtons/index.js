import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import Button from '../Button'
import styles, { stylesLight } from './Styles'

export default class RadioButtons extends Component {
  static propTypes = {
    theme: PropTypes.string,
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    activeIndex: PropTypes.number,
    onPress: PropTypes.func.isRequired
  }

  render () {
    const { style = {}, theme = 'default', labels, activeIndex = 0, onPress } = this.props
    const s = (theme === 'light') ? stylesLight : styles
    return (

      <View style={[s.view, style]}>
        {labels.map((label, i) => {
          const buttonStyle = [s.button]
          const textStyle = [s.text]
          if (i < labels.length - 1) {
            buttonStyle.push(s.noBorderRight)
          }
          if (i > 0) {
            buttonStyle.push(s.borderLeftNoRadius)
          }
          if (i === activeIndex) {
            buttonStyle.push(s.button_selected)
            textStyle.push(s.text_selected)
          }
          return (
            <Button
              key={`radio-button-${i}`}
              style={{button: buttonStyle, text: textStyle}}
              text={label}
              onPress={() => { onPress(i) }} />
          )
        })}
      </View>
    )
  }
}
