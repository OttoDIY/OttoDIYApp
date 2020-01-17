import { StyleSheet } from 'react-native'

import { Styles, Metrics, Colors, Fonts } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  view: {
    flex: 1,
    margin: Metrics.unit,
    paddingVertical: Metrics.unit / 2,
    paddingHorizontal: Metrics.unit,
    backgroundColor: Colors.primary,
    borderRadius: Metrics.unit / 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: Metrics.unit / 2,
    elevation: 1
  },
  icon: {
    marginLeft: Metrics.unit / 2
  },
  titleView: {
    flex: 1,
    margin: Metrics.unit / 2,
    justifyContent: 'center'
  },
  title: {
    ...Styles.text,
    fontSize: Fonts.size.large,
    color: Colors.white
  },
  title_default: {
    color: Colors.primaryDark
  },
  close: {
    marginTop: 3,
    padding: Metrics.unit / 2
  },
  sliderView: {
    ...Styles.row,
    marginBottom: Metrics.unit,
    marginRight: Metrics.unit
  }
})
