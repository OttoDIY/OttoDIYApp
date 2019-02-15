
export const palette = {
  white: 'white',
  black: 'black',
  red: 'red',
  offwhite: '#FAFAFA',
  grey: '#9B9B9B',
  darkgrey: '#516173',
  lightgrey: '#ECECEC',
  primary: '#F9BC62', // Orange yellow
  primaryDark: '#354052', // Almost black
  primaryTranslucent: '#FCE2BA' // White on orange yellow with 50% opacity
}

export default {
  ...palette,
  background: palette.offwhite,
  statusBar: {
    background: palette.primary
  },
  nav: {
    background: palette.primary,
    text: palette.black
  },
  text: palette.primaryDark,
  button: {
    background: palette.white,
    text: palette.primaryDark,
    border: palette.primaryTranslucent
  },
  link: {
    text: palette.primaryDark
  },
  list: {
    separator: palette.lightgrey,
    icon: palette.primaryDark
  },
  footer: {
    background: palette.primary,
    button: {
      icon: palette.darkgrey
    }
  }
}
