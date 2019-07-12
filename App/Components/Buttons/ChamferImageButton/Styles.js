import { StyleSheet } from 'react-native'

import { Styles, Colors } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  touchable: {
    width: 56,
    height: 56
  },
  buttonBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 56,
    height: 56,
    borderWidth: 2,
    borderColor: Colors.primary,
    zIndex: 9990
  },
  button: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 56,
    height: 56,
    zIndex: 9999
  },
  image: {
    backgroundColor: Colors.primary,
    position: 'absolute',
    top: 0,
    left: 0,
    width: 54,
    height: 54,
    zIndex: 9980
  }
})
