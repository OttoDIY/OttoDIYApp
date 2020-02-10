import { StyleSheet } from 'react-native'

import { Styles, Metrics, Colors, Fonts } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  button: {
    backgroundColor: Colors.button.background,
    borderWidth: Metrics.button.border,
    borderColor: Colors.button.border,
    borderRadius: Metrics.button.radius,
    paddingVertical: Metrics.unit,
    paddingHorizontal: Metrics.unit * 3,
    minWidth: Metrics.button.minWidth
  },
  button_disabled: {
    borderColor: Colors.button.border_disabled
  },
  button_image: {
    paddingVertical: Metrics.unit / 2,
    minWidth: 62
  },
  button_image_small: {
    minWidth: 40
  },
  text: {
    ...Fonts.style.button,
    ...Styles.text_center,
    color: Colors.button.text
  },
  image: {
    width: 54,
    height: 54,
    marginHorizontal: Metrics.unit / 2
  },
  image_small: {
    width: 32,
    height: 32,
    margin: 0
  }
})
