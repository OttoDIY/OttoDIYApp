import { AppRegistry } from 'react-native'
import App from './App/Containers/App'

import { initCrashReporting } from 'App/Services/CrashReporting'

initCrashReporting()

AppRegistry.registerComponent('Otto', () => App)
