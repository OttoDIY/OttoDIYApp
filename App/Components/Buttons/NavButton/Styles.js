import { Metrics, Colors, Fonts } from 'App/Themes'

const styles = {
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginHorizontal: Metrics.unit * 2,
    justifyContent: 'center'
  },
  text: {
    ...Fonts.style.normalBold,
    color: Colors.primary
  }
}

export default styles

export const stylesLight = {
  view: {
    ...styles.view
  },
  button: {
    ...styles.button,
    borderColor: Colors.white
  },
  text: {
    ...styles.text,
    color: Colors.white
  }
}
