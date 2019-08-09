import { StyleSheet } from 'react-native'

import { Styles, Colors } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  thumbstickView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 160,
    height: 160,
    zIndex: 9999
  },
  thumbstickShadow: {
    position: 'absolute',
    top: 50,
    left: 50,
    backgroundColor: Colors.primaryTranslucent,
    width: 60,
    height: 60,
    borderRadius: 30,
    zIndex: 9998
  },
  thumbstick: {
    backgroundColor: Colors.primary,
    width: 60,
    height: 60
  },
  thumbstickBackground: {
    backgroundColor: Colors.transparent,
    borderWidth: 0
  }
})
