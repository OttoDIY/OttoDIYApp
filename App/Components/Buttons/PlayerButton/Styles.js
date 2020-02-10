
import { Metrics, Fonts, Colors } from 'App/Themes'

const styles = {
  button: {
    backgroundColor: Colors.transparent,
    borderWidth: 1,
    borderColor: Colors.primaryDark,
    borderRadius: Metrics.unit,
    paddingHorizontal: 0
  },
  text: {
    ...Fonts.style.normal,
    fontSize: Fonts.size.medium,
    color: Colors.primaryDark
  }
}

export default styles

export const stylesLight = {
  button: {
    ...styles.button,
    borderColor: Colors.white
  },
  text: {
    ...styles.text,
    color: Colors.white
  }
}
