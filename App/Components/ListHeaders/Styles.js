import { StyleSheet } from 'react-native'

import { Styles, Metrics, Colors } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  listHeaderView: {
    margin: Metrics.unit
  },
  listHeader: {
    flexDirection: 'row'
  },
  title: {
    flex: 1,
    ...Styles.text,
    color: Colors.primary
  },
  bottomBorder: {
    ...Styles.row,
    height: 2
  },
  bottomBorderLeft: {
    backgroundColor: Colors.primary
  },
  bottomBorderRight: {
    backgroundColor: Colors.lightgrey
  }
})
