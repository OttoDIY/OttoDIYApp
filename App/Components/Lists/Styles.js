import { StyleSheet } from 'react-native'

import { Styles, Metrics, Colors } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  listView: {
    marginBottom: Metrics.unit
  },
  title: {
    ...Styles.text,
    color: Colors.primary,
    marginHorizontal: Metrics.unit,
    marginBottom: Metrics.unit
  }
})
