import React, { Component } from 'react'
import { connect } from 'react-redux'

import Client, { setRobot } from 'App/Services/Client'
import ConnectRobotScreen from './Screen'

export class ConnectRobotContainer extends Component {
  constructor (props) {
    super(props)
    this.client = new Client()
    this.state = {
      robot: null,
      config: null
    }
  }

  async componentWillMount () {
    const { state } = this.props.navigation
    const robot = state && state.params && state.params.robot
    if (robot) {
      await setRobot(robot)
      const config = await this.client.getConfig()
      this.props.navigation.setParams({title: config.name})
      this.setState({ robot, config })
    }
  }

  onConnect = () => {
    this.props.navigation.navigate('PlayerScreen')
  }

  onConnectPress = () => {
    const { robot } = this.state
    this.props.navigation.navigate('ConnectScreen', {
      robot,
      onDone: this.onConnect
    })
  }

  onLinkPress = (link) => {
    this.props.navigation.navigate('WebScreen', { source: link.url, title: link.title })
  }

  render () {
    const { robot, config } = this.state
    if (!robot || !config) {
      return null
    }

    return (
      <ConnectRobotScreen
        ref={(ref) => {
          this.screen = ref
        }}
        image={config.image}
        title={config.name}
        text={config.description}
        links={config.links}
        onLinkPress={this.onLinkPress}
        onConnectPress={this.onConnectPress}
        {...this.props}
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

export default connect(mapStateToProps, mapDispatchToProps)(ConnectRobotContainer)
