import { StyleSheet } from 'react-native'

import { Styles, Colors } from 'App/Themes'

const s = {
  ...Styles,
  view: {
    ...Styles.row,
    width: '100%',
    alignItems: 'center'
  },
  slider: {
    flex: 1,
    width: '100%'
  },
  label: {
    ...Styles.text,
    minWidth: 40,
    textAlign: 'center'
  }
}

const sLight = {
  ...s,
  label: {
    ...s.label,
    color: Colors.white
  }
}

export const stylesLight = StyleSheet.create(sLight)

export default StyleSheet.create(s)
