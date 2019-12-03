// Start container that is the initial route set in Navigation/AppNavigation
//
// It doesn't render anything, and instead waits until startupTime is set (i.e. redux persist store is still loading)
// before hiding the splash screen and navigating to another Screen
//

import { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import SplashScreen from 'react-native-splash-screen'

import StartupActions from 'App/Redux/StartupRedux'

import { captureUser } from 'App/Services/CrashReporting'

class StartContainer extends Component {
  componentWillReceiveProps (nextProps) {
    const { startupTime, installedAt, credentials } = nextProps
    if (!startupTime) {
      // Store still loading
      return
    }

    SplashScreen.hide()

    const loggedIn = (credentials && credentials.user != null && credentials.jwt != null)

    // Optionally change initial route here, e.g. depending if user is logged in
    const routeName = (installedAt != null) ? 'WhichRobotScreen' : 'OnboardingScreen'
    const user = (loggedIn) ? credentials.user : null

    if (loggedIn) {
      captureUser(credentials.user)
    }

    // See https://github.com/react-navigation/react-navigation/issues/2073#issuecomment-354596948
    // Must call Navigation/INIT instead of NavigationActions.navigate so that user param gets passed to children!
    this.props.navigation.dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        {
          type: 'Navigation/INIT',
          routeName: routeName,
          params: {user}
        }
      ]
    }))

    if (!installedAt) {
      this.props.setInstalledAt()
    }
  }

  render () {
    return null
  }
}

const mapStateToProps = (state) => {
  return {
    startupTime: (state.startup) ? state.startup.time : null,
    installedAt: (state.startup) ? state.startup.installedAt : null,
    credentials: state.credentials
  }
}

const mapDispatchToProps = (dispatch) => ({
  setInstalledAt: () => dispatch(StartupActions.setInstalledAt())
})

export default connect(mapStateToProps, mapDispatchToProps)(StartContainer)
