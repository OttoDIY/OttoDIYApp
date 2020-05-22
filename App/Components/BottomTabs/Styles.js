import { StyleSheet } from 'react-native'

import { Styles, Colors, Metrics, Fonts } from 'App/Themes'

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
    borderTopColor: Colors.whiteTranslucent
  },
  image: {
    width: 54,
    height: 54
  },
  text_medium: {
    fontSize: Fonts.size.medium
  },
  text_small: {
    fontSize: Fonts.size.small
  }
}

export default StyleSheet.create(styles)
