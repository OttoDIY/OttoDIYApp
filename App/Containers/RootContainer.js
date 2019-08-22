import React, { Component } from 'react'
import { AppState, View, StatusBar } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'

// TODO Fix firebase code
// import firebase from 'react-native-firebase'
import DeviceInfo from 'react-native-device-info'

import Bluetooth from 'App/Services/Bluetooth'
import { Events, trackEvent } from 'App/Services/Analytics'

import Colors from 'App/Themes/Colors'

class RootContainer extends Component {
  componentDidMount () {
    this.appOpenedFromPushNotification = false

    // TODO Fix firebase code
    // if (!this.isSimulator()) {
    //   firebase.notifications().getInitialNotification()
    //     .then((notificationOpen) => {
    //       if (notificationOpen) {
    //         // App was opened by a notification
    //         // See https://github.com/invertase/react-native-firebase-docs/blob/master/docs/notifications/receiving-notifications.md
    //         this.appOpenedFromPushNotification = true
    //       }
    //     })
    //
    //   this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
    //     // App is in the foreground or background, notification was clicked / tapped / opened
    //     // See https://github.com/invertase/react-native-firebase-docs/blob/master/docs/notifications/receiving-notifications.md
    //     if (AppState.currentState === 'background') {
    //       this.appOpenedFromPushNotification = true
    //     }
    //
    //     const user = (this.props.credentials)
    //       ? this.props.credentials.user
    //       : undefined
    //     trackEvent({user, event: Events.NOTIFICATION_OPENED})
    //   })
    // }

    this.sessionStartTime = new Date()

    AppState.addEventListener('change', this.appStateChange)

    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  componentWillUnmount () {
    Bluetooth.stopService()
    // TODO Fix firebase code
    // if (!this.isSimulator()) {
    //   this.notificationOpenedListener()
    // }
    AppState.removeEventListener('change', this.appStateChange)
  }

  isSimulator = () => {
    return DeviceInfo.isEmulator()
  }

  appStateChange = (nextAppState) => {
    if (nextAppState === 'active') {
      this.sessionStartTime = new Date()
      // TODO Do we need to wait for appOpenedFromPushNotification to be set?
      this.trackEventSession(Events.SESSION_STARTED)
    } else if (nextAppState === 'background') {
      this.trackEventSession(Events.SESSION_ENDED)
    }
  }

  trackEventSession = (event) => {
    const user = (this.props.credentials)
      ? this.props.credentials.user
      : undefined

    const duration = (event === Events.SESSION_ENDED)
      ? ((new Date()) - this.sessionStartTime) / 1000
      : null

    const properties = {
      duration: duration,
      pushNotificationsEnabled: false,
      appOpenedFromPushNotification: this.appOpenedFromPushNotification
    }
    if (duration === null) {
      delete properties.duration
    }
    this.appOpenedFromPushNotification = false

    // TODO Fix firebase code
    // Need to check for push notification permission every time
    // just in case user has just accepted it or changed it in settings
    // if (!this.isSimulator()) {
    //   firebase.messaging().hasPermission()
    //     .then(enabled => {
    //       if (enabled) {
    //         properties.pushNotificationsEnabled = true
    //       }
    //       trackEvent({user, event: event, properties})
    //     })
    // } else {
    trackEvent({user, event: event, properties})
    // }
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={Colors.statusBar.background} barStyle={'light-content'} />
        <ReduxNavigation />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    credentials: state.credentials
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
