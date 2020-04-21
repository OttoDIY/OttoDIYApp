import { StyleSheet } from 'react-native'

import { Styles, Colors } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  ledMatrix: {
    width: '100%',
    justifyContent: 'center'
  },
  row: {
    width: '100%',
    flexDirection: 'row'
  },
  led: {
    width: 24,
    height: 24,
    borderRadius: 12,
    margin: 4,
    backgroundColor: Colors.led.default
  },
  led_active: {
    backgroundColor: Colors.led.active
  }
})
