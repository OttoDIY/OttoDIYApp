import { Platform } from 'react-native'

import styles from './Styles/NavigationStyles'

export const dynamicTitleNavigationOptions = ({ navigation }) => {
  const {params = {}} = navigation.state
  return (params.title)
    ? {title: params.title}
    : {}
}

const navigationOptions = (Platform.OS === 'ios')
  ? {
    headerStyle: styles.header,
    headerBackTitle: 'Back',
    headerTintColor: 'black',
    headerTitleStyle: { color: 'black' }
  }
  : {
    headerStyle: styles.header,
    headerBackTitle: 'Back',
    headerTitleStyle: styles.headerTitleStyle,
    headerBackTitleStyle: styles.headerBackTitleStyle,
    headerTintColor: 'black'
  }

export default navigationOptions
