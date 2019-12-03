import React, { Component } from 'react'
import { connect } from 'react-redux'

import { NavButton } from 'App/Components'

import Screen from './Screen'

export class WhichRobotContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation
    const { params = {} } = navigation.state
    const headerRight = (params.showSkip)
      ? <NavButton onPress={() => navigate('HomeScreen')} text='Skip' />
      : null
    return (params.hideBack)
      ? { headerLeft: null, headerRight }
      : { headerRight }
  }

  onConnect = () => {
    this.props.navigation.navigate('HomeScreen')
  }

  onPress = (robot) => {
    if (robot === 'simulator') {
      this.props.navigation.navigate('ConnectScreen', {
        robot,
        onDone: this.onConnect
      })
    } else {
      this.props.navigation.navigate('ConnectRobotScreen', {
        robot
      })
    }
  }

  render () {
    return (
      <Screen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
        onPress={this.onPress}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WhichRobotContainer)
