import { Metrics, Colors, Fonts } from 'App/Themes'

const styles = {
  view: {
    flexDirection: 'row'
  },
  button: {
    backgroundColor: Colors.transparent,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: Metrics.unit,
    // paddingHorizontal: 0,
    paddingVertical: Metrics.unit / 2,
    paddingHorizontal: Metrics.unit * 2,
    minWidth: 'auto'
  },
  button_selected: {
    backgroundColor: Colors.primary
  },
  text: {
    ...Fonts.style.normal,
    fontSize: Fonts.size.medium,
    color: Colors.primary
  },
  text_selected: {
    color: Colors.white
  },
  noBorderRight: {
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  borderLeftNoRadius: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  }
}

export default styles

export const stylesLight = {
  ...styles,
  button: {
    ...styles.button,
    borderColor: Colors.white
  },
  button_selected: {
    backgroundColor: Colors.white
  },
  text: {
    ...styles.text,
    color: Colors.white
  },
  text_selected: {
    color: Colors.primary
  }
}
