import { StyleSheet } from 'react-native'

import { Styles, Colors, Metrics } from 'App/Themes'

const styles = {
  ...Styles,
  view: {
    ...Styles.row
  },
  tab: {
    ...Styles.centered,
    paddingVertical: Metrics.unit,
    borderTopWidth: 1,
    borderTopColor: Colors.transparent
  },
  tab_active: {
    borderTopColor: Colors.white_translucent
  },
  image: {
    width: 54,
    height: 54
  }
}

export default StyleSheet.create(styles)
