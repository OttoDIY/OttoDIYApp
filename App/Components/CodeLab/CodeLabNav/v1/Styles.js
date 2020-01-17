import { StyleSheet } from 'react-native'

import { Styles, Metrics, Colors, Fonts } from 'App/Themes'

import { isIphoneX } from 'App/Services/Properties'

export default StyleSheet.create({
  ...Styles,
  view: {
    backgroundColor: Colors.white
  },
  typesView: {
    ...Styles.row
  },
  typeView: {
    flex: 0.25,
    ...Styles.centered,
    paddingVertical: Metrics.unit * 2,
    borderTopWidth: 1,
    borderTopColor: Colors.transparent
  },
  typeView_action: {
    borderTopColor: Colors.codeLab.action
  },
  typeView_sensor: {
    borderTopColor: Colors.codeLab.sensor
  },
  typeView_control: {
    borderTopColor: Colors.codeLab.control
  },
  typeView_data: {
    borderTopColor: Colors.codeLab.data
  },
  instructionsScrollView: {
    width: '100%',
    backgroundColor: Colors.codeLab.action
  },
  instructionsScrollView_sensor: {
    backgroundColor: Colors.codeLab.sensor
  },
  instructionsScrollView_control: {
    backgroundColor: Colors.codeLab.control
  },
  instructionsScrollView_data: {
    backgroundColor: Colors.codeLab.data
  },
  instructionsView: {
    ...Styles.row,
    alignItems: 'center',
    paddingVertical: Metrics.unit * 1.5,
    paddingHorizontal: Metrics.unit
  },
  instructionView: {
    ...Styles.row,
    alignItems: 'center'
  },
  icon: {
    marginLeft: Metrics.unit / 2
  },
  instruction: {
    ...Styles.text,
    ...Styles.text_bold,
    fontSize: Fonts.size.large,
    color: Colors.white,
    margin: Metrics.unit / 2
  },
  separator: {
    width: 1,
    height: '100%',
    backgroundColor: Colors.whiteTranslucent,
    margin: Metrics.unit
  },
  footer: {
    alignItems: 'center',
    minHeight: 80,
    backgroundColor: Colors.footer.background,
    paddingTop: Metrics.unit * 4,
    paddingBottom: (isIphoneX()) ? Metrics.unit * 5 : Metrics.unit * 4
  }
})
