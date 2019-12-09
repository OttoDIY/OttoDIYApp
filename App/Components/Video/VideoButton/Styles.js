import { StyleSheet } from 'react-native'

import { Styles, Metrics } from 'App/Themes'

const buttonSizeRegular = 70
const buttonSizeSmall = 40
const buttonInnerSizeRegular = 60
const buttonInnerSizeSmall = 30

export default StyleSheet.create({
  ...Styles,
  button: {
    width: buttonSizeRegular,
    height: buttonSizeRegular,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button_small: {
    width: buttonSizeSmall,
    height: buttonSizeSmall,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonInner: {
    position: 'relative',
    width: buttonInnerSizeRegular,
    height: buttonInnerSizeRegular,
    borderRadius: Metrics.button.radius,
    backgroundColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 1.00,
    elevation: 1
  },
  buttonInner_small: {
    position: 'relative',
    width: buttonInnerSizeSmall,
    height: buttonInnerSizeSmall,
    backgroundColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
