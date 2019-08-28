import { AppRegistry } from 'react-native'
import config from 'react-native-config'
import App from './App/Containers/App'
import StorybookApp from './storybook/index'

import { initCrashReporting } from 'App/Services/CrashReporting'

initCrashReporting()

AppRegistry.registerComponent('Otto', () =>
  (config.ENV === 'storybook') ? StorybookApp : App
)
