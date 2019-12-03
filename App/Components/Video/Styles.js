import { StyleSheet } from 'react-native'

import { Styles, Metrics, Colors } from 'App/Themes'

export default StyleSheet.create({
  ...Styles,
  videoPlayer: {
    width: 343,
    height: 232,
    borderRadius: Metrics.media.border,
    borderWidth: 1,
    borderColor: Colors.primary
  },
  videoPlayer_small: {
    width: 165,
    height: 112
  },
  videoButton: {
    position: 'absolute',
    zIndex: 9999
  },
  videoView: {
    ...Styles.centered
  }
})
