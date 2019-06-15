import { StyleSheet } from 'react-native'

import { Styles } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  view: {
    width: 205,
    height: 205
  },
  control: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 205,
    height: 205,
    zIndex: 9999
  },
  up: {
    position: 'absolute',
    top: 1,
    left: 75,
    width: 55,
    height: 55,
    zIndex: 9999
  },
  down: {
    position: 'absolute',
    bottom: 1,
    left: 75,
    width: 55,
    height: 55,
    zIndex: 9999
  },
  left: {
    position: 'absolute',
    bottom: 75,
    left: 1,
    width: 55,
    height: 55,
    zIndex: 9999
  },
  right: {
    position: 'absolute',
    bottom: 75,
    right: 1,
    width: 55,
    height: 55,
    zIndex: 9999
  }
})
