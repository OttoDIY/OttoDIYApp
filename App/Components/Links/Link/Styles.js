import { StyleSheet } from 'react-native'

import { Styles, Colors, Fonts } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  text: {
    ...Fonts.style.button,
    color: Colors.button.text,
    textDecorationLine: 'underline',
    textAlign: 'center'
  },
  text_light: {
    ...Fonts.style.button,
    color: Colors.white,
    textDecorationLine: 'underline',
    textAlign: 'center'
  }
})
