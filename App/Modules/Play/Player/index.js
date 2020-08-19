import React, { Component } from 'react'
import { connect } from 'react-redux'

import Client, { isConnected } from 'App/Services/Client'

import Screen from './Screen'

export class PlayerContainer extends Component {
  constructor (props) {
    super(props)
    this.client = new Client()
    this.state = {
      config: null,
      connected: false,
      speed: 'medium',
      showNotConnectedModal: false
    }
  }

  async componentWillMount () {
    const connected = await isConnected()
    if (connected) {
      const config = await this.client.getConfig()
      this.setState({ config })
    }
    this.setState({showNotConnectedModal: !connected, connected})
  }

  checkIsConnected = async () => {
    const connected = await isConnected()
    this.setState({showNotConnectedModal: !connected, connected})
    return connected
  }

  onConnect = async () => {
    const connected = await isConnected()
    if (connected) {
      const config = await this.client.getConfig()
      this.setState({ config })
      const { speed } = this.state
      this.client.setSpeed(speed)
    }
    this.setState({connected})
  }

  onDraggableMove = (touch) => {
    this.client.move(touch)
  }

  onDraggableRelease = async (touch) => {
    if (await this.checkIsConnected()) {
      this.client.moveAndStop(touch)
    }
  }

  onUp = async () => {
    if (await this.checkIsConnected()) {
      this.client.moveByDirection('up')
    }
  }

  onDown = async () => {
    if (await this.checkIsConnected()) {
      this.client.moveByDirection('down')
    }
  }

  onLeft = async () => {
    if (await this.checkIsConnected()) {
      this.client.moveByDirection('left')
    }
  }

  onRight = async () => {
    if (await this.checkIsConnected()) {
      this.client.moveByDirection('right')
    }
  }

  onLongPress = async (direction) => {
    if (await this.checkIsConnected()) {
      this.client.moveByDirection(direction, false)
    }
  }

  onLongPressOut = async () => {
    if (await this.checkIsConnected()) {
      this.client.stop()
    }
  }

  onSkillPress = async (skill) => {
    if (await this.checkIsConnected()) {
      this.client.doSkill(skill.cmd, skill.stopAtEnd)
    }
  }

  onToggleSpeed = () => {
    const { speed } = this.state
    let newSpeed = null
    if (speed === 'medium') {
      newSpeed = 'fast'
    } else if (speed === 'fast') {
      newSpeed = 'slow'
    } else if (speed === 'slow') {
      newSpeed = 'medium'
    }
    this.client.setSpeed(newSpeed)
    this.setState({speed: newSpeed})
  }

  onLEDMatrixPress = (matrix) => {
    this.client.setLEDMatrix(matrix)
  }

  onHelp = () => {
    this.props.navigation.navigate('WebScreen', {
      source: 'https://wikifactory.com/+OttoDIY/otto-diy-plus',
      title: 'Otto DIY+'
    })
  }

  onHideNotConnectedModal = () => {
    this.setState({showNotConnectedModal: false})
  }

  onChooseRobotPress = () => {
    this.props.navigation.navigate('WhichRobotScreen', { hideSkip: true })
  }

  onCodeLabPress = () => {
    this.props.navigation.navigate('CodeLabScreen')
  }

  render () {
    const {connected, config, speed, showNotConnectedModal} = this.state
    return (
      <Screen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
        connected={connected}
        config={config}
        speed={speed}
        showNotConnectedModal={showNotConnectedModal}
        onConnect={this.onConnect}
        onDraggableMove={this.onDraggableMove}
        onDraggableRelease={this.onDraggableRelease}
        onUp={this.onUp}
        onDown={this.onDown}
        onLeft={this.onLeft}
        onRight={this.onRight}
        onLongPress={this.onLongPress}
        onLongPressOut={this.onLongPressOut}
        onSkillPress={this.onSkillPress}
        onToggleSpeed={this.onToggleSpeed}
        onLEDMatrixPress={this.onLEDMatrixPress}
        onHelp={this.onHelp}
        onHideNotConnectedModal={this.onHideNotConnectedModal}
        onChooseRobotPress={this.onChooseRobotPress}
        onCodeLabPress={this.onCodeLabPress}
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

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer)
