import React, { Component } from 'react'
import { connect } from 'react-redux'

import Screen from './Screen'

export class OnboardingContainer extends Component {
  onDone = () => {
    this.props.navigation.navigate('WhichRobotScreen', { hideBack: true })
  }

  render () {
    return (
      <Screen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
        onDone={this.onDone}
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

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingContainer)
