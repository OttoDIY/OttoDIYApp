import { StyleSheet } from 'react-native'

import { Styles, Colors, Metrics } from 'App/Themes'

import { isIphoneX } from 'App/Services/Properties'

export default StyleSheet.create({
  ...Styles,
  header: {
    margin: Metrics.unit * 2,
    marginTop: (isIphoneX) ? Metrics.unit * 4 : Metrics.unit * 2,
    marginBottom: 0,
    flexDirection: 'row'
  },
  headerCenter: {
    flex: 1
  },
  separator: {
    margin: Metrics.unit * 2,
    flexDirection: 'row'
  },
  separator_flipped: {
    margin: Metrics.unit * 2,
    flexDirection: 'row',
    transform: [{rotate: '180deg'}]
  },
  separatorDiagonal: {
    height: 30,
    width: 30
  },
  separatorDiagonalLeft: {
    borderTopWidth: 2,
    borderTopColor: 'white',
    height: 20,
    marginLeft: -14,
    transform: [{rotate: '135deg'}]
  },
  separatorDiagonalRight: {
    borderTopWidth: 2,
    borderTopColor: 'white',
    height: 20,
    marginRight: -14,
    transform: [{rotate: '-135deg'}]
  },
  separatorCenter: {
    flex: 1,
    borderTopWidth: 2,
    borderTopColor: Colors.white
  },
  separatorLeft: {
    height: 30,
    width: 30
  },
  driveView: {
    ...Styles.centered,
    ...Styles.row
  },
  joystickView: {
    marginHorizontal: Metrics.unit * 2
  },
  buttonsView: {
    marginVertical: Metrics.unit * 2
  },
  buttonsBottomView: {
    marginVertical: 0
  },
  buttonsRowView: {
    ...Styles.centered,
    ...Styles.row
  },
  buttonView: {
    margin: Metrics.unit
  },
  ledMatrixView: {
    alignItems: 'center',
    margin: Metrics.unit * 3
  },
  radioButtonsView: {
    marginTop: Metrics.unit * 3,
    alignItems: 'center'
  }
})
