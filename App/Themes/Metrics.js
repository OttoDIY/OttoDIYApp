import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')

const unit = 8

export default {
  unit,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  button: {
    radius: 100,
    minWidth: 112,
    border: 8
  },
  media: {
    border: 10
  }
}
