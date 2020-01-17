import { StyleSheet } from 'react-native'

import { Styles, Metrics } from 'App/Themes'

import { isIphoneX } from 'App/Services/Properties'

export default StyleSheet.create({
  ...Styles,
  footer: {
    ...Styles.footer,
    paddingTop: 0,
    paddingBottom: (isIphoneX()) ? Metrics.unit * 2 : 0
  },
  view: {
    paddingHorizontal: Metrics.unit
  },
  skills: {
    marginVertical: Metrics.unit
  },
  buttons: {
    ...Styles.row,
    justifyContent: 'space-between',
    marginVertical: Metrics.unit
  },
  buttons_small: {
    marginVertical: Metrics.unit / 2
  }
})
