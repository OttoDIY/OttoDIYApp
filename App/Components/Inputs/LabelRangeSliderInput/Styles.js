import { StyleSheet } from 'react-native'

import { Styles, Metrics, Colors } from 'App/Themes'

const s = {
  ...Styles,
  view: {
    ...Styles.row,
    height: 48,
    width: '100%',
    alignItems: 'center'
  },
  title: {
    ...Styles.text,
    marginRight: Metrics.unit
  },
  input: {
    height: 48,
    flex: 1,
    alignItems: 'center'
  },
  slider: {
    marginVertical: Metrics.unit * 3 - 1,
    height: 2,
    width: '100%',
    backgroundColor: Colors.primaryDark,
    opacity: 0.5
  },
  slider_active: {
    opacity: 1
  },
  label: {
    marginTop: Metrics.unit * 3 + 6,
    width: 80,
    color: Colors.primaryDark,
    opacity: 0.8
  },
  label_center: {
    textAlign: 'center'
  },
  label_right: {
    textAlign: 'right'
  },
  label_active: {
    opacity: 1
  },
  thumb: {
    position: 'absolute',
    top: Metrics.unit * 3 - 5,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primaryDark,
    zIndex: 9998
  },
  thumb_center: {
    marginLeft: -5
  },
  touch: {
    position: 'absolute',
    top: 0,
    height: 48,
    width: 80,
    zIndex: 9999
  },
  touch_center: {
    width: 80,
    marginLeft: -40
  }
}

const sLight = {
  ...s,
  title: {
    ...s.title,
    color: Colors.white
  },
  slider: {
    ...s.slider,
    backgroundColor: Colors.white
  },
  label: {
    ...s.label,
    color: Colors.white
  },
  thumb: {
    ...s.thumb,
    backgroundColor: Colors.white
  }
}

export const stylesLight = StyleSheet.create(sLight)

export default StyleSheet.create(s)
