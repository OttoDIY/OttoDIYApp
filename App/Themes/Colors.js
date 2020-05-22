
export const palette = {
  transparent: 'transparent',
  white: 'white',
  whiteTranslucent: 'rgba(255, 255, 255, 0.8)',
  black: 'black',
  red: 'red',
  offwhite: '#FAFAFA',
  grey: '#9B9B9B',
  greyTranslucent: '#DFDFDF',
  darkgrey: '#516173',
  lightgrey: '#ECECEC',
  primary: '#2D2D64', // Dark blue
  primaryDark: '#354052', // Almost black
  primaryTranslucent: '#9696B2', // primary with 50% opacity
  primaryTranslucent80: '#575B87', // primary with 80% opacity
  error: '#E62117' // red
}

export default {
  ...palette,
  background: palette.offwhite,
  background_disabled: palette.lightgrey,
  statusBar: {
    background: palette.primary
  },
  nav: {
    background: palette.offwhite,
    text: palette.black
  },
  text: palette.white,
  text_disabled: palette.grey,
  text_error: palette.error,
  icon: palette.darkgrey,
  icon_primary: palette.primary,
  icon_dark: palette.primaryDark,
  icon_disabled: palette.grey,
  button: {
    background: palette.white,
    text: palette.primaryDark,
    border: palette.primaryTranslucent,
    border_disabled: palette.greyTranslucent
  },
  led: {
    default: '#ADBECB',
    active: '#EC454C'
  },
  link: {
    text: palette.primaryDark
  },
  list: {
    separator: palette.lightgrey
  },
  carousel: {
    bubble: palette.white,
    bubble_active: palette.primaryDark
  },
  codeLab: {
    default: '#FFFFFF',
    action: '#4EBD64',
    sensor: '#B55ADA',
    control: '#EE4444',
    data: '#273C4A'
  },
  footer: {
    background: palette.primary
  }
}
